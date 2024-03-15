
namespace Models; 
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

    public class Hospital
    {
        [Key]
        [Column("hid", TypeName = "int")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Hid { get; set; }

        [Column("hname", TypeName = "nvarchar(255)")]
        [Required]
        public string Hname { get; set; }

        [Column("address", TypeName = "nvarchar(MAX)")]
        [Required]
        public string Address { get; set; }

        [Column("contact", TypeName = "nvarchar(255)")]
        [Required]
        public string Contact { get; set; }

        [Column("emergencynum", TypeName = "nvarchar(255)")]
        [Required]
        public string Emergencynum { get; set; }

        [Column("email", TypeName = "nvarchar(255)")]
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Column("password", TypeName = "nvarchar(255)")]
        [Required]
        public string Password { get; set; }

        [JsonIgnore] // Assuming you're using Newtonsoft.Json for serialization
        public ICollection<User> Users { get; set; }

        [JsonIgnore]
        public ICollection<Doctor> Doctors { get; set; }

        [JsonIgnore]
        public ICollection<Vaccine> Vaccines { get; set; }

        [JsonIgnore]
        public ICollection<Feedback> Feedbacks { get; set; }

        [JsonIgnore]
        public ICollection<Appointment> Appointments { get; set; }
    }
