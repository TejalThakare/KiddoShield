namespace doctorDto;
public class DoctorDto
{
    public int Did { get; set; }
    public string Dfname { get; set; }
    public string Dlname { get; set; }
    public string Contact { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Specialization { get; set; }
    public int Hid { get; set; }

    public DoctorDto()
    {
    }

    public DoctorDto(int did, string dfname, string dlname, string contact, string email, string specialization)
    {
        Did = did;
        Dfname = dfname;
        Dlname = dlname;
        Contact = contact;
        Email = email;
        Specialization = specialization;
    }

    public DoctorDto(int did, string dfname, string dlname, string contact, string email, string password, string specialization)
    {
        Did = did;
        Dfname = dfname;
        Dlname = dlname;
        Contact = contact;
        Email = email;
        Password = password;
        Specialization = specialization;
    }

    public DoctorDto(int did, string dfname, string dlname, string contact, string email, string password, string specialization, int hid)
    {
        Did = did;
        Dfname = dfname;
        Dlname = dlname;
        Contact = contact;
        Email = email;
        Password = password;
        Specialization = specialization;
        Hid = hid;
    }

    public override string ToString()
    {
        return $"DoctorDto [Did={Did}, Dfname={Dfname}, Dlname={Dlname}, Contact={Contact}, Email={Email}, Password={Password}, Specialization={Specialization}]";
    }
}
