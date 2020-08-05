using System;
using System.IO;
using System.Threading.Tasks;
using Domain.MealEntities;
using Domain.UserEntities;
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
        public DbSet<UnitSystem> UnitSystems { get; set; }
        public DbSet<UserStat> UserStats { get; set; }

        // MEALS
        public DbSet<MealType> MealTypes { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<DailyMealPlan> DailyMealPlans { get; set; }
        public DbSet<UserMeals> UsersMeals { get; set; }




        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // USERSTATS
            builder.Entity<UserStat>(x => x.HasKey(us => new { us.AppUserId, us.GoalId, us.GenderId, us.ActivityFactorId, us.UnitSystemId }));

            builder.Entity<UserStat>().HasOne(us => us.AppUser).WithOne(au => au.UserStat).HasForeignKey<UserStat>(us => us.AppUserId);
            builder.Entity<UserStat>().HasOne(us => us.Goal).WithMany(g => g.UserStats).HasForeignKey(us => us.GoalId);
            builder.Entity<UserStat>().HasOne(us => us.Gender).WithMany(g => g.UserStats).HasForeignKey(us => us.GenderId);
            builder.Entity<UserStat>().HasOne(us => us.ActivityFactor).WithMany(af => af.UserStats).HasForeignKey(us => us.ActivityFactorId);
            builder.Entity<UserStat>().HasOne(us => us.UnitSystem).WithMany(hu => hu.UserStats).HasForeignKey(us => us.UnitSystemId);

            // MEALPLANMEALS
            builder.Entity<DailyMealPlan>().HasKey(mpm => new { mpm.Id });
            builder.Entity<DailyMealPlan>().HasOne(mpm => mpm.AppUser).WithMany(m => m.DailyMealPlans).HasPrincipalKey(m => m.Id).HasForeignKey(mpm => mpm.UserId);

            // USERMEALS
            builder.Entity<UserMeals>().HasKey(um => new { um.MealId, um.MealPlanId, um.MealTypeId });

            builder.Entity<UserMeals>().HasOne(um => um.MealPlan).WithMany(au => au.UserMeals).HasPrincipalKey(au => au.Id).HasForeignKey(um => um.MealPlanId);
            builder.Entity<UserMeals>().HasOne(um => um.Meal).WithMany(m => m.UserMeals).HasPrincipalKey(m => m.Id).HasForeignKey(um => um.MealId);
            builder.Entity<UserMeals>().HasOne(um => um.MealType).WithMany(m => m.Meals).HasPrincipalKey(m => m.Id).HasForeignKey(um => um.MealTypeId);
        }


    }
}
