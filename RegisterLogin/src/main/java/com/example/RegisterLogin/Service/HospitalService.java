package com.example.RegisterLogin.Service;



import java.util.List;
import java.util.Set;

import com.example.RegisterLogin.Dto.DoctorDto;
import com.example.RegisterLogin.Dto.DoctorloginDto;
import com.example.RegisterLogin.Dto.HospitalDto;
import com.example.RegisterLogin.Dto.HospitalloginDto;
import com.example.RegisterLogin.Dto.VaccineDto;
import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.ConsultationAppointment;
import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Feedback;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Entity.Vaccine;
import com.example.RegisterLogin.payload.response.LoginMesage;

public interface HospitalService {
	String addHospital(HospitalDto hospitalDto);
	LoginMesage loginHospital(HospitalloginDto hosploginDtO);
	String addDoctor(int hid,DoctorDto ddto);
	LoginMesage loginDoctor(DoctorloginDto docloginDtO);
	void deleteDoctor(int did);
	void updatedoctor(DoctorDto ddto);
	void deleteHospital(int hid);
	void updateHospital(HospitalDto hdto);
	Set<Doctor> findAllDoctors(int hid);
	Hospital findhospitalbyemail(String email);
	Doctor finddoctorbymail(String email);
	Doctor findbydid(int did);
	Hospital findbyhid(int hid);
	Set<Child> findAllChildByhid(int hid);
	Set<Vaccine> findAllVaccines(int hid);
	String addVaccine(int hid,VaccineDto vdto);
	void updatevaccine(int vid, int doses);
	Set<Feedback> getallfeedbacks(int hid);
	Set<Appointment>getallappointments(int hid);
	List<Object[]> fetchCombinedData(int hid);
	Hospital findbyemailhname(String email,String hname);
	Set<ConsultationAppointment> getallconsultappointmentbydid(int did);
	Set<Doctor> findbyspecialization(String specialization);
	Doctor finddocbymailandpassword(String email,String password);
	void savehospital(Hospital hos);
	void savedoctor(Doctor doc) ;
}
