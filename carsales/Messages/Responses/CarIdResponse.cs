using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace carsales.Messages.Responses
{
    [DataContract]
    public class CarIdResponse : ApiResponse
    {
        public CarIdResponse (int carId) : base(ResponseStatus.Success)
        {
            CarId = carId;
        }

        [DataMember(Name = "carId")]
        public int CarId { get; }
    }
}
