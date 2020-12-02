using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransitApp.API.Data;
using TransitApp.API.Dtos;
using TransitApp.API.Models;

namespace TransitApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/stops")]
    [ApiController]
    public class UserStopsController : ControllerBase
    {
        public ITransitRepository _repo { get; }
        public UserStopsController(ITransitRepository repo)
        {
            _repo = repo;
        }

        // [HttpPost]
        // public async Task<IActionResult> UpdateUser(UserStopDto Data)
        // {
        //     if (Data.UserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        //          return Unauthorized();
 
        //         var userFromRepo = await _repo.GetUser(Data.UserId);
        //         var stopFromRepo = await _repo.GetStop(Data.StopId);

        //         var userStop= new UserStop {
        //             User= userFromRepo,
        //             UserId= userFromRepo.Id,
        //             Stop=stopFromRepo,
        //             StopId=stopFromRepo.Id,
        //             Label=Data.Label
        //         };
  
        //        _repo.Add(userStop);
 
        //         if (await _repo.SaveAll())
        //         {
        //             return NoContent();
        //         }
        //         throw new Exception($"Updateing failed on save");
            
        // }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteStop(int userId, int id) 
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                 return Unauthorized();

            var user = await _repo.GetUser(userId);

            if (!user.UserStops.Any(s => s.Stop.Id == id))
                return Unauthorized();

            var userStopToFind= user.UserStops.FirstOrDefault(s => s.Stop.Id == id);

            var userStop = await _repo.GetUserStop(userStopToFind.Id);

            _repo.Delete(userStop);

            if (await _repo.SaveAll())
                return Ok();

            return BadRequest("Failed to Delete UserStop");
        }
        
    }
}