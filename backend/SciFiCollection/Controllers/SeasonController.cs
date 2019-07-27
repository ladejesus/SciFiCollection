using Microsoft.AspNetCore.Mvc;
using SciFiCollection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SciFiCollection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeasonController : ControllerBase
    {
        private SiteContext db;

        public SeasonController(SiteContext db)
        {
            this.db = db;
        }

        //Season Actions

        // GET api/Seasons
        [HttpGet]
        public ActionResult<IEnumerable<Season>> Get()
        {
            return db.Seasons;

        }

        [HttpGet("{id}")]
        public ActionResult<Season> GetById(int id)
        {
            return db.Seasons.Single(a => a.SeasonId == id);
        }

        // POST api/Season
        [HttpPost]
        public ActionResult<Show> Post([FromBody] Season season)
        {
            db.Seasons.Add(season);
            db.SaveChanges();
            return db.Shows.Single(a => a.ShowId == season.ShowId);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Season>> Put([FromBody] Season season)
        {
            db.Seasons.Update(season);
            db.SaveChanges();
            return db.Seasons.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Season>> Delete(Season season)
        {
            db.Seasons.Remove(season);
            db.SaveChanges();
            return db.Seasons.ToList();
        }

    }
}
