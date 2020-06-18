using System;
using System.Collections.Generic;

namespace Domain
{
    public class ActivityFactor
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public float Multiplier { get; set; }
        public ICollection<UserStat> UserStats { get; set; }

    }
}
