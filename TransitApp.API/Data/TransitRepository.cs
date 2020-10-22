using System.Collections.Generic;
using System.Threading.Tasks;
using TransitApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace TransitApp.API.Data
{
    public class TransitRepository : ITransitRepository
    {
        public DataContext _context { get; }
        public TransitRepository(DataContext context)
        {
           _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
             _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user= await _context.Users.Include(p => p.UserStops).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<Stop>> GetClosestStops(double lat, double lon)
        {
             var stops= await _context.Stops.ToListAsync();
             return stops;
        }

        public async Task<bool> SaveAll()
        {
           return await _context.SaveChangesAsync() > 0;
        }
    }
}