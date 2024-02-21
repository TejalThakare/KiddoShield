
package com.example.RegisterLogin.UserController;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.RegisterLogin.Dto.AppointmentDto;
import com.example.RegisterLogin.Dto.ChildDto;
import com.example.RegisterLogin.Dto.ConsultationAppointmentDto;
import com.example.RegisterLogin.Dto.FeedbackDto;
import com.example.RegisterLogin.Dto.LoginDto;
import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.ConsultationAppointment;
import com.example.RegisterLogin.Entity.User;
import com.example.RegisterLogin.Repo.UserRepo;
import com.example.RegisterLogin.Repo.VaccineRepo;
import com.example.RegisterLogin.Service.UserService;
import com.example.RegisterLogin.payload.response.LoginMesage;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("api/User")
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping(path = "/Registeruser/{hid}")
	public ResponseEntity<String> RegisterUser(@PathVariable int hid,@RequestBody UserDto userDto)
	{ User u=userService.findbymail(userDto.getEmail());
	if(u!=null) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	else {
		String id = userService.addUser(hid,userDto);
		if(id!=null) {
			return ResponseEntity.ok("User Resister successfully");}
		else {
			return ResponseEntity.ok("User Resister unsuccessfully");}
	}
	}

	@PostMapping(path = "/loginuser")
	public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto)
	{
		LoginMesage loginResponse = userService.loginUser(loginDto);
		return ResponseEntity.ok(loginResponse);
	}
	@PostMapping(path = "/Registerchild/{uid}")
	public ResponseEntity<String> RegisterChild(@PathVariable int uid,@RequestBody ChildDto childDto) {
		Child ch=userService.findbycid(childDto.getCid());
		if(ch!=null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		else {
			String id=userService.addChild(uid,childDto);
			if(id!=null) {
				return ResponseEntity.ok("Child Resister successfully");}
			else {
				return ResponseEntity.ok("Child Resister unsuccessfully");
			}}
	}

	@DeleteMapping("/deleteuser/{uid}")
	public ResponseEntity<String>deleteUser(@PathVariable int uid){
		User u=userService.findbyuid(uid);
		if(u!=null) {
			userService.delete(uid);
			return ResponseEntity.ok("User deleted successfully");}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	@PutMapping("/updateuser/{uid}")
	public ResponseEntity<String>updateUser(@RequestBody UserDto userDto ){
		System.out.println(userDto.getFname());
		userService.update(userDto);
		return ResponseEntity.ok("User updated successfully");
	}
	@DeleteMapping("/deletechild/{cid}")
	public ResponseEntity<String>deleteChild(@PathVariable int cid){
		Child c=userService.findbycid(cid);
		if(c!=null) {
			userService.deleteChild(cid);
			return ResponseEntity.ok("Child deleted successfully");}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	@PutMapping("/updatechild/{cid}")
	public ResponseEntity<String>updateChild(@RequestBody ChildDto childdto ){
		System.out.println(childdto);
		userService.updateChild(childdto);
		return ResponseEntity.ok("Child updated successfully");
	}

	@GetMapping("/children/{uid}")
	public ResponseEntity<Set<Child>>getbyuserid(@PathVariable int uid){
		Set<Child>cset=userService.findAllChild(uid);
		if(cset!=null) {
			return ResponseEntity.ok(cset);
		}
		System.out.println(uid);
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("/child/{cid}")
	public ResponseEntity<Child> getbychildid(@PathVariable int cid) {
		Child ch=userService.findbycid(cid);
		if(ch!=null)  {
			return ResponseEntity.ok(ch);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	@GetMapping("loginuser/{email}")
	public ResponseEntity<User>getbyemail(@PathVariable String email){
		System.out.println(email);
		User u=userService.findbymail(email);
		if(u!=null) {
			return ResponseEntity.ok(u);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}

	}

	@PostMapping("/loginuser/{hid}/{uid}")
	public ResponseEntity<String>giveFeedback(@PathVariable int hid,@PathVariable int uid,@RequestBody FeedbackDto fdto){
		String msg=fdto.getMsg();

		System.out.println(msg);
		String id=userService.giveFeedback(hid, uid, fdto);
		if(id!=null) {
			return ResponseEntity.ok("feeback submitted");
		}else {
			System.out.println("hii");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	@PostMapping("/appointment/{hid}/{uid}")
	public ResponseEntity<String>bookappointment(@PathVariable int hid,@PathVariable int uid,@RequestBody AppointmentDto adto){
		int avdoses=userService.getavdoses(adto.getVname());
		if(avdoses>0) {
			String id=userService.bookAppointment(hid,uid,adto);
			int did=userService.decrementDoses(adto.getVname());
			return ResponseEntity.ok("appointment booked");
		}else {
			System.out.println("hii");
			return ResponseEntity.ok("appointment is not booked");
		}
	}
	@PostMapping("/rescheduleappointment/{aid}")
	public ResponseEntity<String>rescheduleappointment(@PathVariable int aid,@RequestBody AppointmentDto adto){
		userService.rescheduleappointment(aid, adto);
		return ResponseEntity.ok("appointment reschedule successfully");
	}
	@GetMapping("appointments/{uid}")
	public ResponseEntity<Set<Appointment>>getallappointments(@PathVariable int uid){
		Set<Appointment>aset=userService.getallappointments(uid);
		if(aset!=null) {
			return ResponseEntity.ok(aset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@PostMapping("forgotpassword")
	public ResponseEntity<String>resetpassword(@RequestBody UserDto udto)
	{
		User u=userService.findbyemailusername(udto.getEmail(),udto.getUsername());

		System.out.println(u);
		if(u!=null) {
			String password = udto.getPassword();
			String encodedPassword =u.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight)
			{
				return ResponseEntity.ok("please enter new password.");
			}
			else {
				u.setPassword(passwordEncoder.encode(udto.getPassword()));
				userService.saveUser(u);
				return ResponseEntity.ok("password reset successfully");
			}
			

		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}
	@GetMapping("childhistory/{uid}")
	public ResponseEntity<List<Object[]>>getchildhistory(@PathVariable int uid){
		List<Object[]> chset=userService.fetchChildData(uid);
		if(chset!=null) {
			return ResponseEntity.ok(chset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
	}
	@PostMapping("consultappointment/{uid}")
	ResponseEntity<String> bookconsultappointment(@PathVariable int uid,@RequestBody ConsultationAppointmentDto cdto){
		System.out.println(cdto);
		String s=userService.bookConsultAppointment(uid, cdto);
		if(s!=null) {
			return ResponseEntity.ok("appointment booked");
		}
		else {
			System.out.println("hiiii");
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();}
	}
	@GetMapping("consultappointments/{uid}")
	public ResponseEntity<Set<ConsultationAppointment>> getallconsultappointments(@PathVariable int uid){
		Set<ConsultationAppointment>aset=userService.getallconsultappointment(uid);
		if(aset!=null) {
			return ResponseEntity.ok(aset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
}


