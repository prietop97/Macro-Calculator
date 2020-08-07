using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Domain;
using Domain.MealEntities;
using Domain.UserEntities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public static class Seed
    {
        //UserManager<AppUser> userManager
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!context.Genders.Any())
            {
                var genders = new List<Gender> {

                    new Gender{ Id = 1, ShortDescription = "M", LongDescription = "Male", Multiplier = 5 },
                    new Gender{ Id = 2, ShortDescription = "F", LongDescription = "Female", Multiplier = -161 }

                };
                context.Genders.AddRange(genders);
            }

            if (!context.ActivitiesFactor.Any())
            {
                var activitiesFactors = new List<ActivityFactor> {

                    new ActivityFactor{ Id = 1, Description = "Little", Multiplier = 1.2f },
                    new ActivityFactor{ Id = 2, Description = "Mild", Multiplier = 1.375f },
                    new ActivityFactor{ Id = 3, Description = "Moderate", Multiplier = 1.55f },
                    new ActivityFactor{ Id = 4, Description = "High", Multiplier = 1.725f },
                    new ActivityFactor{ Id = 5, Description = "Extreme", Multiplier = 1.9f }

                };
                context.ActivitiesFactor.AddRange(activitiesFactors);
            }

            if (!context.Goals.Any())
            {
                var goals = new List<Goal> {

                    new Goal{ Id = 1, Description = "Loose", Multiplier = -350 },
                    new Goal{ Id = 2, Description = "Maintain", Multiplier = 0 },
                    new Goal{ Id = 3, Description = "Gain", Multiplier = 350 }

                };
                context.Goals.AddRange(goals);
            }

            if (!context.UnitSystems.Any())
            {
                var units = new List<UnitSystem> {

                    new UnitSystem{ Id = 1, Description = "US" },
                    new UnitSystem{ Id = 2, Description = "Metric" },

                };
                context.UnitSystems.AddRange(units);
            }

            if (!context.MealTypes.Any())
            {
                var mealTypes = new List<MealType> {

                    new MealType{ Id = 1, Title = "Breakfast" },
                    new MealType{ Id = 2, Title = "Snack" },
                    new MealType{ Id = 3, Title = "Lunch" },
                    new MealType{ Id = 4, Title = "Snack2" },
                    new MealType{ Id = 5, Title = "Dinner" }

                };
                context.MealTypes.AddRange(mealTypes);
            }

            if (!context.Users.Any())
            {
                var users = new List<AppUser>
            {
                new AppUser
                {
                    Id = "a",
                    UserName = "user100",
                    Email = "user100@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "a",
                        UnitSystemId = 1,
                        Weight = 150,
                        GoalId = 1,
                        GenderId = 1,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5),
                        ProteinGrams = 160,
                        FatGrams = 56,
                        CarbsGrams = 214
                    },
                },
                new AppUser
                {
                    Id = "b",
                    UserName = "user101",
                    Email = "user101@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "b",
                        UnitSystemId = 1,
                        GoalId = 1,
                        Weight = 150,
                        GenderId = 1,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5),
                    },

                },
                new AppUser
                {
                    Id = "c",
                    UserName = "user102",
                    Email = "user102@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "c",
                        UnitSystemId = 1,
                        GoalId = 1,
                        Weight = 150,
                        GenderId = 1,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5),
                    },

                },
                new AppUser
                {
                    Id = "d",
                    UserName = "user103",
                    Email = "user103@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "d",
                        UnitSystemId = 1,
                        GoalId = 1,
                        GenderId = 1,
                        Weight = 150,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5),
                    },

                },
            };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            context.SaveChanges();
        }
    }
}
