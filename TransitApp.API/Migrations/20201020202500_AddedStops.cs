﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace TransitApp.API.Migrations
{
    public partial class AddedStops : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Lat",
                table: "Users",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Lon",
                table: "Users",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateTable(
                name: "Stops",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StopIdKC = table.Column<int>(nullable: false),
                    StopCode = table.Column<int>(nullable: false),
                    StopName = table.Column<string>(nullable: true),
                    StopDesc = table.Column<string>(nullable: true),
                    StopLat = table.Column<double>(nullable: false),
                    StopLon = table.Column<double>(nullable: false),
                    ZoneId = table.Column<int>(nullable: false),
                    StopUrl = table.Column<string>(nullable: true),
                    LocationType = table.Column<string>(nullable: true),
                    ParentStation = table.Column<string>(nullable: true),
                    StopTimezone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stops", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserStop",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(nullable: false),
                    StopId = table.Column<int>(nullable: false),
                    Label = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserStop", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserStop_Stops_StopId",
                        column: x => x.StopId,
                        principalTable: "Stops",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserStop_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserStop_StopId",
                table: "UserStop",
                column: "StopId");

            migrationBuilder.CreateIndex(
                name: "IX_UserStop_UserId",
                table: "UserStop",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserStop");

            migrationBuilder.DropTable(
                name: "Stops");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Lat",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Lon",
                table: "Users");
        }
    }
}
