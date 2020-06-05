using System;
namespace Domain
{
    public class Goal
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int Multiplier { get; set; }

        public Goal(string description, int multiplier)
        {
            Description = description;
            Multiplier = multiplier;
        }
    }
}