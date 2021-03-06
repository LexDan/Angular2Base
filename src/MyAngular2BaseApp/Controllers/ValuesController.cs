﻿namespace Angular2Base.Controllers
{
    using System.Collections.Generic;
    using Microsoft.AspNet.Mvc;
    using Angular2Base.Infrastructure;

    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [NoCache]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2", "value3", "value4" };
        }
    }
}
