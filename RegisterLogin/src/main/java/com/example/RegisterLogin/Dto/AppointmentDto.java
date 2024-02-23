package com.example.RegisterLogin.Dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class AppointmentDto {
	private String cid;
	private LocalDate date;
	private LocalTime time;
	private String contact;
	private String email;
	private String vname;
	
	public AppointmentDto() {
		super();
	}

	public AppointmentDto(String cid, LocalDate date, LocalTime time, String contact, String email, String vname) {
		super();
		this.cid = cid;
		this.date = date;
		this.time = time;
		this.contact = contact;
		this.email = email;
		this.vname = vname;
	}
	
	public AppointmentDto(LocalDate date, LocalTime time) {
		super();
		this.date = date;
		this.time = time;
	}

	public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
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
	public String getVname() {
		return vname;
	}
	public void setVname(String vname) {
		this.vname = vname;
	}
	

}
