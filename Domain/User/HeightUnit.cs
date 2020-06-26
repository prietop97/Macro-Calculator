using System;
using System.Collections.Generic;

namespace Domain.User
{
    public class HeightUnit
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public ICollection<UserStat> UserStats { get; set; }
    }
}
