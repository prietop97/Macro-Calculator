using System;
using Domain.Common;

namespace Domain.User
{
    public class UserMacros
    {
        public int Id { get; set; }

        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public Macros RecommendedMacros { get; set; }
        public int RecommendedMacrosId { get; set; }

        public Macros EditedMacros { get; set; }
        public int EditedMacrosId { get; set; }
    }
}
