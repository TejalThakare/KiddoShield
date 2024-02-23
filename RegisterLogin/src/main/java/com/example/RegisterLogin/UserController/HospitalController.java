package com.example.RegisterLogin.UserController;

import java.time.LocalDate;
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

import com.example.RegisterLogin.Dto.DoctorDto;
import com.example.RegisterLogin.Dto.DoctorloginDto;
import com.example.RegisterLogin.Dto.HospitalDto;
import com.example.RegisterLogin.Dto.HospitalloginDto;
import com.example.RegisterLogin.Dto.IntegerDto;
import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Dto.VaccineDto;
import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.ConsultationAppointment;
import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Feedback;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Entity.User;
import com.example.RegisterLogin.Entity.Vaccine;
import com.example.RegisterLogin.Repo.DoctorRepo;
import com.example.RegisterLogin.Repo.HospitalRepo;
import com.example.RegisterLogin.Service.AppointmentService;
import com.example.RegisterLogin.Service.HospitalService;
import com.example.RegisterLogin.payload.response.LoginMesage;

@RestController
@CrossOrigin
@RequestMapping("Hospital")
public class HospitalController {
	@Autowired
	private AppointmentService aservice;
	@Autowired
	private HospitalService hosservice;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/Registerhospital")
	public ResponseEntity<String> RegisterHospital(@RequestBody HospitalDto hosDto)
	{
		Hospital hos=hosservice.findhospitalbyemail(hosDto.getEmail());
		if(hos!=null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
		String id = hosservice.addHospital(hosDto);
		if(id!=null) {
		return ResponseEntity.ok("Hospital Resister successfully");
		}
		else {
			return ResponseEntity.ok("Hospital Resister unsuccessfully");
		}}
	}

