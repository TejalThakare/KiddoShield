
namespace Models;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Appointment
{
    [Key]
    public int Aid { get; set; }
    [Required]
    [StringLength(10)]
    public string Cid { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Required]
    public TimeSpan Time { get; set; }

    [Required]
    public string Contact { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Vname { get; set; }

    [Required]
    [ForeignKey("Hospital")]
    public int Hid { get; set; }
    public Hospital Hospital { get; set; }

    [Required]
    [ForeignKey("User")]
    public int Uid { get; set; }
    public User User { get; set; }
}
