using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SciFiCollection.Models
{
    public class Season
    {
        public int SeasonId { get; set; }
        public string Description { get; set; }
        public string ProductionCompany { get; set; }
        public string ImageURL { get; set; }
        public int ShowId { get; set; }

        public virtual List<Episode> Episodes { get; set; }
    }
}
 