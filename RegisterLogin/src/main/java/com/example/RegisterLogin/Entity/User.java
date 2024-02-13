package com.example.RegisterLogin.Entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@Column(name="uid", length = 10)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int uid;
	
	private String fname;
	private String lname;
	private String username;
	private String password;
	private String email;
	private String address;
	private String contact;
	@OneToMany(mappedBy="user")
    private Set<Child> Child;
	@ManyToOne
    @JoinColumn(name="hid", nullable=false)
	private Hospital hospital;
	
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
	public Set<Child> getChild() {
		return Child;
	}
	public void setChild(Set<Child> child) {
		Child = child;
	}
	
	public Hospital getHospital() {
		return hospital;
	}
	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
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
