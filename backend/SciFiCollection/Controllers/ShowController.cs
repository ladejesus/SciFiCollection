﻿using Microsoft.AspNetCore.Mvc;
using SciFiCollection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SciFiCollection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowController : ControllerBase
    {
        private SiteContext db;

        public ShowController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Shows
        [HttpGet]
        public ActionResult<IEnumerable<Show>> Get()
        {
            return db.Shows;
        }

        [HttpGet("{id}")]
        public ActionResult<Show> GetById(int id)
        {
            return db.Shows.Single(a => a.ShowId == id);
        }


        // POST api/Show
        [HttpPost]
        public ActionResult<IEnumerable<Show>> Post([FromBody] Show show)
        {
            db.Shows.Add(show);
            db.SaveChanges();
            return db.Shows.ToList();
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Show>> Put([FromBody] Show show)
        {
            db.Shows.Update(show);
            db.SaveChanges();
            return db.Shows.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Show>> Delete(Show show)
        {
            db.Shows.Remove(show);
            db.SaveChanges();
            return db.Shows.ToList();
        }
    }
}
