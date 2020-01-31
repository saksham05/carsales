using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace carsales.Messages.Responses
{
    [DataContract]
    public class ErrorResponse : ApiResponse
    {
        public ErrorResponse(string reason) : base(ResponseStatus.Failure)
        {
            Reason = reason;
        }

        [DataMember(Name = "reason")]
        public string Reason { get; }
    }
}
