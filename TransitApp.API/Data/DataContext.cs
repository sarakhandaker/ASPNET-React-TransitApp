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
    }
}