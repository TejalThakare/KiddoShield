
package com.example.RegisterLogin.UserController;
import com.example.RegisterLogin.Entity.Child;

import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Dto.ChildDto;
import com.example.RegisterLogin.Dto.LoginDto;
import com.example.RegisterLogin.Service.UserService;
import com.example.RegisterLogin.payload.response.LoginMesage;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/User")
public class UserController {


	@Autowired
	private UserService userService;


	@PostMapping(path = "/Registeruser/{hid}")
	public ResponseEntity<String> RegisterUser(@PathVariable int hid,@RequestBody UserDto userDto)
	{
		String id = userService.addUser(hid,userDto);
		return ResponseEntity.ok("User Resister successfully");
	}

	@PostMapping(path = "/loginuser")
	public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto)
	{
		LoginMesage loginResponse = userService.loginUser(loginDto);
		return ResponseEntity.ok(loginResponse);
	}
	@PostMapping(path = "/Registerchild/{uid>")
	public ResponseEntity<String> RegisterChild(@PathVariable int uid,@RequestBody ChildDto childDto) {
		String id=userService.addChild(uid,childDto);
		return ResponseEntity.ok("Child Resister successfully");
	}
	
	@DeleteMapping("/deleteuser/{uid}")
	public ResponseEntity<String>deleteUser(@PathVariable int uid){
		userService.delete(uid);
		return ResponseEntity.ok("User deleted successfully");
	}
	@PutMapping("/updateuser/{uid}")
	public ResponseEntity<String>updateUser(@RequestBody UserDto userDto ){
		userService.update(userDto);
		return ResponseEntity.ok("User updated successfully");
	}
	
	@DeleteMapping("/deletechild/{cid}")
	public ResponseEntity<String>deleteChild(@PathVariable int cid){
		userService.deleteChild(cid);
		return ResponseEntity.ok("Child deleted successfully");
	}
	@PutMapping("/updatechild/{cid}")
	public ResponseEntity<String>updateChild(@RequestBody ChildDto childdto ){
		userService.updateChild(childdto);
		return ResponseEntity.ok("Child updated successfully");
	}
	
	@GetMapping("/children/{uid}")
	public ResponseEntity<Set<Child>>getbyid(@PathVariable int uid){
		Set<Child>cset=userService.findAllChild(uid);
		if(cset!=null) {
			return ResponseEntity.ok(cset);
		}
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}
