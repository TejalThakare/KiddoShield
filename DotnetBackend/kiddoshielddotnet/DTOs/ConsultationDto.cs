namespace consultationDto;
using System;

public class ConsultationAppointmentDto
{
    public int Caid { get; set; }
    public int Cid { get; set; }
    public DateTime Date { get; set; }
    public DateTime Time { get; set; }
    public string Contact { get; set; }
    public string Email { get; set; }
    public string Specialization { get; set; }
    public int Did { get; set; }
    public int Uid { get; set; }

    public ConsultationAppointmentDto()
    {
    }

    public ConsultationAppointmentDto(DateTime date, DateTime time)
    {
        Date = date;
        Time = time;
    }

    public ConsultationAppointmentDto(int caid, int cid, DateTime date, DateTime time, string contact, string email, string specialization, int did, int uid)
    {
        Caid = caid;
        Cid = cid;
        Date = date;
        Time = time;
        Contact = contact;
        Email = email;
        Specialization = specialization;
        Did = did;
        Uid = uid;
    }

    public ConsultationAppointmentDto(int cid, DateTime date, DateTime time, string contact, string email, string specialization, int did)
    {
        Cid = cid;
        Date = date;
        Time = time;
        Contact = contact;
        Email = email;
        Specialization = specialization;
        Did = did;
    }

    public ConsultationAppointmentDto(int caid, int cid, DateTime date, DateTime time, string contact, string email, string specialization, int did)
    {
        Caid = caid;
        Cid = cid;
        Date = date;
        Time = time;
        Contact = contact;
        Email = email;
        Specialization = specialization;
        Did = did;
    }

    public override string ToString()
    {
        return $"ConsultationAppointmentDto [Caid={Caid}, Cid={Cid}, Date={Date}, Time={Time}, Contact={Contact}, Email={Email}, Specialization={Specialization}, Did={Did}, Uid={Uid}]";
    }
}
