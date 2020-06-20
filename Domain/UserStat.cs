using System;

namespace Domain
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
        public int Height { get; set; }

        // Rest
        public DateTime DateOfBirth { get; set; }


    }
}
