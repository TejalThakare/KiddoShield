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
@Table(name="consultappointment")
public class ConsultationAppointment {
	@Id
	@Column(name="caid", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int caid;
	private int cid;
	private LocalDate date;
	private LocalTime time;
	private String contact;
	private String email;
	private String specialization;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uid", nullable=false)
    private User user;
	@ManyToOne
    @JoinColumn(name="did", nullable=false)
	private Doctor doctor;

	public ConsultationAppointment() {
		super();
	}

	public ConsultationAppointment(int caid, LocalDate date, LocalTime time, String contact, String email,
			String specialization) {
		super();
		this.caid = caid;
		this.date = date;
		this.time = time;
		this.contact = contact;
		this.email = email;
		this.specialization = specialization;
	}

	public int getCaid() {
		return caid;
	}

	public void setCaid(int caid) {
		this.caid = caid;
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
	@JsonBackReference
	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}
	@JsonBackReference
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
