package com.example.RegisterLogin.Entity;

import java.time.LocalDateTime;

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
@Table(name="feedback")
public class Feedback {
	@Id
	@Column(name="fid", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int fid;
	private String msg;
	private LocalDateTime date;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uid", nullable=false)
    private User user;
	@ManyToOne
    @JoinColumn(name="hid", nullable=false)
	private Hospital hospital;
	public Feedback() {
		super();
	}
	
	
	public Feedback(int fid, String msg) {
		super();
		this.fid = fid;
		this.msg = msg;
	}


	public Feedback(String msg) {
		super();
		this.msg = msg;
	}


	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	@JsonBackReference
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@JsonBackReference
	public Hospital getHospital() {
		return hospital;
	}
	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}


	public LocalDateTime getDate() {
		return date;
	}


	public void setDate(LocalDateTime date) {
		this.date = date;
	}

}
