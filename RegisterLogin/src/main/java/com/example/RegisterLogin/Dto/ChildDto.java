package com.example.RegisterLogin.Dto;

import com.example.RegisterLogin.Entity.User;

public class ChildDto {
	private int cid;
	private String cfname;
	private int age;
	private double weight;
	private String bloodgrp;
	private char gender;
	private String dob;
    private int uid;
	public ChildDto() {
		super();
	}
	public ChildDto(int cid, String cfname, int age, double weight, String bloodgrp, char gender, String dob) {
		super();
		this.cid = cid;
		this.cfname = cfname;
		this.age = age;
		this.weight = weight;
		this.bloodgrp = bloodgrp;
		this.gender = gender;
		this.dob = dob;
	}
	
	
	
	public ChildDto(int cid, String cfname, int age, double weight, String bloodgrp, char gender, String dob, int uid) {
		super();
		this.cid = cid;
		this.cfname = cfname;
		this.age = age;
		this.weight = weight;
		this.bloodgrp = bloodgrp;
		this.gender = gender;
		this.dob = dob;
		this.uid = uid;
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
	
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	@Override
	public String toString() {
		return "ChildDto [cid=" + cid + ", cfname=" + cfname + ", age=" + age + ", weight=" + weight + ", bloodgrp="
				+ bloodgrp + ", gender=" + gender + ", dob=" + dob + "]";
	}
	
	
	

}
