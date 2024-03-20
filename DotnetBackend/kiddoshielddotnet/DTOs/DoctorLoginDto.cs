namespace doctorLoginDto;
public class DoctorloginDto
{
    public string Email { get; set; }
    public string Password { get; set; }

    public DoctorloginDto()
    {
    }

    public DoctorloginDto(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public override string ToString()
    {
        return $"DoctorloginDto [Email={Email}, Password={Password}]";
    }
}
