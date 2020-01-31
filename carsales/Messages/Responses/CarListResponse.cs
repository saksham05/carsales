using carsales.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace carsales.Messages.Responses
{
    [DataContract]
    public class CarListResponse : ApiResponse
    {
        public CarListResponse(IReadOnlyCollection<RegisteredCar> carList) : base (ResponseStatus.Success)
        {
            CarList = carList;
        }

        [DataMember(Name = "carList")]
        public IReadOnlyCollection<RegisteredCar> CarList { get; }
    }
}
