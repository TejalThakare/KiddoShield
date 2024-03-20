namespace userDto;
public class UserDto
{
    public int Uid { get; set; }
    public string Fname { get; set; }
    public string Lname { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public string Contact { get; set; }
    public int Hid { get; set; }

    public UserDto()
    {
    }

    public UserDto(string username, string password, string email)
    {
        Username = username;
        Password = password;
        Email = email;
    }

    public UserDto(string fname, string lname, string username, string email, string address, string contact)
    {
        Fname = fname;
        Lname = lname;
        Username = username;
        Email = email;
        Address = address;
        Contact = contact;
    }

    public UserDto(int uid, string fname, string lname, string username, string email, string address, string contact)
    {
        Uid = uid;
        Fname = fname;
        Lname = lname;
        Username = username;
        Email = email;
        Address = address;
        Contact = contact;
    }

    public UserDto(int uid, string fname, string lname, string username, string email, string password, string address, string contact)
    {
        Uid = uid;
        Fname = fname;
        Lname = lname;
        Username = username;
        Password = password;
        Email = email;
        Address = address;
        Contact = contact;
    }

    public UserDto(int uid, string fname, string lname, string username, string email, string password, string address, string contact, int hid)
    {
        Uid = uid;
        Fname = fname;
        Lname = lname;
        Username = username;
        Password = password;
        Email = email;
        Address = address;
        Contact = contact;
        Hid = hid;
    }
}
