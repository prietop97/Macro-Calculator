using System;
using System.Collections.Generic;

namespace Domain.UserEntities
{
    public class Goal
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Multiplier { get; set; }
        public ICollection<UserStat> UserStats { get; set; }

    }
}