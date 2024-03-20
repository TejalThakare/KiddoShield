namespace loginDto;
public class LoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }

    public LoginDto()
    {
    }

    public LoginDto(string email, string password)
    {
        Email = email;
        Password = password;
    }

    public override string ToString()
    {
        return $"LoginDto [Email={Email}, Password={Password}]";
    }
}
