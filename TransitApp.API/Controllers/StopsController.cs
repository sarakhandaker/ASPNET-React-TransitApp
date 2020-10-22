using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using TransitApp.API.Data;
using TransitApp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TransitApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class StopsController : ControllerBase
    {
        public ITransitRepository _repo { get; }
        public StopsController(ITransitRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetClosestStops()
        {
            var Stops = await _repo.GetClosestStops(47.705559,-122.331388);
            // var userToReturn= _mapper.Map<UserForDetailedDto>(user);
            return Ok(Stops);
        }
    }
}