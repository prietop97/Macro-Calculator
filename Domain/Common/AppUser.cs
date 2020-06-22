using Domain.User;
using Microsoft.AspNetCore.Identity;

namespace Domain.Common
{
    public class AppUser : IdentityUser
    {
        public UserStat UserStat { get; set; }
        public UserMacros UserMacros { get; set; }
    }
}

