using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public static class Seed
    {
        //UserManager<AppUser> userManager
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {

            if (!context.Users.Any())
            {
                var users = new List<AppUser>
            {
                new AppUser
                {
                    UserName = "user100",
                    Email = "user100@gmail.com"
                },
                new AppUser
                {
                    UserName = "user101",
                    Email = "user101@gmail.com"
                },
                new AppUser
                {
                    UserName = "user102",
                    Email = "user102@gmail.com"
                },
                new AppUser
                {
                    UserName = "user103",
                    Email = "user103@gmail.com"
                },
            };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
           

            if (!context.Genders.Any())
            {
                var genders = new List<Gender> {

                    new Gender{ ShortDescription = "M", LongDescription = "Male", Multiplier = 5 },
                    new Gender{ ShortDescription = "F", LongDescription = "Female", Multiplier = -161 }

                };
                context.Genders.AddRange(genders);
            }

            if (!context.ActivitiesFactor.Any())
            {
                var activitiesFactors = new List<ActivityFactor> {

                    new ActivityFactor{ Description = "Little", Multiplier = 1.2f },
                    new ActivityFactor{ Description = "Mild", Multiplier = 1.375f },
                    new ActivityFactor{ Description = "Moderate", Multiplier = 1.55f },
                    new ActivityFactor{ Description = "High", Multiplier = 1.725f },
                    new ActivityFactor{ Description = "Extreme", Multiplier = 1.9f }

                };
                context.ActivitiesFactor.AddRange(activitiesFactors);
            }

            if (!context.Goals.Any())
            {
                var goals = new List<Goal> {

                    new Goal{ Description = "Loose", Multiplier = -350 },
                    new Goal{ Description = "Maintain", Multiplier = 0 },
                    new Goal{ Description = "Gain", Multiplier = 350 }

                };
                context.Goals.AddRange(goals);
            }

            context.SaveChanges();
        }
    }
}
