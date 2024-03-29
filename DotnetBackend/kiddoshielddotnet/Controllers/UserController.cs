// namespace UserController;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DbcontextClass;
using userservice;
using Models;
using userDto;
using loginDto;
using childDto;

[ApiController]
[Route("kiddoshield/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    //Register user 
    [HttpPost("registeruser/{hid}")]
    public string RegisterUser(int hid, UserDto userDto)
    {
        return _userService.RegisterUser(hid, userDto);
    }
    //login user
    [HttpPost("loginuser")]
    public string LoginUser(LoginDto loginDto)
    {
        return _userService.LoginUser(loginDto);
    }

    //register child   //not tested
    [HttpPost("registerchild/{uid}")]
    public string RegisterChild(int uid, ChildDto child)
    {
        return _userService.RegisterChild(uid, child);
    }
}