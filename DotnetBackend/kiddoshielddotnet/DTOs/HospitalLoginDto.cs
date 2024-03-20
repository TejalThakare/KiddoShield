namespace hospitalLoginDto;
public class HospitalloginDto
{
    public string Email { get; set; }
    public string Password { get; set; }

    public HospitalloginDto()
    {
    }

    public HospitalloginDto(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public override string ToString()
    {
        return $"HospitalloginDto [Email={Email}, Password={Password}]";
    }
}

