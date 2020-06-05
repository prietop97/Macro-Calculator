using System;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //public DbSet<Value> Values { get; set; }
        public DbSet<Gender> Genders { get; set; }
        public DbSet<ActivityFactor> ActivitiesFactor { get; set; }
        public DbSet<Goal> Goals { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            //builder.Entity<Value>().HasData(
            //    new Value { Id = 1, Name = "Value 101" },
            //    new Value { Id = 2, Name = "Value 102" },
            //    new Value { Id = 3, Name = "Value 103" }
            //    );
        }

    }
}
