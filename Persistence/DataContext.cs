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
        public DbSet<MealType> MealType { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<Meal> Meals { get; set; }
        public DbSet<MealTypes> MealTypes { get; set; }
        public DbSet<UserMeals> UsersMeals { get; set; }
        public DbSet<MealPlanMeals> MealPlanMeals { get; set; }
        public DbSet<MealsIngredients> MealsIngredients { get; set; }
        public DbSet<UserMealPlan> UserMealPlans { get; set; }





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

            // MEALS
            builder.Entity<MealsIngredients>().HasKey(m => new { m.IngredientId, m.MealId });

            builder.Entity<MealsIngredients>().HasOne(m => m.Meal).WithMany(au => au.MealIngredients).HasPrincipalKey(m => m.Id).HasForeignKey(m => m.MealId);
            builder.Entity<MealsIngredients>().HasOne(m => m.Ingredient).WithMany(m => m.MealIngredients).HasPrincipalKey(m => m.Id).HasForeignKey(mt => mt.IngredientId);



            // MEALPLANMEALS
            builder.Entity<MealPlanMeals>().HasKey(mpm => new { mpm.Id, mpm.MealId, mpm.UserMealPlanId, mpm.MealTypeId });

            builder.Entity<MealPlanMeals>().HasOne(mpm => mpm.Meal).WithMany(m => m.MealPlansMeals).HasPrincipalKey(m => m.Id).HasForeignKey(mpm => mpm.MealId);
            builder.Entity<MealPlanMeals>().HasOne(mpm => mpm.UserMealPlan).WithMany(mp => mp.MealPlanMeals).HasPrincipalKey(mp => mp.Id).HasForeignKey(mpm => mpm.UserMealPlanId);
            builder.Entity<MealPlanMeals>().HasOne(mpm => mpm.MealType).WithOne(m => m.MealPlanMeals);

            // USERMEALS
            builder.Entity<UserMeals>().HasKey(um => new { um.MealId, um.AppUserId });

            builder.Entity<UserMeals>().HasOne(um => um.AppUser).WithMany(au => au.UserMeals).HasPrincipalKey(au => au.Id).HasForeignKey(um => um.AppUserId);
            builder.Entity<UserMeals>().HasOne(um => um.Meal).WithMany(m => m.UserMeals).HasPrincipalKey(m => m.Id).HasForeignKey(um => um.MealId);

            // USERMEALPLANS
            builder.Entity<UserMealPlan>().HasKey(um => new { um.AppUserId });
            builder.Entity<UserMealPlan>().HasOne(ump => ump.AppUser).WithMany(au => au.UserMealPlans).HasPrincipalKey(au => au.Id).HasForeignKey(ump => ump.AppUserId);


        }


    }
}
