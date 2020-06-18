using System;
using System.IO;
using Domain;
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


        public DbSet<Gender> Genders { get; set; }
        public DbSet<ActivityFactor> ActivitiesFactor { get; set; }
        public DbSet<Goal> Goals { get; set; }
        public DbSet<HeightUnit> HeightUnits { get; set; }
        public DbSet<UserStat> UserStats { get; set; }



        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserStat>(x => x.HasKey(us => new { us.AppUserId, us.GoalId, us.GenderId, us.ActivityFactorId, us.HeightUnitId }));

            builder.Entity<AppUser>()
                .HasOne(au => au.UserStat).WithOne(us => us.AppUser).HasForeignKey<UserStat>(us => us.AppUserId);

            builder.Entity<UserStat>()
                .HasOne(us => us.Goal).WithMany(g => g.UserStats).HasForeignKey(us => us.GoalId);

            builder.Entity<UserStat>()
                 .HasOne(us => us.Gender).WithMany(g => g.UserStats).HasForeignKey(us => us.GenderId);

            builder.Entity<UserStat>()
                .HasOne(us => us.ActivityFactor).WithMany(af => af.UserStats).HasForeignKey(us => us.ActivityFactorId);

            builder.Entity<UserStat>()
                .HasOne(us => us.HeightUnit).WithMany(hu => hu.UserStats).HasForeignKey(us => us.HeightUnitId);

        }




    }
}
