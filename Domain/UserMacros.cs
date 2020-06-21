using System;
namespace Domain
{
    public class UserMacros
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }
        public int TotalMacros { get; set; }
    }
}
