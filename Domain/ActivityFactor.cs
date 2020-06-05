using System;
namespace Domain
{
    public class ActivityFactor
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public float Multiplier { get; set; }

        public ActivityFactor(string description, float multiplier)
        {
            Description = description;
            Multiplier = multiplier;
        }
    }
}
