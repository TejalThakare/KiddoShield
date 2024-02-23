package com.example.RegisterLogin.Entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="user")
public class User {
	@Id
	@Column(name="uid", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int uid;
	@Column(name="fname")
	private String fname;
	@Column(name="lname")
	private String lname;
	@Column(name="username",unique=true)
	private String username;
	@Column(name="password")
	private String password;
	@Column(unique=true)
	private String email;
	@Column(name="address")
	private String address;
	@Column(name="contact")
	private String contact;
	@OneToMany(mappedBy="user", cascade= CascadeType.ALL, orphanRemoval=true,fetch = FetchType.LAZY)
    private Set<Child> Child;
	@ManyToOne
    @JoinColumn(name="hid", nullable=false)
	private Hospital hospital;
	@OneToMany(mappedBy="user", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<Feedback>Feedback;
	@OneToMany(mappedBy="user", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<Appointment>Appointment;
	@OneToMany(mappedBy="user", cascade= CascadeType.ALL, orphanRemoval=true)
	private Set<ConsultationAppointment>ConsultationAppointment;
	public User() {
		super();
	}
	public User(int uid, String fname, String lname, String username, String password, String email, String address,
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
	
	public User(int uid, String fname, String lname, String username, String password, String email, String address,
			String contact, Hospital hospital) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.contact = contact;
	
		this.hospital = hospital;
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
	public void setPassword(String passsword) {
		this.password = passsword;
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
	@JsonManagedReference
	public Set<Child> getChild() {
		return Child;
	}
	public void setChild(Set<Child> child) {
		Child = child;
	}
	@JsonBackReference
	public Hospital getHospital() {
		return hospital;
	}
	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
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
	@JsonManagedReference
	public Set<ConsultationAppointment> getConsultationAppointment() {
		return ConsultationAppointment;
	}
	public void setConsultationAppointment(Set<ConsultationAppointment> consultationAppointment) {
		ConsultationAppointment = consultationAppointment;
	}
	public User(int uid, String fname, String lname, String username, String password, String email, String address,
			String contact,Set<Child> child) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.address = address;
		this.contact = contact;
		Child = child;
	}
	@Override
	public String toString() {
		return "User [uid=" + uid + ", fname=" + fname + ", lname=" + lname + ", username=" + username + ", password="
				+ password + ", email=" + email + ", address=" + address + ", contact=" + contact + ", Child=" + Child
				+ "]";
	}
	

}
