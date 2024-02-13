package com.example.RegisterLogin.UserController;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.RegisterLogin.Dto.ChildDto;
import com.example.RegisterLogin.Dto.DoctorDto;
import com.example.RegisterLogin.Dto.HospitalDto;
import com.example.RegisterLogin.Dto.HospitalloginDto;
import com.example.RegisterLogin.Dto.LoginDto;
import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Service.HospitalService;
import com.example.RegisterLogin.payload.response.LoginMesage;

@RestController
@CrossOrigin
@RequestMapping("Hospital")
public class HospitalController {
	@Autowired
	private HospitalService hosservice;
	
	@PostMapping("/Registerhospital")
	public ResponseEntity<String> RegisterHospital(@RequestBody HospitalDto hosDto)
	{
		String id = hosservice.addHospital(hosDto);
		return ResponseEntity.ok("Hospital Resister successfully");
	}

	@PostMapping(path = "/loginhospital")
	public ResponseEntity<?> loginUser(@RequestBody HospitalloginDto hloginDto)
	{
		LoginMesage loginResponse = hosservice.loginHospital(hloginDto);
		return ResponseEntity.ok(loginResponse);
	}
	@PostMapping("/RegisterDoctor/{hid}")
	public ResponseEntity<String> RegisterDoctor(@PathVariable int hid,@RequestBody DoctorDto ddto)
	{
		String id = hosservice.addDoctor(hid,ddto);
		return ResponseEntity.ok("Doctor Resister successfully");
	}
	@DeleteMapping("/deletedoctor/{did}")
	public ResponseEntity<String>deleteChild(@PathVariable int did){
		hosservice.deleteDoctor(did);
		return ResponseEntity.ok("Doctor deleted successfully");
	}
	@PutMapping("/updatechild/{cid}")
	public ResponseEntity<String>updateChild(@RequestBody DoctorDto ddto ){
		hosservice.updatedoctor(ddto);
		return ResponseEntity.ok("Doctor updated successfully");
	}

}
