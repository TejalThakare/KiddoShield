namespace Models;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Vaccine
{
    [Key]
    [Column(name: "vid", TypeName = "int")]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Vid { get; set; }

    [Column(name: "vname", TypeName = "nvarchar(255)")]
    public string Vname { get; set; }

    [Column(name: "avdoses", TypeName = "int")]
    public int Avdoses { get; set; }

    // Many-to-One relationship with Hospital
    [ForeignKey("Hospital")]
    [Required]
    public int Hid { get; set; }
    public Hospital Hospital { get; set; }
}

