using carsales.Data;
using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;


namespace carsales.Providers
{

    public class DbHomeProvider : IHomeProvider
    {
        private IMemoryCache _cache;

        public DbHomeProvider(IMemoryCache memoryCache)
        {
            if (_cache == null)
            {
                _cache = memoryCache;
            }
            
        }

        public int CreateCar(RegisteredCar newCar)
        {
            var cacheEntryOptions = new MemoryCacheEntryOptions().SetSize(5);
           _cache.Set("CarsList", newCar, cacheEntryOptions);
            return 1;
        }

        public List<RegisteredCar> GetAllCars()
        {
            var registeredCars = new List<RegisteredCar>();
            if(!_cache.TryGetValue("CarsList", out registeredCars))
            {

            }
            return registeredCars;
        }
    }
}