	@PostMapping(path = "/loginhospital")
	public ResponseEntity<?> loginUser(@RequestBody HospitalloginDto hloginDto)
	{
		LoginMesage loginResponse = hosservice.loginHospital(hloginDto);
		return ResponseEntity.ok(loginResponse);
	}
	@PostMapping("/RegisterDoctor/{hid}")
	public ResponseEntity<String> RegisterDoctor(@PathVariable int hid,@RequestBody DoctorDto ddto)
	{System.out.println(ddto.getContact());
		Doctor doc=hosservice.finddoctorbymail(ddto.getEmail());
		if(doc!=null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
		String id = hosservice.addDoctor(hid,ddto);
		if(id!=null) {
		return ResponseEntity.ok("Doctor Register successfully");
		}
		else {
			return ResponseEntity.ok("Doctor Register unsuccessfully");
		}}
	}
	@PostMapping(path = "/logindoctor")
	public ResponseEntity<?> logindoctor(@RequestBody DoctorloginDto dloginDto)
	{
		LoginMesage loginResponse = hosservice.loginDoctor(dloginDto);
		return ResponseEntity.ok(loginResponse);
	}
	@DeleteMapping("/deletedoctor/{did}")
	public ResponseEntity<String>deleteDoctor(@PathVariable int did){
		Doctor doc=hosservice.findbydid(did);
		if(doc!=null) {
		hosservice.deleteDoctor(did);
		return ResponseEntity.ok("Doctor deleted successfully");}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	@PutMapping("/updatedoctor/{did}")
	public ResponseEntity<String>updateDoctor(@RequestBody DoctorDto ddto ){
		hosservice.updatedoctor(ddto);
		return ResponseEntity.ok("Doctor updated successfully");
	}
	@DeleteMapping("/deletehospital/{hid}")
	public ResponseEntity<String>deleteHospital(@PathVariable int hid){
		Hospital h=hosservice.findbyhid(hid);
		if(h!=null) {
		hosservice.deleteHospital(hid);
		return ResponseEntity.ok(" deleted successfully");}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	@PutMapping("/updatehospital/{hid}")
	public ResponseEntity<String>updateHospital(@RequestBody HospitalDto hdto ){
		hosservice.updateHospital(hdto);
		return ResponseEntity.ok("hospital updated successfully");
	}
	@GetMapping("/doctors/{hid}")
	public ResponseEntity<Set<Doctor>>getbyhospitalbyid(@PathVariable int hid){
    	Set<Doctor>dset=hosservice.findAllDoctors(hid);
	if(dset!=null) {
		return ResponseEntity.ok(dset);
		}
	         System.out.println(hid);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("/children/{hid}")
	public ResponseEntity<Set<Child>>getchildbyhid(@PathVariable int hid){
		System.out.println("con"+hid);
    	Set<Child>cset=hosservice.findAllChildByhid(hid);
    	System.out.println("con"+hid); 
	if(cset!=null) {
		return ResponseEntity.ok(cset);
		}
	        System.out.println("con"+hid); 
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("/vaccines/{hid}")
	public ResponseEntity<Set<Vaccine>>getvaccinebyhid(@PathVariable int hid ){
		Set<Vaccine>vset=hosservice.findAllVaccines(hid);
		if(vset!=null) {
			return ResponseEntity.ok(vset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@PostMapping("registervaccine/{hid}")
		public ResponseEntity<String>addvaccine(@PathVariable int hid,@RequestBody VaccineDto vdto){
		 String id=hosservice.addVaccine(hid, vdto);
		 if(id!=null){
			 return ResponseEntity.ok("Vaccine added successfully");
		 }else {
			 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
		 
	}
	@PutMapping("/vaccines/{vid}")
	public ResponseEntity<String>updatevaccine(@PathVariable int vid,@RequestBody IntegerDto idto){
		Integer avdoses=idto.getAvdoses();
		System.out.println(avdoses);
		hosservice.updatevaccine(vid,avdoses);
		return ResponseEntity.ok("doses updated successfully");
	}
	@GetMapping("feedbacks/{hid}")
	public ResponseEntity<Set<Feedback>>getallfeedbacks(@PathVariable int hid){
		Set<Feedback>fset=hosservice.getallfeedbacks(hid);
		if(fset!=null) {
			return ResponseEntity.ok(fset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("appointments/{hid}")
	public ResponseEntity<Set<Appointment>>getallappointments(@PathVariable int hid){
		Set<Appointment>aset=hosservice.getallappointments(hid);
		if(aset!=null) {
			return ResponseEntity.ok(aset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@GetMapping("appointments")
	public ResponseEntity<List<Appointment>>gethistory(){
		 LocalDate specificDate = LocalDate.of(2024,02,19);
		List<Appointment>ch=aservice.findByAppointmentDateAndHospital(specificDate);
		if(ch!=null) {
			return ResponseEntity.ok(ch);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("childhistory/{hid}")
	public ResponseEntity<List<Object[]>>getchildhistory(@PathVariable int hid){
		List<Object[]> chset=hosservice.fetchCombinedData(hid);
		if(chset!=null) {
			return ResponseEntity.ok(chset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
	}
	@PostMapping("forgotpasswordhospital")
	public ResponseEntity<String>resetpasswordhospiatl(@RequestBody HospitalDto hdto)
	{
		Hospital h=hosservice.findbyemailhname(hdto.getEmail(),hdto.getHname());
		System.out.println(h);
		if(h!=null) {
			String password = hdto.getPassword();
			String encodedPassword =h.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight)
			{
				return ResponseEntity.ok("please enter new password.");
			}
			else {
			h.setPassword(passwordEncoder.encode(hdto.getPassword()));
			hosservice.savehospital(h);;
			return ResponseEntity.ok("password reset successfully");}
		}
		 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");

	}
	@PostMapping("forgotpassworddoctor")
	public ResponseEntity<String>resetpassworddoctor(@RequestBody DoctorloginDto ddto)
	{System.out.println(ddto.getEmail());
		Doctor d=hosservice.finddoctorbymail(ddto.getEmail());
		System.out.println(d);
		if(d!=null) {
			String password = ddto.getPassword();
			String encodedPassword =d.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if(isPwdRight)
			{
				return ResponseEntity.ok("please enter new password.");
			}
			else {
			d.setPassword(passwordEncoder.encode(ddto.getPassword()));
			hosservice.savedoctor(d);
			return ResponseEntity.ok("password reset successfully");}
		}
		 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");

	}
	@GetMapping("consultappointments/{did}")
	public ResponseEntity<Set<ConsultationAppointment>> getallconsultappointments(@PathVariable int did){
		Set<ConsultationAppointment>aset=hosservice.getallconsultappointmentbydid(did);
		if(aset!=null) {
			return ResponseEntity.ok(aset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@GetMapping("getdoctors/{specialization}")
	ResponseEntity<Set<Doctor>>getalldoctors(@PathVariable String specialization){
		Set<Doctor>dset=hosservice.findbyspecialization(specialization);
		if(dset!=null) {
			return ResponseEntity.ok(dset);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	@PostMapping("doctorinfo")
	ResponseEntity<Doctor>getdoctorinfo(@RequestBody DoctorloginDto ddto){
		System.out.println(ddto.getEmail()+ddto.getPassword());
		Doctor doc=hosservice.finddocbymailandpassword(ddto.getEmail(),ddto.getPassword());
		System.out.println(doc);
		if(doc!=null) {
			return ResponseEntity.ok(doc);
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

}
