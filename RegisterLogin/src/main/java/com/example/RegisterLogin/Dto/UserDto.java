package com.example.RegisterLogin.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

public class UserDto {
	
    
	private int uid;
	private String fname;
	private String lname;
	private String username;
	private String password;
	private String email;
	private String address;
	private String contact;
	private int hid;
	
	
	public UserDto() {
		super();
	}
	public UserDto(int uid, String fname, String lname, String username, String password, String email, String address,
			String contact) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.contact = contact;
	}
	
	public UserDto(int uid, String fname, String lname, String username, String password, String email, String address,
			String contact, int hid) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.contact = contact;
		this.hid = hid;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	
	public int getHid() {
		return hid;
	}
	public void setHid(int hid) {
		this.hid = hid;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserDto [uid=" + uid + ", fname=" + fname + ", lname=" + lname + ", username=" + username
				+ ", password=" + password + ", email=" + email + ", address=" + address + ", contact=" + contact + "]";
	}

}
