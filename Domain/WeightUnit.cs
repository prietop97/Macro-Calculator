using System;
using System.Collections.Generic;

namespace Domain
{
    public class WeightUnit
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public ICollection<UserStat> UserStats { get; set; }
    }
}
