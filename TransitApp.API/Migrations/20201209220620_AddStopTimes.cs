using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TransitApp.API.Migrations
{
    public partial class AddStopTimes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StopTimes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TripId = table.Column<int>(nullable: false),
                    ArrivalTime = table.Column<DateTime>(nullable: false),
                    DepartureTime = table.Column<DateTime>(nullable: false),
                    StopId = table.Column<int>(nullable: false),
                    StopSequence = table.Column<string>(nullable: true),
                    StopHeadsign = table.Column<string>(nullable: true),
                    PickupType = table.Column<string>(nullable: true),
                    DropOffType = table.Column<string>(nullable: true),
                    ShapeDistTraveled = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StopTimes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StopTimes_Stops_StopId",
                        column: x => x.StopId,
                        principalTable: "Stops",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_StopTimes_StopId",
                table: "StopTimes",
                column: "StopId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StopTimes");
        }
    }
}
