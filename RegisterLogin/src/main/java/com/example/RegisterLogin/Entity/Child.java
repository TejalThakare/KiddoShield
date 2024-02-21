package com.example.RegisterLogin.Entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="child")
public class Child {
	@Id
	@Column(name="cid", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int cid;
	private String cfname;
	private int age;
	private double weight;
	private String bloodgrp;
	private char gender;
	private String dob;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="uid", nullable=false)
    private User user;
//	@ManyToOne
//    @JoinColumn(name="hid", nullable=false)
//	private Hospital hospital;
	
	public Child(int cid, String cfname, int age, double weight, String bloodgrp, char gender, String dob,
			User user) {
		super();
		this.cid = cid;
		this.cfname = cfname;
		this.age = age;
		this.weight = weight;
		this.bloodgrp = bloodgrp;
		this.gender = gender;
		this.dob = dob;
		this.user = user;
	}
	
	public Child(int cid, String cfname, int age, double weight, String bloodgrp, char gender, String dob) {
		super();
		this.cid = cid;
		this.cfname = cfname;
		this.age = age;
		this.weight = weight;
		this.bloodgrp = bloodgrp;
		this.gender = gender;
		this.dob = dob;
	}

	public Child() {
		super();
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCfname() {
		return cfname;
	}
	public void setCfname(String cfname) {
		this.cfname = cfname;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public String getBloodgrp() {
		return bloodgrp;
	}
	public void setBloodgrp(String bloodgrp) {
		this.bloodgrp = bloodgrp;
	}
	public char getGender() {
		return gender;
	}
	public void setGender(char gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	@JsonBackReference
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
//	@JsonBackReference
//	public Hospital getHospital() {
//		return hospital;
//	}
//
//	public void setHospital(Hospital hospital) {
//		this.hospital = hospital;
//	}

//	@Override
//	public String toString() {
//		return "Child [cid=" + cid + ", cfname=" + cfname + ", age=" + age + ", weight=" + weight + ", bloodgrp="
//				+ bloodgrp + ", gender=" + gender + ", dob=" + dob + ", user=" + user + "]";
//	}
//	
	

}
