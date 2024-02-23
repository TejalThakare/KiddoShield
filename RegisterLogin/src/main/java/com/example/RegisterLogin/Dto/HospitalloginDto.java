package com.example.RegisterLogin.Dto;

public class HospitalloginDto {
	private String email;
	private String password;

	public HospitalloginDto() {
	}

	public HospitalloginDto(String email, String password) {
	this.email = email;
	this.password = password;
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
		return "HospitalloginDto [email=" + email + ", password=" + password + "]";
	}
	

}
