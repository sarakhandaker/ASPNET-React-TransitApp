using System.Threading.Tasks;
using TransitApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System;
using TransitApp.API.Models;
using TransitApp.API.Dtos;
using System.Linq;

namespace TransitApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StopsController : ControllerBase
    {
        public ITransitRepository _repo { get; }
        public StopsController(ITransitRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{location}")]
        public async Task<IActionResult> GetClosestStops(string location)
        {
            float lat= float.Parse(location.Substring(0, 9));
            float lon= float.Parse(location.Substring(9,9));
            var Stops = await _repo.GetClosestStops(lat,-lon);
            return Ok(Stops);
        }

        [HttpPost]
        public async Task<IActionResult> UpdateUser(UserStopDto Data)
        {
            if (Data.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                 return Unauthorized();
 
                var userFromRepo = await _repo.GetUser(Data.UserId);
                var stopFromRepo = await _repo.GetStop(Data.StopId);

                var userStop= new UserStop {
                    User= userFromRepo,
                    UserId= userFromRepo.Id,
                    Stop=stopFromRepo,
                    StopId=stopFromRepo.Id,
                    Label=Data.Label
                };
  
               _repo.Add(userStop);
 
                if (await _repo.SaveAll())
                {
                    return NoContent();
                }
                throw new Exception($"Updateing failed on save");
            
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteStop(int userId, int id) 
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                 return Unauthorized();

            var user = await _repo.GetUser(userId);

            if (!user.UserStops.Any(s => s.Stop.Id == id))
                return Unauthorized();

            var userStopid= user.UserStops.FirstOrDefault(s => s.Stop.Id == id);

            var userStop = await _repo.GetUserStop(userStopid);
        }

    }
}