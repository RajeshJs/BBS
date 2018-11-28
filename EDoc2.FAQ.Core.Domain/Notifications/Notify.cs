﻿using EDoc2.FAQ.Core.Domain.SeedWork;
using System;

namespace EDoc2.FAQ.Core.Domain.Notifications
{
    public class Notify : Entity<Guid>, IAggregateRoot
    {
        /// <summary>
        /// 发起对象类型
        /// </summary>
        public virtual NotifyInitiatorType InitiatorType { get; private set; }

        /// <summary>
        /// 发起对象
        /// </summary>
        public string InitiatorId { get; private set; }

        /// <summary>
        /// 发起时间
        /// </summary>
        public DateTime InitiationTime { get; private set; }

        /// <summary>
        /// 操作类型
        /// </summary>
        public virtual NotifyOperationType OperationType { get; private set; }

        /// <summary>
        /// 关联对象类型
        /// </summary>
        public virtual NotifyRelationObjectType RelationObjectType { get; private set; }

        /// <summary>
        /// 关联对象编号
        /// </summary>
        public string RelationObjectId { get; private set; }

        /// <summary>
        /// 被通知对象的类型
        /// </summary>
        public virtual NotifyToObjectType ToObjectType { get; private set; }

        /// <summary>
        /// 被通知对象编号
        /// </summary>
        public string ToObjectId { get; private set; }

        /// <summary>
        /// 是否已删除
        /// </summary>
        public bool IsDeleted { get; private set; }

        /// <summary>
        /// 删除时间
        /// </summary>
        public DateTime? DeletionTime { get; private set; }

        /// <summary>
        /// 过期时间
        /// </summary>
        public DateTime? ExpirationTime { get; private set; }

        public Notify(NotifyInitiatorType initiatorType, 
            string initiatorId, 
            NotifyOperationType operationType, 
            NotifyRelationObjectType relationObjectType, 
            string relationObjectId, 
            NotifyToObjectType toObjectType, 
            string toObjectId)
        {
            Id = Guid.NewGuid();
            InitiatorType = initiatorType;
            InitiatorId = initiatorId;
            InitiationTime = DateTime.Now;
            OperationType = operationType;
            RelationObjectType = relationObjectType;
            RelationObjectId = relationObjectId;
            ToObjectType = toObjectType;
            ToObjectId = toObjectId;
        }

        /// <summary>
        /// 设置为删除
        /// </summary>
        public void SetDeleted()
        {
            if (IsDeleted) return;

            IsDeleted = true;
            DeletionTime = DateTime.Now;
        }

        public void SetExpirationTime(DateTime expirationTime)
        {
            if (IsDeleted) return;

            ExpirationTime = expirationTime;
        }
    }
}
