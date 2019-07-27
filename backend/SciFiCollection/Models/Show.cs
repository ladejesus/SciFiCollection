using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SciFiCollection.Models
{
    public class Show
    {
        public int ShowId { get; set; }
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public string Actor { get; set; }
        
        public virtual List<Season> Seasons { get; set; }

    }
}
