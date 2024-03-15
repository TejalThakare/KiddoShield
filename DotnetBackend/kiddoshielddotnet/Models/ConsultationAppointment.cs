namespace Models;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class ConsultationAppointment
{
    [Key]
    [Column("caid", TypeName = "int")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Caid { get; set; }

    [Column("cid", TypeName = "int")]
    [Required]
    public int Cid { get; set; }

    [Column("date", TypeName = "date")]
    [Required]
    public DateTime Date { get; set; }

    [Column("time", TypeName = "time")]
    [Required]
    public TimeSpan Time { get; set; }

    [Column("contact", TypeName = "nvarchar(255)")]
    [Required]
    public string Contact { get; set; }

    [Column("email", TypeName = "nvarchar(255)")]
    [Required]
    public string Email { get; set; }

    [Column("specialization", TypeName = "nvarchar(255)")]
    [Required]
    public string Specialization { get; set; }

    [Column("uid", TypeName = "int")]
    [ForeignKey("User")]
    [Required]
    public int Uid { get; set; }
    public User User { get; set; }

    [Column("did", TypeName = "int")]
    [ForeignKey("Doctor")]
    [Required]
    public int Did { get; set; }
    public Doctor Doctor { get; set; }
}
