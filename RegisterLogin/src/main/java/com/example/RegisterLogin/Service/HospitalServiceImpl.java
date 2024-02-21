package com.example.RegisterLogin.Service;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.RegisterLogin.Dto.DoctorDto;
import com.example.RegisterLogin.Dto.DoctorloginDto;
import com.example.RegisterLogin.Dto.HospitalDto;
import com.example.RegisterLogin.Dto.HospitalloginDto;
import com.example.RegisterLogin.Dto.VaccineDto;
import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.ConsultationAppointment;
import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Feedback;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Entity.Vaccine;
import com.example.RegisterLogin.Repo.AppointmentRepo;

import com.example.RegisterLogin.Repo.ChildRepo;
import com.example.RegisterLogin.Repo.ConsultAppointmentRepo;
import com.example.RegisterLogin.Repo.DoctorRepo;
import com.example.RegisterLogin.Repo.FeedbackRepo;
import com.example.RegisterLogin.Repo.HospitalRepo;
import com.example.RegisterLogin.Repo.VaccineRepo;
import com.example.RegisterLogin.payload.response.LoginMesage;
@Service
public class HospitalServiceImpl implements HospitalService {
	@Autowired 
	private HospitalRepo hospitalrepo;
	@Autowired
	private DoctorRepo docrepo;
	@Autowired 
	private ChildRepo chrepo;
	@Autowired 
	private VaccineRepo vacrepo;
	@Autowired
	private FeedbackRepo frepo;
	@Autowired 
	private AppointmentRepo arepo;
	@Autowired
	private ConsultAppointmentRepo carepo;

	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private ModelMapper mapper;

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
		System.out.println(ddto.getContact());
		Doctor doctor=mapper.map(ddto,Doctor.class);
		doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
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

	@Override
	public void deleteHospital(int hid) {
		hospitalrepo.deleteById(hid);
	}

	@Override
	public void updateHospital(HospitalDto hdto) {
		Optional<Hospital>hos=hospitalrepo.findById(hdto.getHid());
		if(hos.isPresent()) {
			Hospital h1=hos.get();
			h1.setHid(hdto.getHid());
			h1.setHname(hdto.getHname());
			h1.setAddress(hdto.getAddress());
			h1.setContact(hdto.getContact());
			h1.setEmergencynum(hdto.getEmergencynum());
			h1.setEmail(hdto.getEmail());
			hospitalrepo.save(h1);

		}
	}

	@Override
	public Set<Doctor> findAllDoctors(int hid) {
		Set<Doctor>dset=docrepo.findAllDoctor(hid);
		return dset;
	}

	@Override
	public Hospital findhospitalbyemail(String email) {
		Hospital hos=hospitalrepo.findByEmail(email);
		if(hos!=null) {
			return hos;
		}
		return null;
	}

	@Override
	public Doctor finddoctorbymail(String email) {
		Doctor doc=docrepo.findByEmail(email);
		if(doc!=null) {
			return doc;
		}
		return null;
	}

	@Override
	public Doctor findbydid(int did) {
		Optional<Doctor> doc=docrepo.findById(did);
		if(doc.isPresent()) {
			return doc.get();
		}
		return null;
	}

	@Override
	public Hospital findbyhid(int hid) {
		Optional<Hospital>hos=hospitalrepo.findById(hid);
		if(hos.isPresent()) {
			return hos.get();
		}
		return null;
	}

	@Override
	public Set<Child> findAllChildByhid(int hid) {
		System.out.println("ser"+hid);
		Set<Child>cset=chrepo.findAllChildByhid(hid);
		System.out.println("ser"+hid);
		return cset;
	}

	@Override
	public Set<Vaccine> findAllVaccines(int hid) {
		Set<Vaccine>vset=vacrepo.findAllVaccines(hid);
		return vset;
	}

	@Override
	public String addVaccine(int hid, VaccineDto vdto) {
		Vaccine vac=mapper.map(vdto,Vaccine.class);
		Hospital h=hospitalrepo.findById(hid).orElse(null);
		vac.setHospital(h);
		vacrepo.save(vac);
		return vac.getVname();
	}

	@Override
	public void updatevaccine(int vid, int doses) {
		Optional<Vaccine> vac=vacrepo.findById(vid);
		if(vac.isPresent()) {
			Vaccine v1=vac.get();
			v1.setAvdoses(doses);
			vacrepo.save(v1);
		}
	}

	@Override
	public Set<Feedback> getallfeedbacks(int hid) {
		Set<Feedback>fset=frepo.findAllfeedbacks(hid);
		return fset;
	}

	@Override
	public Set<Appointment> getallappointments(int hid) {
		Set<Appointment>aset=arepo.findAllappointments(hid);
		return aset;
	}

	@Override
	public List<Object[]> fetchCombinedData(int hid) {

		return arepo.fetchCombinedData(hid);
	}

	@Override
	public Hospital findbyemailhname(String email, String hname) {

		return hospitalrepo.findbyemailhname(email,hname);
	}

	@Override
	public Set<ConsultationAppointment> getallconsultappointmentbydid(int did) {

		return carepo.getallconsultappointmentbydid(did);
	}

	@Override
	public Set<Doctor> findbyspecialization(String specialization) {

		return docrepo.findbyspecialization(specialization);
	}

	@Override
	public Doctor finddocbymailandpassword(String email, String password) {
		Doctor doctor =docrepo.findByEmail(email);
		if (doctor != null) {

			String encodedPassword =doctor.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if (isPwdRight) {
				Optional<Doctor>doc1 = docrepo.findOneByEmailAndPassword(email, encodedPassword);
				if (doc1.isPresent()) {
					return doc1.get();
				}

			}




		}
		return null;
	}
	@Override
	public void savehospital(Hospital hos) {
		hospitalrepo.save(hos);
	}
	@Override
	public void savedoctor(Doctor doc) {
		docrepo.save(doc);
	}
}
