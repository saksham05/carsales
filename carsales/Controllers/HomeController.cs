using System;
using carsales.Data;
using carsales.Providers;
using Microsoft.AspNetCore.Mvc;
using carsales.Messages.Responses;
using System.Collections.Generic;

namespace carsales.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {

        private readonly IHomeProvider _homeProvider;

        public HomeController(IHomeProvider homeProvider)
        {
            _homeProvider = homeProvider;

        }

        [HttpGet]
        public IActionResult GetAllCars()
        {
            List<RegisteredCar> carList = _homeProvider.GetAllCars();
            
            if (carList != null)
            {
                return new JsonResult(new CarListResponse(carList));
            }
            else
            {
                return BadRequest(new JsonResult(new ErrorResponse(String.Format("List is not available"))));
            }
        }

        [HttpPost]
        public IActionResult CreateCar([FromBody] RegisteredCar newCar)
        {
            if (newCar != null)
            {
                int carId = _homeProvider.CreateCar(newCar);
                if (0 == carId)
                {
                    return BadRequest(new JsonResult(new ErrorResponse(String.Format("Car not created"))));
                }
                else
                {
                    return new JsonResult(new CarIdResponse(carId));
                }
            }
            else
            {
                return BadRequest(new JsonResult(new ErrorResponse(String.Format("Data is not received to server"))));
            }
        }
        
    }
}
