using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if (!context.Genders.Any())
            {
                Console.WriteLine("HEY");
                var genders = new List<Gender>
                    {
                        new Gender("M", "Male",5),
                        new Gender("F", "Female",-161)
                    };
                context.Genders.AddRange(genders);
            }
            if (!context.ActivitiesFactor.Any())
            {
                var activities = new List<ActivityFactor>
                    {
                        new ActivityFactor("Little", 1.2f),
                        new ActivityFactor("Mild", 1.375f),
                        new ActivityFactor("Moderate", 1.55f),
                        new ActivityFactor("High", 1.725f),
                        new ActivityFactor("Extreme", 1.9f)
                    };
                context.ActivitiesFactor.AddRange(activities);
            }
            if (!context.Goals.Any())
            {
                var goals = new List<Goal>
                    {
                        new Goal("Loose", -350),
                        new Goal("Maintain", 0),
                        new Goal("Gain", 350)
                    };
                context.Goals.AddRange(goals);
            }
            context.SaveChanges();
        }
    }
}
