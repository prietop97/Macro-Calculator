using System;
using System.IO;
using System.Threading.Tasks;
using Domain;
using Domain.Meals;
using Domain.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            DbContextOptions<DataContext> context = options;
        }

        // USER

        public DbSet<Gender> Genders { get; set; }
        public DbSet<ActivityFactor> ActivitiesFactor { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<HeightUnit> HeightUnits { get; set; }
        public DbSet<WeightUnit> WeightUnits { get; set; }
        public DbSet<UserStat> UserStats { get; set; }

        // MEALS
        public DbSet<MealType> MealTypes { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<UserMeals> UsersMeals { get; set; }
        public DbSet<MealPlan> MealPlans { get; set; }
        public DbSet<MealPlanMeals> MealPlanMeals { get; set; }
        public DbSet<UserMealPlans> UsersMealPlans { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // USERSTATS
            builder.Entity<UserStat>(x => x.HasKey(us => new { us.AppUserId, us.GoalId, us.GenderId, us.ActivityFactorId, us.HeightUnitId, us.WeightUnitId }));

            builder.Entity<UserStat>().HasOne(us => us.AppUser).WithOne(au => au.UserStat).HasForeignKey<UserStat>(us => us.AppUserId);
            builder.Entity<UserStat>().HasOne(us => us.Goal).WithMany(g => g.UserStats).HasForeignKey(us => us.GoalId);
            builder.Entity<UserStat>().HasOne(us => us.Gender).WithMany(g => g.UserStats).HasForeignKey(us => us.GenderId);
            builder.Entity<UserStat>().HasOne(us => us.ActivityFactor).WithMany(af => af.UserStats).HasForeignKey(us => us.ActivityFactorId);
            builder.Entity<UserStat>().HasOne(us => us.HeightUnit).WithMany(hu => hu.UserStats).HasForeignKey(us => us.HeightUnitId);
            builder.Entity<UserStat>().HasOne(us => us.WeightUnit).WithMany(wu => wu.UserStats).HasForeignKey(us => us.WeightUnitId);

            // MEALS
            builder.Entity<Meal>().HasKey(m => new { m.CreatorId, m.MealTypeId });

            builder.Entity<Meal>().HasOne(m => m.Creator).WithMany(au => au.CreatedMeals).HasForeignKey(m => m.CreatorId);
            builder.Entity<Meal>().HasOne(m => m.MealType).WithMany(m => m.Meals).HasForeignKey(mt => mt.MealTypeId);


            // MEALPLAN
            builder.Entity<MealPlan>().HasKey(mp => new { mp.CreatorId });

            builder.Entity<MealPlan>().HasOne(mp => mp.Creator).WithMany(au => au.CreatedMealPlans).HasForeignKey(mp => mp.CreatorId);


            // MEALPLANMEALS
            builder.Entity<MealPlanMeals>().HasKey(mpm => new { mpm.MealId, mpm.MealPlanId });

            builder.Entity<MealPlanMeals>().HasOne(mpm => mpm.Meal).WithMany(m => m.MealPlansMeals).HasPrincipalKey(m => m.Id).HasForeignKey(mpm => mpm.MealId);
            builder.Entity<MealPlanMeals>().HasOne(mpm => mpm.MealPlan).WithMany(mp => mp.MealPlansMeals).HasPrincipalKey(mp => mp.Id).HasForeignKey(mpm => mpm.MealPlanId);


            // USERMEALS
            builder.Entity<UserMeals>().HasKey(um => new { um.MealId, um.AppUserId });

            builder.Entity<UserMeals>().HasOne(um => um.AppUser).WithMany(au => au.SavedMeals).HasPrincipalKey(au => au.Id).HasForeignKey(um => um.AppUserId);
            builder.Entity<UserMeals>().HasOne(um => um.Meal).WithMany(m => m.UserMeals).HasPrincipalKey(m => m.Id).HasForeignKey(um => um.MealId);

            // USERMEALPLANS
            builder.Entity<UserMealPlans>().HasKey(um => new { um.MealPlanId, um.AppUserId });
            builder.Entity<UserMealPlans>().HasOne(ump => ump.AppUser).WithMany(au => au.SavedMealPlans).HasPrincipalKey(au => au.Id).HasForeignKey(ump => ump.AppUserId);
            builder.Entity<UserMealPlans>().HasOne(ump => ump.MealPlan).WithMany(m => m.UserMealPlans).HasPrincipalKey(m => m.Id).HasForeignKey(um => um.MealPlanId);


        }


    }
}
