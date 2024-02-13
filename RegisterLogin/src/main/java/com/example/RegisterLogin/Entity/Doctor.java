package com.example.RegisterLogin.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="doctor")
public class Doctor {
	@Id
	@Column(name="did", length = 10)
	private int did;
	private String dfname;
	private String dlname;
	private String contact;
	private String specialization;
	@ManyToOne
    @JoinColumn(name="hid", nullable=false)
	private Hospital hospital;
	private String email;
	private String password;
	
	

	public Doctor(int did, String dfname, String dlname, String contact, String specialization, String email,
			String password) {
		super();
		this.did = did;
		this.dfname = dfname;
		this.dlname = dlname;
		this.contact = contact;
		this.specialization = specialization;
		this.email = email;
		this.password = password;
	}
	
	public Doctor(int did, String dfname, String dlname, String contact, String specialization, Hospital hospital,
			String email, String password) {
		super();
		this.did = did;
		this.dfname = dfname;
		this.dlname = dlname;
		this.contact = contact;
		this.specialization = specialization;
		this.hospital = hospital;
		this.email = email;
		this.password = password;
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
		contact = contact;
	}
	public Hospital getHospital() {
		return hospital;
	}
	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
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
	@Override
	public String toString() {
		return "Doctor [did=" + did + ", dfname=" + dfname + ", dlname=" + dlname + ", contact=" + contact
				+ ", specialization=" + specialization + ", hospital=" + hospital + ", email=" + email + ", password="
				+ password + "]";
	}
	

	
	
	
	
	
	

}
