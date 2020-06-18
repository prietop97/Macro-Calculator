using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UserStats : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HeightUnits",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeightUnits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserStats",
                columns: table => new
                {
                    AppUserId = table.Column<string>(nullable: false),
                    GoalId = table.Column<int>(nullable: false),
                    GenderId = table.Column<int>(nullable: false),
                    ActivityFactorId = table.Column<int>(nullable: false),
                    HeightUnitId = table.Column<int>(nullable: false),
                    Id = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    DateOfBirth = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserStats", x => new { x.AppUserId, x.GoalId, x.GenderId, x.ActivityFactorId, x.HeightUnitId });
                    table.ForeignKey(
                        name: "FK_UserStats_ActivitiesFactor_ActivityFactorId",
                        column: x => x.ActivityFactorId,
                        principalTable: "ActivitiesFactor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserStats_AspNetUsers_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserStats_Genders_GenderId",
                        column: x => x.GenderId,
                        principalTable: "Genders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserStats_Goals_GoalId",
                        column: x => x.GoalId,
                        principalTable: "Goals",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserStats_HeightUnits_HeightUnitId",
                        column: x => x.HeightUnitId,
                        principalTable: "HeightUnits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserStats_ActivityFactorId",
                table: "UserStats",
                column: "ActivityFactorId");

            migrationBuilder.CreateIndex(
                name: "IX_UserStats_AppUserId",
                table: "UserStats",
                column: "AppUserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserStats_GenderId",
                table: "UserStats",
                column: "GenderId");

            migrationBuilder.CreateIndex(
                name: "IX_UserStats_GoalId",
                table: "UserStats",
                column: "GoalId");

            migrationBuilder.CreateIndex(
                name: "IX_UserStats_HeightUnitId",
                table: "UserStats",
                column: "HeightUnitId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserStats");

            migrationBuilder.DropTable(
                name: "HeightUnits");
        }
    }
}
