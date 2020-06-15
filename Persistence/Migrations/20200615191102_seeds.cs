using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class seeds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ActivitiesFactor",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 1, "Little", 1.2f });

            migrationBuilder.InsertData(
                table: "ActivitiesFactor",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 2, "Mild", 1.375f });

            migrationBuilder.InsertData(
                table: "ActivitiesFactor",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 3, "Moderate", 1.55f });

            migrationBuilder.InsertData(
                table: "ActivitiesFactor",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 4, "High", 1.725f });

            migrationBuilder.InsertData(
                table: "ActivitiesFactor",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 5, "Extreme", 1.9f });

            migrationBuilder.InsertData(
                table: "Genders",
                columns: new[] { "Id", "LongDescription", "Multiplier", "ShortDescription" },
                values: new object[] { 1, "Male", 5, "M" });

            migrationBuilder.InsertData(
                table: "Genders",
                columns: new[] { "Id", "LongDescription", "Multiplier", "ShortDescription" },
                values: new object[] { 2, "Female", -161, "F" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 1, "Loose", -350 });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 2, "Maintain", 0 });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "Id", "Description", "Multiplier" },
                values: new object[] { 3, "Gain", 350 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ActivitiesFactor",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ActivitiesFactor",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ActivitiesFactor",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ActivitiesFactor",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "ActivitiesFactor",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Genders",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Genders",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Goals",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
