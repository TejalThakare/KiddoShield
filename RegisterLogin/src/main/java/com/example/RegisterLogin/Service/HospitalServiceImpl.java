package com.example.RegisterLogin.Service;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.RegisterLogin.Dto.DoctorDto;
import com.example.RegisterLogin.Dto.DoctorloginDto;
import com.example.RegisterLogin.Dto.HospitalDto;
import com.example.RegisterLogin.Dto.HospitalloginDto;
import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Repo.ChildRepo;
import com.example.RegisterLogin.Repo.DoctorRepo;
import com.example.RegisterLogin.Repo.HospitalRepo;
import com.example.RegisterLogin.payload.response.LoginMesage;
@Service
public class HospitalServiceImpl implements HospitalService {
	@Autowired 
	private HospitalRepo hospitalrepo;
	@Autowired
	private DoctorRepo docrepo;
	
	 @Autowired
	    private PasswordEncoder passwordEncoder;


	@Override
	public String addHospital(HospitalDto hospitalDto) {
		Hospital hospital=new Hospital(
				hospitalDto.getHid(),
				hospitalDto.getHname(),
				hospitalDto.getAddress(),
				hospitalDto.getContact(),
				hospitalDto.getEmergencynum(),
				hospitalDto.getEmail(),
				this.passwordEncoder.encode(hospitalDto.getPassword())
				);
		hospitalrepo.save(hospital);
		
		
		return hospital.getHname();
	}

	@Override
	public LoginMesage loginHospital(HospitalloginDto hosploginDtO) {
		String msg = "";
        Hospital hospital = hospitalrepo.findByEmail(hosploginDtO.getEmail());
        if (hospital != null) {
            String password = hosploginDtO.getPassword();
            String encodedPassword =hospital.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
            	Optional<Hospital>hos1 = hospitalrepo.findOneByEmailAndPassword(hosploginDtO.getEmail(), encodedPassword);
                if (hos1.isPresent()) {
                    return new LoginMesage("Login Success", true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {

                return new LoginMesage("password Not Match", false);
            }
        }else {
            return new LoginMesage("Email not exits", false);
        }
	}

	@Override
	public String addDoctor(int hid,DoctorDto ddto) {
		Doctor doctor=new Doctor(
				ddto.getDid(),
				ddto.getDfname(),
				ddto.getDlname(),
				ddto.getContact(),
				ddto.getSpecialization(),
				ddto.getEmail(),
				this.passwordEncoder.encode(ddto.getPassword())
				);
		Hospital h=hospitalrepo.getById(hid);
		doctor.setHospital(h);
		docrepo.save(doctor);
		
		return ddto.getDfname();
	}
	@Override
	public LoginMesage loginDoctor(DoctorloginDto docloginDtO) {
		String msg = "";
        Doctor doctor =docrepo.findByEmail(docloginDtO.getEmail());
        if (doctor != null) {
            String password = docloginDtO.getPassword();
            String encodedPassword =doctor.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
            	Optional<Doctor>doc1 = docrepo.findOneByEmailAndPassword(docloginDtO.getEmail(), encodedPassword);
                if (doc1.isPresent()) {
                    return new LoginMesage("Login Success", true);
                } else {
                    return new LoginMesage("Login Failed", false);
                }
            } else {

                return new LoginMesage("password Not Match", false);
            }
        }else {
            return new LoginMesage("Email not exits", false);
        }
	}

	@Override
	public void deleteDoctor(int did) {
		docrepo.deleteById(did);
	}

	@Override
	public void updatedoctor(DoctorDto ddto) {
		Optional<Doctor>d=docrepo.findById(ddto.getDid());
		if(d.isPresent()) {
			Doctor d1=d.get();
			d1.setDid(ddto.getDid());
			d1.setDfname(ddto.getDfname());
			d1.setDlname(ddto.getDlname());
			d1.setContact(ddto.getContact());
			d1.setSpecialization(ddto.getSpecialization());
			d1.setEmail(ddto.getEmail());
			docrepo.save(d1);
		}
	}

	

}
