package com.example.RegisterLogin.Dto;

import com.example.RegisterLogin.Entity.Hospital;

public class DoctorDto {
	private int did;
	private String dfname;
	private String dlname;
	private String contact;
	private String email;
	private String password;
	private String specialization;
	private int hid;
	
	
	public DoctorDto() {
		super();
	}
	

	public DoctorDto(int did, String dfname, String dlname, String contact, String email, String specialization) {
		super();
		this.did = did;
		this.dfname = dfname;
		this.dlname = dlname;
		this.contact = contact;
		this.email = email;
		this.specialization = specialization;
	}


	public DoctorDto(int did, String dfname, String dlname, String contact, String email, String password,
			String specialization) {
		super();
		this.did = did;
		this.dfname = dfname;
		this.dlname = dlname;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.specialization = specialization;
	}
	
	public DoctorDto(int did, String dfname, String dlname, String contact, String email, String password,
			String specialization, int hid) {
		super();
		this.did = did;
		this.dfname = dfname;
		this.dlname = dlname;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.specialization = specialization;
		this.hid = hid;
	}

	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	public String getDfname() {
		return dfname;
	}
	public void setDfname(String dfname) {
		this.dfname = dfname;
	}
	public String getDlname() {
		return dlname;
	}
	public void setDlname(String dlname) {
		this.dlname = dlname;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
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
	
	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	@Override
	public String toString() {
		return "DoctorDto [did=" + did + ", dfname=" + dfname + ", dlname=" + dlname + ", contact=" + contact
				+ ", email=" + email + ", password=" + password + ", specialization=" + specialization + "]";
	}
	
	
	

}
