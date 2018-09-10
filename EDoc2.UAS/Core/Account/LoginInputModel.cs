﻿// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using System.ComponentModel.DataAnnotations;

namespace EDoc2.UAS.Core.Account
{
    public class LoginInputModel
    {
        [Required(ErrorMessage = "账号必填")]
        public string Username { get; set; }
        [Required(ErrorMessage = "密码必填")]
        public string Password { get; set; }
        public bool RememberLogin { get; set; }
        public string ReturnUrl { get; set; }
    }
}