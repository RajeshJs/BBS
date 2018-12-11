﻿using EDoc2.FAQ.Core.Domain.Articles;
using EDoc2.FAQ.Core.Domain.Services;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace EDoc2.FAQ.Core.Domain.Accounts.Services
{
    public interface IAccountService : IDomainService
    {
        #region 查询

        /// <summary>
        /// 获取所有用户
        /// </summary>
        /// <returns></returns>
        IQueryable<User> GetUsers(bool skipAdmin = true);

        /// <summary>
        /// 根据编号查找用户
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<User> FindUserByIdAsync(string id);

        /// <summary>
        /// 根据编号查找用户
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>

        User FindUserById(string id);

        /// <summary>
        /// 获取用户的所有关注
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        IQueryable<User> GetFollows(User user);

        /// <summary>
        /// 获取用户所有粉丝
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        IQueryable<User> GetFans(User user);

        /// <summary>
        /// 获取用户收藏文章
        /// </summary>
        /// <returns></returns>
        IQueryable<Article> GetFavoriteArticles(User user);

        #endregion

        #region 命令

        /// <summary>
        /// 创建用户
        /// </summary>
        /// <param name="user">新建用户</param>
        /// <param name="password">密码</param>
        /// <param name="isSetAdmin">是否设置为管理员</param>
        /// <param name="allowMultipleAdmin">是否允许多个管理员</param>
        /// <returns></returns>
        Task<IdentityResult> Create(User user, string password, bool isSetAdmin = false, bool allowMultipleAdmin = false);

        /// <summary>
        /// 修改个人基本信息
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        Task<User> EditProfile(User user);

        /// <summary>
        /// 屏蔽用户
        /// </summary>
        /// <param name="operator"></param>
        /// <param name="targetUser"></param>
        /// <returns></returns>
        Task MuteUser(User @operator, User targetUser);

        /// <summary>
        /// 撤销屏蔽用户
        /// </summary>
        /// <param name="operator"></param>
        /// <param name="targetUser"></param>
        /// <returns></returns>
        Task UnMuteUser(User @operator, User targetUser);

        /// <summary>
        /// 关注用户
        /// </summary>
        /// <param name="operator">操作人</param>
        /// <param name="targetUser">被关注者</param>
        Task FollowUser(User @operator, User targetUser);

        /// <summary>
        /// 取消关注
        /// </summary>
        /// <param name="operator">操作人</param>
        /// <param name="targetUser">被取消关注者</param>
        Task UnFollowUser(User @operator, User targetUser);

        /// <summary>
        /// 加入收藏
        /// </summary>
        /// <param name="operator">操作人</param>
        /// <param name="article">文章</param>
        Task AddFavorite(User @operator, Article article);

        /// <summary>
        /// 取消收藏
        /// </summary>
        /// <param name="operator">操作人</param>
        /// <param name="article">文章</param>
        /// <returns></returns>
        Task RemoveFavorite(User @operator, Article article);

        /// <summary>
        /// 增加积分
        /// </summary>
        /// <param name="targetUser"></param>
        /// <param name="score"></param>
        /// <param name="reason"></param>
        /// <returns></returns>
        Task PlusScore(User targetUser, int score, ScoreChangeReason reason);

        /// <summary>
        /// 减少积分
        /// </summary>
        /// <param name="targetUser"></param>
        /// <param name="score"></param>
        /// <param name="reason"></param>
        /// <returns></returns>
        Task MinuScore(User targetUser, int score, ScoreChangeReason reason);

        #endregion
    }
}
