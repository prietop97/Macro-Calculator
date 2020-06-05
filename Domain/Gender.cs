using System;
namespace Domain
{
    public class Gender
    {
        public int Id { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public int Multiplier { get; set; }

        public Gender(string shortDescription, string longDescription, int multiplier)
        {
            ShortDescription = shortDescription;
            LongDescription = longDescription;
            Multiplier = multiplier;
        }
    }
}
