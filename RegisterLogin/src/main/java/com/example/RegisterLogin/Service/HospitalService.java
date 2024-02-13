package com.example.RegisterLogin.Service;



import com.example.RegisterLogin.Dto.HospitalloginDto;
import com.example.RegisterLogin.Dto.DoctorDto;
import com.example.RegisterLogin.Dto.DoctorloginDto;
import com.example.RegisterLogin.Dto.HospitalDto;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.payload.response.LoginMesage;

public interface HospitalService {
	String addHospital(HospitalDto hospitalDto);
	LoginMesage loginHospital(HospitalloginDto hosploginDtO);
	String addDoctor(int hid,DoctorDto ddto);
	LoginMesage loginDoctor(DoctorloginDto docloginDtO);
	void deleteDoctor(int did);
	void updatedoctor(DoctorDto ddto);

}
