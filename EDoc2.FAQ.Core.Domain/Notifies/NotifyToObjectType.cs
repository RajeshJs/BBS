﻿using System.ComponentModel;

namespace EDoc2.FAQ.Core.Domain.Notifies
{
    /// <summary>
    /// 消息通知对象类型
    /// </summary>
    public enum NotifyToObjectType
    {
        [DisplayName("管理员")]
        Administrator = 1,

        [DisplayName("版主")]
        Moderator = 1 << 1,

        [DisplayName("会员")]
        Member = 1 << 2,

        [DisplayName("指定用户")]
        Single = 1 << 3
    }

    //public class NotifyToObjectType : Enumeration
    //{
    //    public static NotifyToObjectType Administrator = new NotifyToObjectType(1, "管理员");
    //    public static NotifyToObjectType All = new NotifyToObjectType(2, "所有人");
    //    public static NotifyToObjectType AllButAdministrator = new NotifyToObjectType(3, "除管理员外的所有人");
    //    public static NotifyToObjectType AllModerators = new NotifyToObjectType(4, "所有版主");
    //    public static NotifyToObjectType AllAccounts = new NotifyToObjectType(5, "所有会员");
    //    public static NotifyToObjectType Single = new NotifyToObjectType(6, "单人");

    //    public NotifyToObjectType()
    //    {
    //    }

    //    public NotifyToObjectType(int id, string name)
    //    : base(id, name)
    //    {

    //    }

    //    public static IEnumerable<NotifyToObjectType> List() => new[] 
    //    {
    //        Administrator,
    //        All,
    //        AllButAdministrator,
    //        AllModerators,
    //        AllAccounts,
    //        Single
    //    };

    //    public static NotifyToObjectType FromName(string name)
    //    {
    //        var type = List().SingleOrDefault(s => string.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));
    //        if (type == null)
    //            throw new ArgumentException($"Possible values for CardType: {string.Join(",", List().Select(s => s.Name))}");

    //        return type;
    //    }

    //    public static NotifyToObjectType From(int id)
    //    {
    //        var type = List().SingleOrDefault(s => s.Id == id);
    //        if (type == null)
    //            throw new ArgumentException($"Possible values for CardType: {string.Join(",", List().Select(s => s.Name))}");

    //        return type;
    //    }
    //}
}
