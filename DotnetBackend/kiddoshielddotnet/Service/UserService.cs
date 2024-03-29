namespace userservice;

using childDto;
using DbcontextClass;
using loginDto;
using Models;
using userDto;
using userservice;

public class UserService : IUserService
{
    private readonly KiddoDBContext _dbContext;
    public UserService(KiddoDBContext dbContext)
    {
        _dbContext = dbContext;
    }
    public string RegisterUser(int hid, UserDto userDto)
    {
        Hospital hospital = _dbContext.Hospitals.Where(x => x.Hid == hid).FirstOrDefault();

        if (userDto == null)
        {
            return "User object is null";
        }
        if (hospital != null)
        {
            User user = new User
            {
                Uid = userDto.Uid,
                Fname = userDto.Fname,
                Lname = userDto.Lname,
                Username = userDto.Username,
                Password = userDto.Password,
                Email = userDto.Email,
                Address = userDto.Address,
                Contact = userDto.Contact
            };
            hospital.Users.Add(user);
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
            return "user Added Successfully!";
        }
        return "something went wrong";



    }

    //login user
    public string LoginUser(LoginDto loginDto)
    {
        User user = _dbContext.Users.FirstOrDefault(x => x.Email == loginDto.Email);
        if (user != null)
        {
            if (user.Email.Equals(loginDto.Email) && user.Password.Equals(loginDto.Password))
            {
                return "login success";
            }
            else
            {
                return "login failed";
            }
        }
        return "user not found";
    }

//child register
    public string RegisterChild(int uid, ChildDto childDto)
    {
        User user = _dbContext.Users.Find(uid);
        if (user != null)
        {
            Child child = new Child
            {
                Cfname = childDto.Cfname,
                Age = childDto.Age,
                Weight = childDto.Weight,
                Bloodgrp = childDto.Bloodgrp,
                Gender = childDto.Gender,
                Dob = childDto.Dob
            };
            user.Children.Add(child);
            _dbContext.Childs.Add(child);
            _dbContext.SaveChanges();
            return "child added successfully";
        }

        return "not found";
    }
}