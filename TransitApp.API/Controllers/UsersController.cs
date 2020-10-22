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
    public class UsersController : ControllerBase
    {
        public ITransitRepository _repo { get; }
        public IMapper _mapper { get; }
        public UsersController(ITransitRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn= _mapper.Map<UserForDetailedDto>(user);
            return Ok(userToReturn);
        }

        // [HttpPut("{id}")]
        // public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        // {
        //     if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
        //          return Unauthorized();
 
        //         var userFromRepo = await _repo.GetUser(id);
        //         _mapper.Map(userForUpdateDto, userFromRepo);
 
        //         if (await _repo.SaveAll())
        //         {
        //             return NoContent();
        //         }
        //         throw new Exception($"Updateing user{id} failed on save");
            
        // }
    }
}