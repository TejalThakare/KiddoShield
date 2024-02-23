package com.example.RegisterLogin.Dto;

public class DoctorloginDto {
private String email;
private String password;

public DoctorloginDto() {
}

public DoctorloginDto(String email, String password) {
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
	return "DoctorloginDto [email=" + email + ", password=" + password + "]";
} 


}