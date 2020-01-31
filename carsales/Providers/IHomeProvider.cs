using carsales.Data;
using System.Collections.Generic;

namespace carsales.Providers
{
    public interface IHomeProvider
    {
        /// <summary>
        /// This will return all the cars registered
        /// </summary>
        /// <returns></returns>
        List<RegisteredCar> GetAllCars();

        /// <summary>
        /// Create new car in the database
        /// </summary>
        /// <param name=""></param>
        /// <returns></returns>
        int CreateCar(RegisteredCar newCar);
    }
}
