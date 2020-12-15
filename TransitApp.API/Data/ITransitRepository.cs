using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TransitApp.API.Models;

namespace TransitApp.API.Data
{
    public interface ITransitRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Stop>> GetClosestStops(double lat, double lon);
        Task<User> GetUser(int id);
        Task<UserStop> GetUserStop(int id);
        Task<Stop> GetStop(int id);

        Task<IEnumerable<DateTime>> GetTimes(int stopId);
    }
}