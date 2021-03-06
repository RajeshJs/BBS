﻿using EDoc2.FAQ.Core.Domain.SeedWork;
using System;
using System.Linq;
using System.Threading.Tasks;
using EDoc2.FAQ.Core.Domain.Repositories;

namespace EDoc2.FAQ.Core.Domain.Auditings
{
    public interface IAuditingRepository : IRepository<Auditing>
    {
        /// <summary>
        /// 新增审核任务
        /// </summary>
        /// <param name="auditing"></param>
        /// <returns></returns>
        Auditing Add(Auditing auditing);

        /// <summary>
        /// 根据编号查找审核任务
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Auditing Find(Guid id);

        /// <summary>
        /// 根据编号查找审核任务
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Auditing> FindAsync(Guid id);

        /// <summary>
        /// 查找所有的审核任务
        /// </summary>
        /// <returns></returns>
        Task<IQueryable<Auditing>> GetAuditings();

        /// <summary>
        /// 审核
        /// </summary>
        /// <param name="auditing"></param>
        /// <param name="result"></param>
        void Audit(Auditing auditing, AuditingResult result);
    }
}
