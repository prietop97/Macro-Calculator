using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Common
{
    class UserMacrosType
    {
        public int Id { get; set; }
        public Macros Macros { get; set; }
        public bool IsRecommended { get; set; }
    }
}
