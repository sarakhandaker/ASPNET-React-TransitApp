using System.Threading.Tasks;
using TransitApp.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace TransitApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StopTimesController : ControllerBase
    {
        public ITransitRepository _repo { get; }
        public StopTimesController(ITransitRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetNextTimes(int id)
        {
            var times = await _repo.GetTimes(id);
            return Ok(times);
        }

    }
}