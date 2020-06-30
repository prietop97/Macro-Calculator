using System;
using System.Collections.Generic;

namespace Domain.UserEntities
{
    public class Gender
    {
        public int Id { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public int Multiplier { get; set; }
        public ICollection<UserStat> UserStats { get; set; }

    }
}
