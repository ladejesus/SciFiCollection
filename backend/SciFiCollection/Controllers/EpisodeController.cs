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
    public class EpisodeController : ControllerBase
    {
        private SiteContext db;

        public EpisodeController(SiteContext db)
        {
            this.db = db;
        }

        // GET api/Episodes
        [HttpGet]
        public ActionResult<IEnumerable<Episode>> Get()
        {
            return db.Episodes;
        }

        [HttpGet("{id}")]
        public ActionResult<Episode> GetById(int id)
        {
            return db.Episodes.Single(a => a.EpisodeId == id);
        }


        // POST api/Episode
        [HttpPost]
        public ActionResult<Album> Post([FromBody] Episode episode)
        {
            db.Episodes.Add(episode);
            db.SaveChanges();
            return db.Seasons.Single(a => a.AlbumId == episode.SeasonId);
        }

        // PUT api/values/5
        [HttpPut]
        public ActionResult<IEnumerable<Episode>> Put([FromBody] Episode episode)
        {
            db.Episodes.Update(episode);
            db.SaveChanges();
            return db.Episodes.ToList();
        }


        [HttpDelete]
        public ActionResult<IEnumerable<Episode>> Delete(Episode episode)
        {
            db.Episodes.Remove(episode);
            db.SaveChanges();
            return db.Episodes.ToList();
        }

    }
}
