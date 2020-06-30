using System;

namespace Domain.UserEntities
{
    public class UserStat
    {
        // Primary Key
        public int Id { get; set; }

        // User
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        // Goal
        public int GoalId { get; set; }
        public Goal Goal { get; set; }

        // Gender
        public int GenderId { get; set; }
        public Gender Gender { get; set; }

        // Activity Factor
        public int ActivityFactorId { get; set; }
        public ActivityFactor ActivityFactor { get; set; }
        // Height
        public double Height { get; set; }
        // Weight
        public int UnitSystemId { get; set; }
        public UnitSystem UnitSystem { get; set; }
        public double Weight { get; set; }
        // Rest
        public DateTime DateOfBirth { get; set; }
        public double CarbsGrams { get; set; }
        public double ProteinGrams { get; set; }
        public double FatGrams { get; set; }


    }
}
