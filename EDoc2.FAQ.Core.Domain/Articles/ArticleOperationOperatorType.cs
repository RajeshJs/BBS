﻿using EDoc2.FAQ.Core.Domain.SeedWork;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EDoc2.FAQ.Core.Domain.Articles
{
    public class ArticleOperationOperatorType : Enumeration
    {
        public static ArticleOperationOperatorType User = new ArticleOperationOperatorType(1, "会员编号");
        public static ArticleOperationOperatorType Ip = new ArticleOperationOperatorType(2, "Ip地址");

        public ArticleOperationOperatorType() { }

        public ArticleOperationOperatorType(int id, string name) : base(id, name) { }

        public static IEnumerable<ArticleOperationOperatorType> List() => new[] { User, Ip };

        public static ArticleOperationOperatorType FromName(string name)
        {
            var state = List().SingleOrDefault(s => string.Equals(s.Name, name, StringComparison.CurrentCultureIgnoreCase));
            if (state == null)
                throw new ArgumentException($"Possible values for CardType: {string.Join(",", List().Select(s => s.Name))}");

            return state;
        }

        public static ArticleOperationOperatorType From(int id)
        {
            var state = List().SingleOrDefault(s => s.Id == id);
            if (state == null)
                throw new ArgumentException($"Possible values for CardType: {string.Join(",", List().Select(s => s.Name))}");

            return state;
        }
    }
}
