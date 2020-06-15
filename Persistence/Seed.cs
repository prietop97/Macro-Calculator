using System;
using System.Collections.Generic;
using System.Linq;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public static class Seed
    {
        public static void SeedData(ModelBuilder builder)
        {
            builder.Entity<Gender>().HasData(

                        new { Id = 1, ShortDescription = "M", LongDescription = "Male", Multiplier = 5 },
                        new { Id = 2, ShortDescription = "F", LongDescription = "Female", Multiplier = -161 }

            );
            builder.Entity<ActivityFactor>().HasData(
                        new { Id = 1, Description = "Little", Multiplier = 1.2f },
                        new { Id = 2, Description = "Mild", Multiplier = 1.375f },
                        new { Id = 3, Description = "Moderate", Multiplier = 1.55f },
                        new { Id = 4, Description = "High", Multiplier = 1.725f },
                        new { Id = 5, Description = "Extreme", Multiplier = 1.9f }
                    );

            
            builder.Entity<Goal>().HasData(
                new { Id = 1, Description = "Loose", Multiplier = -350 },
                new { Id = 2, Description = "Maintain", Multiplier = 0 },
                new { Id = 3, Description = "Gain", Multiplier = 350 }
                      
                  );
        }
    }
}
