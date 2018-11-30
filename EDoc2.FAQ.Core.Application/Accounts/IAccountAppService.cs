﻿using EDoc2.FAQ.Core.Application.Accounts.Dtos;
using EDoc2.FAQ.Core.Application.ServiceBase;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

namespace EDoc2.FAQ.Core.Application.Accounts
{
    public interface IAccountAppService: IAppService
    {
        /// <summary>
        /// 邮件地址是否已经注册
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        Task<bool> IsEmailRegistered(string email);

        /// <summary>
        /// 用户注册
        /// </summary>
        /// <param name="dto"></param>
        Task<IdentityResult> Register(AccountDtos.Register dto);

        /// <summary>
        /// 生成重置密码的Token
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        Task<string> GenerateResetPasswordToken(string email);

        /// <summary>
        /// 用户登录
        /// </summary>
        /// <param name="dto"></param>
        Task<SignInResult> Login(AccountDtos.Login dto);

        /// <summary>
        /// 分页搜索
        /// </summary>
        /// <param name="dto"></param>
        /// <param name="skipAdmin">不检索管理员信息</param>
        /// <returns></returns>
        Task<PagingDto<AccountDtos.ListItem>> Search(AccountDtos.SearchReq dto, bool skipAdmin = true);

        /// <summary>
        /// 禁用用户
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        Task MuteUser(string userId);

        /// <summary>
        /// 获取用户详细信息
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        Task<AccountDtos.Details> GetUserProfile(string userId = null);

        /// <summary>
        /// 更新个人资料
        /// </summary>
        /// <param name="editDto"></param>
        /// <returns></returns>
        Task<AccountDtos.Details> EditProfile(AccountDtos.Edit editDto);

        /// <summary>
        /// 关注用户
        /// </summary>
        /// <param name="userId"></param>
        Task Follow(string userId);

        /// <summary>
        /// 取消关注用户
        /// </summary>
        /// <param name="userId"></param>
        Task UnFollow(string userId);
    }
}
