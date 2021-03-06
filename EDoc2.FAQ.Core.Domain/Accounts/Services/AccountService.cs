﻿using EDoc2.FAQ.Core.Domain.Articles;
using EDoc2.FAQ.Core.Domain.Exceptions;
using EDoc2.FAQ.Core.Domain.Services;
using Microsoft.AspNetCore.Identity;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace EDoc2.FAQ.Core.Domain.Accounts.Services
{
    public class AccountService : DomainService, IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly IAccountRepository _accountRepo;

        public AccountService(UserManager<User> userManager,
            IAccountRepository accountRepo)
        {
            _userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
            _accountRepo = accountRepo ?? throw new ArgumentNullException(nameof(accountRepo));
        }

        public IQueryable<User> GetUsers(bool skipAdmin = true)
        {
            return skipAdmin ? _accountRepo.GetUsers().Where(u => u.UserRoles.All(r => r.RoleId != Role.Administrator.Id)) : _accountRepo.GetUsers();
        }

        public async Task<User> FindUserByIdAsync(string id, bool tracking = true)
        {
            return await _accountRepo.FindUserByIdAsync(id, tracking);
        }

        public User FindUserById(string id)
        {
            return _accountRepo.FindUserById(id);
        }

        public IQueryable<User> GetFollows(User user)
        {
            return user.UserFollows.AsQueryable()
                .Where(s => !s.IsCancel && !s.Follow.IsMuted)
                .OrderBy(s => s.OperationTime)
                .Select(s => s.Follow);
        }

        public IQueryable<User> GetFans(User user)
        {
            return user.UserFans.AsQueryable()
                .Where(s => !s.IsCancel && !s.Fan.IsMuted)
                .OrderBy(s => s.OperationTime)
                .Select(s => s.Fan);
        }

        public IQueryable<Article> GetFavorites(User @operator)
        {
            var query = @operator.UserFavorites
                .AsQueryable()
                .OrderBy(s => s.OperationTime)
                .Select(s => s.Article);

            const ArticleState allowState = ArticleState.Published |
                                            ArticleState.Solved |
                                            ArticleState.UnSolved |
                                            ArticleState.Unsatisfactory;

            return query.Where(s => (s.State & allowState) > 0);
        }

        public async Task<bool> IsFavorite(User @operator, Guid id)
        {
            await Task.CompletedTask;
            return @operator.UserFavorites.Any(s => s.ArticleId == id && !s.IsCancel);
        }

        public async Task<bool> IsFollow(User @operator, string id)
        {
            await Task.CompletedTask;
            return @operator.UserFollows.Any(s => s.FollowId == id && !s.IsCancel);
        }

        public async Task<IdentityResult> Create(User user, string password, bool isSetAdmin = false, bool allowMultipleAdmin = false)
        {
            var result = await _userManager.CreateAsync(user, password);
            if (!result.Succeeded)
                return result;

            user.Initialize();
            if (isSetAdmin)
            {
                if (!allowMultipleAdmin)
                {
                    var exists = _accountRepo
                        .GetUsers()
                        .Any(s => s.Id != user.Id && s.UserRoles.All(r => r.RoleId != Role.Administrator.Id));

                    result = exists ?
                        IdentityResult.Failed(new IdentityError
                        {
                            Code = "NotAllowMultipluAdmin",
                            Description = "不允许多个管理员"
                        }) :
                        await _userManager.AddToRoleAsync(user, Role.Administrator.NormalizedName);
                }
                else
                {
                    result = await _userManager.AddToRoleAsync(user, Role.Administrator.NormalizedName);
                }
            }
            else
            {
                result = await _userManager.AddToRoleAsync(user, Role.Member.NormalizedName);
            }

            if (!result.Succeeded)
                await _userManager.DeleteAsync(user);

            return result;
        }

        public async Task<User> EditProfile(User user)
        {
            _accountRepo.UpdatePartly(user,
                nameof(User.Gender),
                nameof(User.Company),
                nameof(User.Signature),
                nameof(User.City));

            await Task.CompletedTask;
            return user;
        }

        public async Task MuteUser(User @operator, User targetUser)
        {
            if (!@operator.IsAdministrator && !@operator.IsModerator)
                throw new UnauthorizedAccessException();

            targetUser.IsMuted = true;
            _accountRepo.UpdatePartly(targetUser, nameof(User.IsMuted));
            await Task.CompletedTask;
        }

        public async Task UnMuteUser(User @operator, User targetUser)
        {
            if (!@operator.IsAdministrator && !@operator.IsModerator)
                throw new UnauthorizedAccessException();

            targetUser.IsMuted = false;
            _accountRepo.UpdatePartly(targetUser, nameof(User.IsMuted));
            await Task.CompletedTask;
        }

        public async Task FollowUser(User @operator, User targetUser)
        {
            if (@operator.IsFanOf(targetUser.Id, out var subscriber)) return;

            if (subscriber == null)
                await _accountRepo.AddSubscriber(new UserSubscriber(@operator.Id, targetUser.Id));
            else
            {
                subscriber.IsCancel = false;
                await _accountRepo.UpdateSubscriber(subscriber);
            }

            var followsProperty = @operator.GetOrSetProperty(UserProperty.Follows, @operator.Follows + 1);
            await _accountRepo.UpdateProperty(followsProperty);

            var fansProperty = targetUser.GetOrSetProperty(UserProperty.Fans, targetUser.Fans + 1);
            await _accountRepo.UpdateProperty(fansProperty);
        }

        public async Task UnFollowUser(User @operator, User targetUser)
        {
            if (!@operator.IsFanOf(targetUser.Id, out var subscriber)) return;

            if (subscriber != null)
            {
                subscriber.IsCancel = true;
                await _accountRepo.UpdateSubscriber(subscriber);
            }

            var followsProperty = @operator.GetOrSetProperty(UserProperty.Follows, @operator.Follows - 1);
            await _accountRepo.UpdateProperty(followsProperty);

            var fansProperty = targetUser.GetOrSetProperty(UserProperty.Fans, targetUser.Fans - 1);
            await _accountRepo.UpdateProperty(fansProperty);
        }

        public async Task AddFavorite(User @operator, Article article)
        {
            @operator.AddFavorite(article.Id);
            await Task.CompletedTask;
        }

        public async Task RemoveFavorite(User @operator, Article article)
        {
            @operator.RemoveFavorite(article.Id);
            await Task.CompletedTask;
        }

        public async Task PlusScore(User targetUser, int score, UserScoreChangeReason reason)
        {
            var scoreChange = new UserScoreHistory
            {
                UserId = targetUser.Id,
                Reason = reason,
                OriginScore = targetUser.Score,
                ChangeScore = score,
                FinalScore = targetUser.Score + score
            };
            await _accountRepo.AddScoreChange(scoreChange);

            var scoreProperty = targetUser.GetOrSetProperty(UserProperty.Score, scoreChange.FinalScore);
            await _accountRepo.UpdateProperty(scoreProperty);
        }

        public async Task MinuScore(User targetUser, int score, UserScoreChangeReason reason)
        {
            if (!targetUser.HasEnoughScore(score))
                throw new ScoreNotEnoughException(targetUser.Id, targetUser.Score, score);

            var scoreChange = new UserScoreHistory
            {
                UserId = targetUser.Id,
                Reason = reason,
                OriginScore = targetUser.Score,
                ChangeScore = score * -1,
                FinalScore = targetUser.Score - score
            };
            await _accountRepo.AddScoreChange(scoreChange);

            targetUser.GetOrSetProperty(UserProperty.Score, scoreChange.FinalScore);
        }

        public async Task ModifyAvatar(User @operator, string base64Avatar)
        {
            if (@operator == null) 
                throw new ArgumentNullException(nameof(@operator));

            @operator.GetOrSetProperty(UserProperty.Avatar, base64Avatar);

            await Task.CompletedTask;
        }
    }
}
