package com.example.RegisterLogin.Dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.User;

public class ConsultationAppointmentDto {
private int caid;
	private int cid;
	private LocalDate date;
	private LocalTime time;
	private String contact;
	private String email;
	private String specialization;
	private int did;
	private int uid;
	public ConsultationAppointmentDto() {
		super();
	}
	public ConsultationAppointmentDto(int caid, int cid, LocalDate date, LocalTime time, String contact, String email,
			String specialization, int did, int uid) {
		super();
		this.caid = caid;
		this.cid = cid;
		this.date = date;
		this.time = time;
		this.contact = contact;
		this.email = email;
		this.specialization = specialization;
		this.did = did;
		this.uid = uid;
	}
	public ConsultationAppointmentDto(int cid, LocalDate date, LocalTime time, String contact, String email,
			String specialization, int did) {
		super();
		this.cid = cid;
		this.date = date;
		this.time = time;
		this.contact = contact;
		this.email = email;
		this.specialization = specialization;
		this.did = did;
	}
	public ConsultationAppointmentDto(int caid, int cid, LocalDate date, LocalTime time, String contact, String email,
			String specialization, int did) {
		super();
		this.caid = caid;
		this.cid = cid;
		this.date = date;
		this.time = time;
		this.contact = contact;
		this.email = email;
		this.specialization = specialization;
		this.did = did;
	}
	public int getCaid() {
		return caid;
	}
	public void setCaid(int caid) {
		this.caid = caid;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	@Override
	public String toString() {
		return "ConsultationAppointmentDto [caid=" + caid + ", cid=" + cid + ", date=" + date + ", time=" + time
				+ ", contact=" + contact + ", email=" + email + ", specialization=" + specialization + ", did=" + did
				+ ", uid=" + uid + "]";
	}
	
	
	
	
	
}
