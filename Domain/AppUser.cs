using System;
using System.Collections.Generic;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public UserStat UserStat { get; set; }
        public UserMacros UserMacros { get; set; }

    }
}

