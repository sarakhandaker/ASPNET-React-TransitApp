using System.Threading.Tasks;
using TransitApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
    }
}