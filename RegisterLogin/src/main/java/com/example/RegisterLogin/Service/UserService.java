package com.example.RegisterLogin.Service;

import java.util.List;
import java.util.Set;

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
import com.example.RegisterLogin.payload.response.LoginMesage;


public interface UserService {
	String addUser(int hid,UserDto UserDto);
	LoginMesage loginUser(LoginDto LoginDtO);
	String addChild(int uid,ChildDto childdto);
	void delete(int id);
	void update(UserDto userDto);
	void updateChild(ChildDto childdto);
	void deleteChild(int id);
	Set<Child> findAllChild(int uid);
	Child findbycid(int cid);
	User findbyuid(int uid);
	User findbymail(String email);
	String giveFeedback(int hid,int uid,FeedbackDto fdto);
	String bookAppointment(int hid,int uid,AppointmentDto adto);
	void rescheduleappointment(int aid,AppointmentDto adto);
	Set<Appointment> getallappointments(int uid);
	int getavdoses(String vname);
	String resetpassword(UserDto udto);
	User findbyemailusername(String email,String username);
	List<Object[]> fetchChildData(int uid);
	String bookConsultAppointment(int uid,ConsultationAppointmentDto adto);
	Set<ConsultationAppointment> getallconsultappointment(int uid);
	void saveUser(User u);
	int decrementDoses(String vname);
	Appointment findbyaid(int aid);
	void deleteAppointment(int aid);
	ConsultationAppointment findbycaid(int caid);
	void deleteConsultAppointment(int caid);
	int incrementDoses(String vname);
	void rescheduleconsultappointment(int caid, ConsultationAppointmentDto cadto);
}
