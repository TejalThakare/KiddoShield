package com.example.RegisterLogin.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="vaccine")
public class Vaccine {
	@Id
	@Column(name="vid", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int vid;
	private String vname;
	private int avdoses;
	@ManyToOne
    @JoinColumn(name="hid", nullable=false)
	private Hospital hospital;
	public Vaccine() {
		super();
	}
	public Vaccine(int vid, String vname, int avdoses, Hospital hospital) {
		super();
		this.vid = vid;
		this.vname = vname;
		this.avdoses = avdoses;
		this.hospital = hospital;
	}
	public Vaccine(int vid, String vname, int avdoses) {
		super();
		this.vid = vid;
		this.vname = vname;
		this.avdoses = avdoses;
	}
	public int getVid() {
		return vid;
	}
	public void setVid(int vid) {
		this.vid = vid;
	}
	public String getVname() {
		return vname;
	}
	public void setVname(String vname) {
		this.vname = vname;
	}
	public int getAvdoses() {
		return avdoses;
	}
	public void setAvdoses(int avdoses) {
		this.avdoses = avdoses;
	}
	@JsonBackReference
	public Hospital getHospital() {
		return hospital;
	}
	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	} 
	

}
