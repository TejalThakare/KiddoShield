namespace Models;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Child
{
    [Key]
    public int Cid { get; set; }

    [Required]
    public string Cfname { get; set; }

    [Required]
    public string Age { get; set; }

    [Required]
    public double Weight { get; set; }

    [Required]
    public string Bloodgrp { get; set; }

    [Required]
    public string Dob { get; set; }

    [Required]
    [ForeignKey("User")]
    public int Uid { get; set; }
    public User User { get; set; }

    // If you want to include Hospital relationship, uncomment the following lines
    // [Required]
    // [ForeignKey("Hospital")]
    // public int Hid { get; set; }
    // public Hospital Hospital { get; set; }
}
