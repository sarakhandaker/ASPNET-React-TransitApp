using TransitApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace TransitApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {}
// name of property below is name of table in database
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Stop> Stops { get; set; }
        public DbSet<UserStop> UserStop {get; set;}
    }
}