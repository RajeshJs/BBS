﻿using MediatR;

namespace EDoc2.FAQ.Core.Domain.Articles.Events
{
    public class ArticleStateChangedToSolvedDomainEvent : INotification
    {
        public Article Article { get; set; }

        public long AdoptCommentId { get; set; }

        public ArticleStateChangedToSolvedDomainEvent(Article article, long adoptCommentId)
        {
            Article = article;
            AdoptCommentId = adoptCommentId;
        }
    }
}
