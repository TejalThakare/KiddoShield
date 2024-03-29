using System;
using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace kiddoshielddotnet.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Hospitals",
                columns: table => new
                {
                    hid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    hname = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    contact = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    emergencynum = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hospitals", x => x.hid);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Doctors",
                columns: table => new
                {
                    did = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    dfname = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    dlname = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    contact = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    specialization = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Hid = table.Column<int>(type: "int", nullable: false),
                    email = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(255)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctors", x => x.did);
                    table.ForeignKey(
                        name: "FK_Doctors_Hospitals_Hid",
                        column: x => x.Hid,
                        principalTable: "Hospitals",
                        principalColumn: "hid",
                        onDelete: ReferentialAction.Restrict);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    uid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    fname = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    lname = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    username = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    contact = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    Hid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.uid);
                    table.ForeignKey(
                        name: "FK_User_Hospitals_Hid",
                        column: x => x.Hid,
                        principalTable: "Hospitals",
                        principalColumn: "hid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Vaccines",
                columns: table => new
                {
                    vid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    vname = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    avdoses = table.Column<int>(type: "int", nullable: false),
                    Hid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaccines", x => x.vid);
                    table.ForeignKey(
                        name: "FK_Vaccines_Hospitals_Hid",
                        column: x => x.Hid,
                        principalTable: "Hospitals",
                        principalColumn: "hid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Appointment",
                columns: table => new
                {
                    Aid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Cid = table.Column<string>(type: "varchar(10)", maxLength: 10, nullable: false),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Time = table.Column<TimeSpan>(type: "time(6)", nullable: false),
                    Contact = table.Column<string>(type: "longtext", nullable: false),
                    Email = table.Column<string>(type: "longtext", nullable: false),
                    Vname = table.Column<string>(type: "longtext", nullable: false),
                    Hid = table.Column<int>(type: "int", nullable: false),
                    Uid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointment", x => x.Aid);
                    table.ForeignKey(
                        name: "FK_Appointment_Hospitals_Hid",
                        column: x => x.Hid,
                        principalTable: "Hospitals",
                        principalColumn: "hid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Appointment_User_Uid",
                        column: x => x.Uid,
                        principalTable: "User",
                        principalColumn: "uid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Child",
                columns: table => new
                {
                    Cid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Cfname = table.Column<string>(type: "longtext", nullable: false),
                    Age = table.Column<string>(type: "longtext", nullable: false),
                    Weight = table.Column<double>(type: "double", nullable: false),
                    Bloodgrp = table.Column<string>(type: "longtext", nullable: false),
                    Dob = table.Column<string>(type: "longtext", nullable: false),
                    Uid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Child", x => x.Cid);
                    table.ForeignKey(
                        name: "FK_Child_User_Uid",
                        column: x => x.Uid,
                        principalTable: "User",
                        principalColumn: "uid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ConsultationAppointments",
                columns: table => new
                {
                    caid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    cid = table.Column<int>(type: "int", nullable: false),
                    date = table.Column<DateTime>(type: "date", nullable: false),
                    time = table.Column<TimeSpan>(type: "time", nullable: false),
                    contact = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    specialization = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    uid = table.Column<int>(type: "int", nullable: false),
                    did = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConsultationAppointments", x => x.caid);
                    table.ForeignKey(
                        name: "FK_ConsultationAppointments_Doctors_did",
                        column: x => x.did,
                        principalTable: "Doctors",
                        principalColumn: "did",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ConsultationAppointments_User_uid",
                        column: x => x.uid,
                        principalTable: "User",
                        principalColumn: "uid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    fid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    msg = table.Column<string>(type: "nvarchar(255)", nullable: false),
                    date = table.Column<DateTime>(type: "datetime", nullable: false),
                    Uid = table.Column<int>(type: "int", nullable: false),
                    Hid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedback", x => x.fid);
                    table.ForeignKey(
                        name: "FK_Feedback_Hospitals_Hid",
                        column: x => x.Hid,
                        principalTable: "Hospitals",
                        principalColumn: "hid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Feedback_User_Uid",
                        column: x => x.Uid,
                        principalTable: "User",
                        principalColumn: "uid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Appointment_Hid",
                table: "Appointment",
                column: "Hid");

            migrationBuilder.CreateIndex(
                name: "IX_Appointment_Uid",
                table: "Appointment",
                column: "Uid");

            migrationBuilder.CreateIndex(
                name: "IX_Child_Uid",
                table: "Child",
                column: "Uid");

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationAppointments_did",
                table: "ConsultationAppointments",
                column: "did");

            migrationBuilder.CreateIndex(
                name: "IX_ConsultationAppointments_uid",
                table: "ConsultationAppointments",
                column: "uid");

            migrationBuilder.CreateIndex(
                name: "IX_Doctors_Hid",
                table: "Doctors",
                column: "Hid");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_Hid",
                table: "Feedback",
                column: "Hid");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_Uid",
                table: "Feedback",
                column: "Uid");

            migrationBuilder.CreateIndex(
                name: "IX_User_Hid",
                table: "User",
                column: "Hid");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccines_Hid",
                table: "Vaccines",
                column: "Hid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Appointment");

            migrationBuilder.DropTable(
                name: "Child");

            migrationBuilder.DropTable(
                name: "ConsultationAppointments");

            migrationBuilder.DropTable(
                name: "Feedback");

            migrationBuilder.DropTable(
                name: "Vaccines");

            migrationBuilder.DropTable(
                name: "Doctors");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Hospitals");
        }
    }
}
