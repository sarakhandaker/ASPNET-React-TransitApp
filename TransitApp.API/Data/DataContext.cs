using TransitApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace TransitApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }
        // name of property below is name of table in database
        public DbSet<User> Users { get; set; }
        public DbSet<Stop> Stops { get; set; }
        public DbSet<UserStop> UserStop { get; set; }
        public DbSet<StopTime> StopTimes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserStop>()
                .HasOne(us => us.User)
                .WithMany(u => u.UserStops)
                .HasForeignKey(us => us.UserId);
            modelBuilder.Entity<UserStop>()
                .HasOne(us => us.Stop)
                .WithMany(s => s.UserStops)
                .HasForeignKey(us => us.StopId);
        }
    }
}