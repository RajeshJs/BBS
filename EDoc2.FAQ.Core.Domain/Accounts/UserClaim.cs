﻿using Microsoft.AspNetCore.Identity;

namespace EDoc2.FAQ.Core.Domain.Accounts
{
    public class UserClaim : IdentityUserClaim<string>
    {
        public virtual User User { get; set; }
    }
}
