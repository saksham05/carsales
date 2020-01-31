﻿using Newtonsoft.Json;
using System.Runtime.Serialization;

namespace carsales.Data
{
    [DataContract]
    public class RegisteredCar
    {
        [JsonConstructor]

        public RegisteredCar()
        {
            
        }
        public RegisteredCar(string vehicleType, string make, string model, string engine, string doors, string wheels, string bodyType, string price)
        {
            VehicleType = vehicleType;
            Make = make;
            Model = model;
            Engine = engine;
            Doors = doors;
            Wheels = wheels;
            BodyType = bodyType;
            Price = price;
        }

        [DataMember(Name = "vehicleType")]
        public string VehicleType { get; set; }

        [DataMember(Name = "make")]
        public string Make { get; set; }

        [DataMember(Name = "model")]
        public string Model { get; set; }

        [DataMember(Name = "engine")]
        public string Engine { get; set; }

        [DataMember(Name = "doors")]
        public string Doors { get; set; }

        [DataMember(Name = "wheels")]
        public string Wheels { get; set; }

        [DataMember(Name = "bodyType")]
        public string BodyType { get; set; }

        [DataMember(Name = "price")]
        public string Price { get; set; }

    }
}
