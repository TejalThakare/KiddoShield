package com.example.RegisterLogin.Entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="hospital")
public class Hospital {
	@Id
	@Column(name="hid", length = 10)
	private int hid;
	private String hname;
	private String address;
	private String contact;
	private String emergencynum;
	private String email;
	private String password;
	@OneToMany(mappedBy="hospital")
	private Set<User>User;
	@OneToMany(mappedBy="hospital")
	private Set<Doctor>Doctor;
	public Hospital() {
		super();
	}
	
	public Hospital(int hid, String hname, String address, String contact, String emergencynum, String email,
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

//	public Hospital(String hid, String hname, String address, String contact, String emergencynum, String email,
//			String password, Set<User> user, Set<Doctor> doctor) {
//		super();
//		this.hid = hid;
//		this.hname = hname;
//		this.address = address;
//		this.contact = contact;
//		this.emergencynum = emergencynum;
//		this.email = email;
//		this.password = password;
//		this.user = user;
//		this.doctor = doctor;
//	}

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

	public Set<User> getUser() {
		return User;
	}

	public void setUser(Set<User> user) {
		this.User = user;
	}

//	public Set<Doctor> getDoctor() {
//		return doctor;
//	}
//
//	public void setDoctor(Set<Doctor> doctor) {
//		this.doctor = doctor;
//	}

//	@Override
//	public String toString() {
//		return "Hospital [hid=" + hid + ", hname=" + hname + ", address=" + address + ", contact=" + contact
//				+ ", emergencynum=" + emergencynum + ", email=" + email + ", password=" + password + ", user=" + user
//				+ ", doctor=" + doctor + "]";
//	}

	

}
