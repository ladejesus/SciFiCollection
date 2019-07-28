using Microsoft.EntityFrameworkCore;
using SciFiCollection.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SciFiCollection
{
    public class SiteContext : DbContext
    {
        public DbSet<Show> Shows { get; set; }
        public DbSet<Season> Seasons { get; set; }
        public DbSet<Episode> Episodes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=FinalFrontierScifiCollection;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Show>().HasData(
                new Show()
                {
                    ShowId = 1,
                    Name = "Star Trek Voyager",
                    ImageURL = "https://m.media-amazon.com/images/M/MV5BZDg5NzUxZTctODliNy00MzA2LWE1NjEtMzc0Zjc5NDA1OWFhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR6,0,182,268_AL_.jpg",
                    Actor = "Kate Mulgrew, Robert Beltran",
                    Description = "Pulled to the far side of the galaxy, where the Federation is seventy-five years away at maximum warp speed, a Starfleet ship must cooperate with Maquis rebels to find a way home."

                },
                new Show()
                {
                    ShowId = 2,
                    Name = "Stranger Things",
                    ImageURL = "https://m.media-amazon.com/images/M/MV5BZGExYjQzNTQtNGNhMi00YmY1LTlhY2MtMTRjODg3MjU4YTAyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    Actor = "Winona Ryder, Millie Bobby Brown",
                    Description = "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back."
                },
                new Show()
                {
                    ShowId = 3,
                    Name = "Battlestar Galactica",
                    ImageURL = "https://m.media-amazon.com/images/M/MV5BMTc1NTg1MDk3NF5BMl5BanBnXkFtZTYwNDYyMjI3._V1_.jpg",
                    Actor = " Edward James Olmos, Mary McDonnell",
                    Description = "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth."
                }
                );

            modelBuilder.Entity<Season>().HasData(
                new Season()
                {
                    SeasonId = 1,
                    Name = "Voyager Season 1",
                    Description = "Star Trek: Voyager (VOY) focuses on the 24th century adventures of Captain Kathryn Janeway aboard the U.S.S. Voyager.  Smaller than either Kirk’s or Picard’s starships—its crew complement is only 150—Voyager is fast and powerful, and has the ability to land on a planet’s surface.  It is one of the most technologically advanced vessels in Starfleet, utilizing computer circuitry that incorporates synthetic neural tissue.  Ironically, Janeway’s inaugural mission aboard Voyager was to be her last in the Alpha quadrant.  While attempting to capture the crew of a renegade Maquis vessel, both her ship and that of the Maquis were pulled into the distant Delta quadrant by powerful alien technology.  Unfortunately, there would be no similar “express” route to take them home again.  Stranded 70,000 light-years from Earth, Janeway convinced the Maquis to join her Starfleet crew and serve together during the long voyage back to Federation space",
                    ImageURL = "https://m.media-amazon.com/images/M/MV5BN2ExMzM5OGQtM2M1Yy00OWM1LWE1YWMtYTQzNjQ5YmE1NjU3XkEyXkFqcGdeQXVyMzQ2MDUxMTg@._V1_UX224_CR0,0,224,126_AL_.jpg",
                    ProductionCompany = "Paramount Television",
                    ShowId = 1
                },
                new Season()
                {
                    SeasonId = 2,
                    Name = "Stranger Things Season 1",
                    Description = "After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world, and sinister monsters. The boy's mother, Joyce, desperately tries to find him, and is convinced he is in grave danger, while the police chief searches for answers. Trying to help find him, the boy's friends discover a strange little girl, who is on the run from bad men.",
                    ImageURL = "https://m.media-amazon.com/images/M/MV5BMTUwNTE0ODYzOF5BMl5BanBnXkFtZTgwOTc0ODE0OTE@._V1_UY268_CR109,0,182,268_AL_.jpg",
                    ProductionCompany = "Monkey Massacre",
                    ShowId = 2
                },
                new Season()
                {
                    SeasonId = 3,
                    Name = "Battlestar Galactica Season 1",
                    Description = "With the 12 colonies of man virtually destroyed in the climax of a hundred-year war[1] with the Cylon Empire, President Roslin (Mary McDonnell) and Commander Adama (Edward James Olmos) gather up the few humans left and embark on a journey to find the mythical planet Earth, not realizing that the Cylon robot is no longer a recognizable enemy. Battlestar Galactica is a complete re-imagining of the 1970s series – upping the ante on the action, adventure, and drama that made the original so popular. ",
                    ImageURL = "https://m.media-amazon.com/images/M/MV5BMTUzNzY1Nzg0Nl5BMl5BanBnXkFtZTcwNTYxOTAzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    ProductionCompany = "R&D TV",
                    ShowId = 3
                }
                );

            modelBuilder.Entity<Episode>().HasData(
                new Episode()
                {
                    EpisodeId = 1,
                    Name = "Flesh and Blood Part: 1",
                    SeasonId = 1
                },
                new Episode()
                {
                    EpisodeId = 2,
                    Name = "Chapter 5: The Flayed",
                    SeasonId = 2
                },
                new Episode()
                {
                    EpisodeId = 3,
                    Name = "Day Break",
                    SeasonId = 3
                }
                );

        }
    }
}
