namespace Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class User
{
    [Key]
    [Column(name: "uid", TypeName = "int")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Uid { get; set; }

    [Column(name: "fname", TypeName = "nvarchar(255)")]
    public string Fname { get; set; }

    [Column(name: "lname", TypeName = "nvarchar(255)")]
    public string Lname { get; set; }

    [Column(name: "username", TypeName = "nvarchar(255)")]
    public string Username { get; set; }

    [Column(name: "password", TypeName = "nvarchar(255)")]
    public string Password { get; set; }

    [Column(name: "email", TypeName = "nvarchar(255)")]
    public string Email { get; set; }

    [Column(name: "address", TypeName = "nvarchar(MAX)")]
    public string Address { get; set; }

    [Column(name: "contact", TypeName = "nvarchar(255)")]
    public string Contact { get; set; }

    // One-to-Many relationship with Child
    [JsonIgnore]
    public ICollection<Child> Children { get; set; }

    // Many-to-One relationship with Hospital
    [ForeignKey("Hospital")]
    [Required]
    public int Hid { get; set; }
    public Hospital Hospital { get; set; }

    // One-to-Many relationship with Feedback
    [JsonIgnore]
    public ICollection<Feedback> Feedbacks { get; set; }

    // One-to-Many relationship with Appointment
    [JsonIgnore]
    public ICollection<Appointment> Appointments { get; set; }

    // One-to-Many relationship with ConsultationAppointment
    [JsonIgnore]
    public ICollection<ConsultationAppointment> ConsultationAppointments { get; set; }
}
