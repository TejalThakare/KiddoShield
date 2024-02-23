package com.example.RegisterLogin.Entity;

import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="hospital")
public class Hospital {
	@Id
	@Column(name="hid", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int hid;
	private String hname;
	private String address;
	private String contact;
	private String emergencynum;
	@Column(unique=true)
	private String email;
	private String password;
	@OneToMany(mappedBy="hospital", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<User>User;
	@OneToMany(mappedBy="hospital", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<Doctor>Doctor;
	@OneToMany(mappedBy="hospital", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<Vaccine>vaccine;
	@OneToMany(mappedBy="hospital", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<Feedback>Feedback;
	@OneToMany(mappedBy="hospital", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<Appointment>Appointment;
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
	@JsonManagedReference
	public Set<User> getUser() {
		return User;
	}

	public void setUser(Set<User> user) {
		this.User = user;
	}
	@JsonManagedReference
	public Set<Doctor> getDoctor() {
		return Doctor;
	}

	public void setDoctor(Set<Doctor> doctor) {
		Doctor = doctor;
	}
@JsonManagedReference

	public Set<Vaccine> getVaccine() {
		return vaccine;
	}

	public void setVaccine(Set<Vaccine> vaccine) {
		this.vaccine = vaccine;
	}
	@JsonManagedReference
	public Set<Feedback> getFeedback() {
		return Feedback;
	}

	public void setFeedback(Set<Feedback> feedback) {
		Feedback = feedback;
	}
	@JsonManagedReference
	public Set<Appointment> getAppointment() {
		return Appointment;
	}

	public void setAppointment(Set<Appointment> appointment) {
		Appointment = appointment;
	}
	
	
	

//	@Override
//	public String toString() {
//		return "Hospital [hid=" + hid + ", hname=" + hname + ", address=" + address + ", contact=" + contact
//				+ ", emergencynum=" + emergencynum + ", email=" + email + ", password=" + password + ", user=" + user
//				+ ", doctor=" + doctor + "]";
//	}

	

}
