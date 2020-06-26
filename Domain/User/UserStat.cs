using System;
using Domain.Common;

namespace Domain.User
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
        public int HeightUnitId { get; set; }
        public HeightUnit HeightUnit { get; set; }
        public double Height { get; set; }

        // Weight
        public int WeightUnitId { get; set; }
        public WeightUnit WeightUnit { get; set; }
        public double Weight { get; set; }

        // Rest
        public DateTime DateOfBirth { get; set; }


    }
}
