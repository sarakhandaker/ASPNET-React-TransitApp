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

         Task<IEnumerable<Stop>> GetStops();

         Task<User> GetUser(int id);

    }
}