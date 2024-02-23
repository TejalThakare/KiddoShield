package com.example.RegisterLogin.Dto;

public class VaccineDto {
	private int vid;
	private String vname;
	private int avdoses;
	public VaccineDto(int vid, String vname, int avdoses) {
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
	
	
}
