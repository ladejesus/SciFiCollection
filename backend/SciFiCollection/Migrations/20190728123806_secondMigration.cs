using Microsoft.EntityFrameworkCore.Migrations;

namespace SciFiCollection.Migrations
{
    public partial class secondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Seasons",
                table: "Seasons");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Seasons",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Seasons",
                keyColumn: "SeasonId",
                keyValue: 1,
                column: "Name",
                value: "Voyager Season 1");

            migrationBuilder.UpdateData(
                table: "Seasons",
                keyColumn: "SeasonId",
                keyValue: 2,
                column: "Name",
                value: "Stranger Things Season 1");

            migrationBuilder.UpdateData(
                table: "Seasons",
                keyColumn: "SeasonId",
                keyValue: 3,
                column: "Name",
                value: "Battlestar Galactica Season 1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Seasons");

            migrationBuilder.AddColumn<int>(
                name: "Seasons",
                table: "Seasons",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Seasons",
                keyColumn: "SeasonId",
                keyValue: 1,
                column: "Seasons",
                value: 7);

            migrationBuilder.UpdateData(
                table: "Seasons",
                keyColumn: "SeasonId",
                keyValue: 2,
                column: "Seasons",
                value: 4);

            migrationBuilder.UpdateData(
                table: "Seasons",
                keyColumn: "SeasonId",
                keyValue: 3,
                column: "Seasons",
                value: 1);
        }
    }
}
