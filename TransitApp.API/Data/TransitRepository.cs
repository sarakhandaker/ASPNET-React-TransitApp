using System.Collections.Generic;
using System.Threading.Tasks;
using TransitApp.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Device.Location;
using System.Linq;

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
            var user = await _context.Users.Include(p => p.UserStops).ThenInclude(x => x.Stop).FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<UserStop> GetUserStop(int id)
        {
            var userStop = await _context.UserStop.Include(p => p.Stop).FirstOrDefaultAsync(u => u.Id == id);
            return userStop;
        }

        public async Task<Stop> GetStop(int id)
        {
            var Stop = await _context.Stops.Include(p => p.UserStops).ThenInclude(x => x.User).FirstOrDefaultAsync(u => u.Id == id);
            return Stop;
        }

        public async Task<IEnumerable<Stop>> GetClosestStops(double lat, double lon)
        {
            var coord = new GeoCoordinate(lat, lon);
            var closeStops = _context.Stops.AsEnumerable()
                .OrderBy(stop => new GeoCoordinate(stop.StopLat, stop.StopLon).GetDistanceTo(coord))
                .Take(5).ToList();
            return closeStops;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}