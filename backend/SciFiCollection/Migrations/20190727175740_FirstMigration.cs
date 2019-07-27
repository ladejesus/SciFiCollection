using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SciFiCollection.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Shows",
                columns: table => new
                {
                    ShowId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Actor = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shows", x => x.ShowId);
                });

            migrationBuilder.CreateTable(
                name: "Seasons",
                columns: table => new
                {
                    SeasonId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Seasons = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    ProductionCompany = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true),
                    ShowId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seasons", x => x.SeasonId);
                    table.ForeignKey(
                        name: "FK_Seasons_Shows_ShowId",
                        column: x => x.ShowId,
                        principalTable: "Shows",
                        principalColumn: "ShowId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Episodes",
                columns: table => new
                {
                    EpisodeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    SeasonId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Episodes", x => x.EpisodeId);
                    table.ForeignKey(
                        name: "FK_Episodes_Seasons_SeasonId",
                        column: x => x.SeasonId,
                        principalTable: "Seasons",
                        principalColumn: "SeasonId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Shows",
                columns: new[] { "ShowId", "Actor", "Description", "ImageURL", "Name" },
                values: new object[] { 1, "Kate Mulgrew, Robert Beltran", "Pulled to the far side of the galaxy, where the Federation is seventy-five years away at maximum warp speed, a Starfleet ship must cooperate with Maquis rebels to find a way home.", "https://m.media-amazon.com/images/M/MV5BZDg5NzUxZTctODliNy00MzA2LWE1NjEtMzc0Zjc5NDA1OWFhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR6,0,182,268_AL_.jpg", "Star Trek Voyager" });

            migrationBuilder.InsertData(
                table: "Shows",
                columns: new[] { "ShowId", "Actor", "Description", "ImageURL", "Name" },
                values: new object[] { 2, "Winona Ryder, Millie Bobby Brown", "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.", "https://m.media-amazon.com/images/M/MV5BZGExYjQzNTQtNGNhMi00YmY1LTlhY2MtMTRjODg3MjU4YTAyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "Stranger Things" });

            migrationBuilder.InsertData(
                table: "Shows",
                columns: new[] { "ShowId", "Actor", "Description", "ImageURL", "Name" },
                values: new object[] { 3, " Edward James Olmos, Mary McDonnell", "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth.", "https://m.media-amazon.com/images/M/MV5BMTc1NTg1MDk3NF5BMl5BanBnXkFtZTYwNDYyMjI3._V1_.jpg", "Battlestar Galactica" });

            migrationBuilder.InsertData(
                table: "Seasons",
                columns: new[] { "SeasonId", "Description", "ImageURL", "ProductionCompany", "Seasons", "ShowId" },
                values: new object[] { 1, "Star Trek: Voyager (VOY) focuses on the 24th century adventures of Captain Kathryn Janeway aboard the U.S.S. Voyager.  Smaller than either Kirk’s or Picard’s starships—its crew complement is only 150—Voyager is fast and powerful, and has the ability to land on a planet’s surface.  It is one of the most technologically advanced vessels in Starfleet, utilizing computer circuitry that incorporates synthetic neural tissue.  Ironically, Janeway’s inaugural mission aboard Voyager was to be her last in the Alpha quadrant.  While attempting to capture the crew of a renegade Maquis vessel, both her ship and that of the Maquis were pulled into the distant Delta quadrant by powerful alien technology.  Unfortunately, there would be no similar “express” route to take them home again.  Stranded 70,000 light-years from Earth, Janeway convinced the Maquis to join her Starfleet crew and serve together during the long voyage back to Federation space", "https://m.media-amazon.com/images/M/MV5BN2ExMzM5OGQtM2M1Yy00OWM1LWE1YWMtYTQzNjQ5YmE1NjU3XkEyXkFqcGdeQXVyMzQ2MDUxMTg@._V1_UX224_CR0,0,224,126_AL_.jpg", "Paramount Television", 7, 1 });

            migrationBuilder.InsertData(
                table: "Seasons",
                columns: new[] { "SeasonId", "Description", "ImageURL", "ProductionCompany", "Seasons", "ShowId" },
                values: new object[] { 2, "After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world, and sinister monsters. The boy's mother, Joyce, desperately tries to find him, and is convinced he is in grave danger, while the police chief searches for answers. Trying to help find him, the boy's friends discover a strange little girl, who is on the run from bad men.", "https://m.media-amazon.com/images/M/MV5BMTUwNTE0ODYzOF5BMl5BanBnXkFtZTgwOTc0ODE0OTE@._V1_UY268_CR109,0,182,268_AL_.jpg", "Monkey Massacre", 4, 2 });

            migrationBuilder.InsertData(
                table: "Seasons",
                columns: new[] { "SeasonId", "Description", "ImageURL", "ProductionCompany", "Seasons", "ShowId" },
                values: new object[] { 3, "With the 12 colonies of man virtually destroyed in the climax of a hundred-year war[1] with the Cylon Empire, President Roslin (Mary McDonnell) and Commander Adama (Edward James Olmos) gather up the few humans left and embark on a journey to find the mythical planet Earth, not realizing that the Cylon robot is no longer a recognizable enemy. Battlestar Galactica is a complete re-imagining of the 1970s series – upping the ante on the action, adventure, and drama that made the original so popular. ", "https://m.media-amazon.com/images/M/MV5BMTUzNzY1Nzg0Nl5BMl5BanBnXkFtZTcwNTYxOTAzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "R&D TV", 1, 3 });

            migrationBuilder.InsertData(
                table: "Episodes",
                columns: new[] { "EpisodeId", "Name", "SeasonId" },
                values: new object[] { 1, "Flesh and Blood Part: 1", 1 });

            migrationBuilder.InsertData(
                table: "Episodes",
                columns: new[] { "EpisodeId", "Name", "SeasonId" },
                values: new object[] { 2, "Chapter 5: The Flayed", 2 });

            migrationBuilder.InsertData(
                table: "Episodes",
                columns: new[] { "EpisodeId", "Name", "SeasonId" },
                values: new object[] { 3, "Day Break", 3 });

            migrationBuilder.CreateIndex(
                name: "IX_Episodes_SeasonId",
                table: "Episodes",
                column: "SeasonId");

            migrationBuilder.CreateIndex(
                name: "IX_Seasons_ShowId",
                table: "Seasons",
                column: "ShowId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Episodes");

            migrationBuilder.DropTable(
                name: "Seasons");

            migrationBuilder.DropTable(
                name: "Shows");
        }
    }
}
