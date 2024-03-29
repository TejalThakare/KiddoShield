using childDto;
using loginDto;
using userDto;

namespace userservice;
public interface IUserService
{
    string RegisterUser(int hid, UserDto userDto);
    string LoginUser(LoginDto loginDto);
    string RegisterChild(int uid, ChildDto child);
}