package com.example.RegisterLogin.Dto;

import java.util.Set;

import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.User;

public class HospitalDto {
	private int hid;
	private String hname;
	private String address;
	private String contact;
	private String emergencynum;
	private String email;
	private String password;
	
	public HospitalDto() {
		super();
	}
	
	public HospitalDto(String hname, String email, String password) {
		super();
		this.hname = hname;
		this.email = email;
		this.password = password;
	}

	public HospitalDto(int hid, String hname, String address, String contact, String emergencynum, String email) {
		super();
		this.hid = hid;
		this.hname = hname;
		this.address = address;
		this.contact = contact;
		this.emergencynum = emergencynum;
		this.email = email;
	}

	public HospitalDto(int hid, String hname, String address, String contact, String emergencynum, String email,
			String password) {
		super();
		this.hid = hid;
		this.hname = hname;
		this.address = address;
		this.contact = contact;
		this.emergencynum = emergencynum;
		this.email = email;
		this.password = password;
	}

	

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public String getHname() {
		return hname;
	}

	public void setHname(String hname) {
		this.hname = hname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmergencynum() {
		return emergencynum;
	}

	public void setEmergencynum(String emergencynum) {
		this.emergencynum = emergencynum;
	}

	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "HospitalDto [hid=" + hid + ", hname=" + hname + ", address=" + address + ", contact=" + contact
				+ ", emergencynum=" + emergencynum + ", email=" + email + ", password=" + password + "]";
	}

	

	
	

}
