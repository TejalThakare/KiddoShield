package com.example.RegisterLogin.Entity;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="appointment")
public class Appointment {
	@Id
	@Column(name="aid", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int aid;
	private String cid;
	private LocalDate date;
	private LocalTime time;
	private String contact;
	private String email;
	private String vname;
	@ManyToOne
    @JoinColumn(name="hid", nullable=false)
	private Hospital hospital;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uid", nullable=false)
    private User user;
	public Appointment() {
		super();
	}
	
	public Appointment(int aid, String cid, LocalDate date, LocalTime time, String contact, String email,
			String vname) {
		super();
		this.aid = aid;
		this.cid = cid;
		this.date = date;
		this.time = time;
		this.contact = contact;
		this.email = email;
		this.vname = vname;
	}

	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
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
	@JsonBackReference
	public Hospital getHospital() {
		return hospital;
	}
	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}
	@JsonBackReference
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	

}
