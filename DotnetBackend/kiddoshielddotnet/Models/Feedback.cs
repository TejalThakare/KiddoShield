namespace Models;
using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Feedback
{
    [Key]
    [Column("fid", TypeName = "int")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Fid { get; set; }

    [Column("msg", TypeName = "nvarchar(MAX)")]
    [Required]
    public string Msg { get; set; }

    [Column("date", TypeName = "datetime")]
    [Required]
    public DateTime Date { get; set; }

    [ForeignKey("User")]
    [Required]
    public int Uid { get; set; }
    public User User { get; set; }

    [ForeignKey("Hospital")]
    [Required]
    public int Hid { get; set; }
    public Hospital Hospital { get; set; }
}
