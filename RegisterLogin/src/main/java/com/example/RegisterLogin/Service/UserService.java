package com.example.RegisterLogin.Service;

import java.util.Set;

import com.example.RegisterLogin.Dto.ChildDto;
import com.example.RegisterLogin.Dto.LoginDto;
import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.payload.response.LoginMesage;


public interface UserService {
	String addUser(int hid,UserDto UserDto);
	LoginMesage loginUser(LoginDto LoginDtO);
	String addChild(int uid,ChildDto childdto);
	void delete(int id);
	void update(UserDto userDto);
	void updateChild(ChildDto childdto);
	void deleteChild(int id);
	Set<Child> findAllChild(int id);
	
}
