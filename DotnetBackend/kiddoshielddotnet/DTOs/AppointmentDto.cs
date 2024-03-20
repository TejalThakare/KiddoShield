namespace appointmentDto;
using System;


public class AppointmentDto
{
    public string Cid { get; set; }
    public DateTime Date { get; set; }
    public DateTime Time { get; set; }
    public string Contact { get; set; }
    public string Email { get; set; }
    public string Vname { get; set; }

    public AppointmentDto()
    {
    }

    public AppointmentDto(string cid, DateTime date, DateTime time, string contact, string email, string vname)
    {
        Cid = cid;
        Date = date;
        Time = time;
        Contact = contact;
        Email = email;
        Vname = vname;
    }

    // Optional constructor if you want to create an AppointmentDto with just date and time
    public AppointmentDto(DateTime date, DateTime time)
    {
        Date = date;
        Time = time;
    }
}
