using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Domain;
using Domain.Common;
using Domain.Meals;
using Domain.User;
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

            if (!context.HeightUnits.Any())
            {
                var heights = new List<HeightUnit> {

                    new HeightUnit{ Id = 1, Description = "US" },
                    new HeightUnit{ Id = 2, Description = "Metric" },

                };
                context.HeightUnits.AddRange(heights);
            }

            if (!context.MealTypes.Any())
            {
                var mealTypes = new List<MealType> {

                    new MealType{ Id = 1, Description = "Breakfast" },
                    new MealType{ Id = 2, Description = "Snack" },
                    new MealType{ Id = 3, Description = "Dinner" }

                };
                context.MealTypes.AddRange(mealTypes);
            }

            if (!context.WeightUnits.Any())
            {
                var weights = new List<WeightUnit> {

                    new WeightUnit{ Id = 1, Description = "US" },
                    new WeightUnit{ Id = 2, Description = "Metric" },

                };
                context.WeightUnits.AddRange(weights);
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
                        HeightUnitId = 1,
                        WeightUnitId = 1,
                        Weight = 150,
                        GoalId = 1,
                        GenderId = 1,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5)
                    },
                    UserMacros = new UserMacros
                    {
                        AppUserId = "a",
                        RecommendedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        },
                                                EditedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        }
                    }
                },
                new AppUser
                {
                    Id = "b",
                    UserName = "user101",
                    Email = "user101@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "b",
                        HeightUnitId = 1,
                        GoalId = 1,
                        WeightUnitId = 1,
                        Weight = 150,
                        GenderId = 1,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5)
                    },
                    UserMacros = new UserMacros
                    {
                        AppUserId = "b",
                        RecommendedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        },
                                                EditedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        }
                    }
                },
                new AppUser
                {
                    Id = "c",
                    UserName = "user102",
                    Email = "user102@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "c",
                        HeightUnitId = 1,
                        GoalId = 1,
                        WeightUnitId = 1,
                        Weight = 150,
                        GenderId = 1,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5)
                    },
                    UserMacros = new UserMacros
                    {
                        AppUserId = "c",
                        RecommendedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        },
                                                EditedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        }
                    }
                },
                new AppUser
                {
                    Id = "d",
                    UserName = "user103",
                    Email = "user103@gmail.com",
                    UserStat = new UserStat
                    {
                        AppUserId = "d",
                        HeightUnitId = 1,
                        GoalId = 1,
                        GenderId = 1,
                        WeightUnitId = 1,
                        Weight = 150,
                        ActivityFactorId = 1,
                        Height = 150,
                        DateOfBirth = new DateTime(1997,9,5)
                    },
                    UserMacros = new UserMacros
                    {
                        AppUserId = "d",
                        RecommendedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        },
                        EditedMacros = new Macros
                        {
                            Calories = 2000,
                            ProteinAmount = 125,
                            ProteinPercentage = 25,
                            ProteinCalories = 500,
                            FatAmount = 44,
                            FatPercentage = 20,
                            FatCalories = 400,
                            CarbsAmount = 275,
                            CarbsPercentage = 55,
                            CarbsCalories = 1100,
                        }
                    }
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
