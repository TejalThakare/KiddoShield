using Microsoft.EntityFrameworkCore;
using Models;
namespace DbcontextClass;

public class KiddoDBContext : DbContext
{
    // DbSet properties for your models
    public DbSet<Doctor> Doctors { get; set; }
    public DbSet<ConsultationAppointment> ConsultationAppointments { get; set; }
    public DbSet<Hospital> Hospitals { get; set; }
    public DbSet<Vaccine> Vaccines { get; set; }
    // Constructor
    public KiddoDBContext(DbContextOptions<KiddoDBContext> options) : base(options)
    {
    }


    // Configure relationships and additional model configurations
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure relationships between Doctor and ConsultationAppointment
        modelBuilder.Entity<ConsultationAppointment>()
            .HasOne(ca => ca.Doctor)
            .WithMany(d => d.ConsultationAppointments)
            .HasForeignKey(ca => ca.Did)
            .OnDelete(DeleteBehavior.Restrict); // Adjust delete behavior as needed

        // Configure relationships between Doctor and Hospital
        modelBuilder.Entity<Doctor>()
            .HasOne(d => d.Hospital)
            .WithMany(h => h.Doctors)
            .HasForeignKey(d => d.Hid)
            .OnDelete(DeleteBehavior.Restrict); // Adjust delete behavior as needed
    }
}
