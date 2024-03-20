namespace hospitalDto;
public class HospitalDto
{
    public int Hid { get; set; }
    public string Hname { get; set; }
    public string Address { get; set; }
    public string Contact { get; set; }
    public string Emergencynum { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }

    public HospitalDto()
    {
    }

    public HospitalDto(string hname, string email, string password)
    {
        Hname = hname;
        Email = email;
        Password = password;
    }

    public HospitalDto(int hid, string hname, string address, string contact, string emergencynum, string email)
    {
        Hid = hid;
        Hname = hname;
        Address = address;
        Contact = contact;
        Emergencynum = emergencynum;
        Email = email;
    }
    public HospitalDto(string hname, string address, string contact, string emergencynum, string email)
    {

        Hname = hname;
        Address = address;
        Contact = contact;
        Emergencynum = emergencynum;
        Email = email;
    }

    public HospitalDto(int hid, string hname, string address, string contact, string emergencynum, string email, string password)
    {
        Hid = hid;
        Hname = hname;
        Address = address;
        Contact = contact;
        Emergencynum = emergencynum;
        Email = email;
        Password = password;
    }

    public override string ToString()
    {
        return $"HospitalDto [Hid={Hid}, Hname={Hname}, Address={Address}, Contact={Contact}, Emergencynum={Emergencynum}, Email={Email}, Password={Password}]";
    }
}

