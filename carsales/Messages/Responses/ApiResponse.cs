using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace carsales.Messages.Responses
{
       [DataContract]
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ResponseStatus
        {
            [EnumMember(Value ="Success")]
            Success,

            [EnumMember(Value = "Failure")]
            Failure
        }

        [DataContract]
        public abstract class ApiResponse
        {
            protected ApiResponse(ResponseStatus status)
            {
                Status = status;
            }

            [DataMember(Name = "status")]
            public ResponseStatus Status { get; }
        }
    
}
