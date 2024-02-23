package com.example.RegisterLogin.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.RegisterLogin.Dto.AppointmentDto;
import com.example.RegisterLogin.Dto.ChildDto;
import com.example.RegisterLogin.Dto.ConsultationAppointmentDto;
import com.example.RegisterLogin.Dto.FeedbackDto;
import com.example.RegisterLogin.Dto.LoginDto;
import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.ConsultationAppointment;
import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Feedback;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Entity.User;
import com.example.RegisterLogin.Repo.AppointmentRepo;
import com.example.RegisterLogin.Repo.ChildRepo;
import com.example.RegisterLogin.Repo.ConsultAppointmentRepo;
import com.example.RegisterLogin.Repo.FeedbackRepo;
import com.example.RegisterLogin.Repo.HospitalRepo;
import com.example.RegisterLogin.Repo.UserRepo;
import com.example.RegisterLogin.Repo.VaccineRepo;
import com.example.RegisterLogin.payload.response.LoginMesage;

@Service

public class UserServiceImpl implements UserService {
	@Autowired
	private HospitalRepo hosrepo;
	@Autowired
	private UserRepo UserRepo;
	@Autowired
	private ChildRepo childrepo;
@Autowired 
private FeedbackRepo frepo;
@Autowired 
private AppointmentRepo arepo;
@Autowired
private VaccineRepo vrepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private ModelMapper mapper;
@Autowired
private HospitalService hosservice;
@Autowired
private ConsultAppointmentRepo carepo;

	@Override
	public String addUser(int hid,UserDto UserDto) {

		User user = mapper.map(UserDto, User.class);
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		System.out.println(passwordEncoder.encode(user.getPassword()) + "hiiiiii");
		Hospital h=hosrepo.findById(hid).orElse(null);
		user.setHospital(h);
		UserRepo.save(user);

		return user.getFname() ;
	}
	UserDto UserDto;

	@Override
	public LoginMesage  loginUser(LoginDto loginDto) {
		String msg = "";
		User user1 = UserRepo.findByEmail(loginDto.getEmail());
		if (user1 != null) {
			String password = loginDto.getPassword();
			String encodedPassword =user1.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			if (isPwdRight) {
				Optional<User> user = UserRepo.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
				if (user.isPresent()) {
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
	public String addChild(int uid,ChildDto childdto) {
		Child child=new Child(
				childdto.getCid(),
				childdto.getCfname(),
				childdto.getAge(),
				childdto.getWeight(),
				childdto.getBloodgrp(),
				childdto.getGender(),
				childdto.getDob()
				);
		User u=UserRepo.getById(uid);
		child.setUser(u);
		childrepo.save(child);
		return child.getCfname();
	}

	@Override
	public void delete(int id) {
		UserRepo.deleteById(id);
	}

	@Override
	public void update(UserDto userDto) {
		System.out.println(userDto.getUid());
		Optional<User>user=UserRepo.findById(userDto.getUid());
	
		if(user.isPresent()) {
			User u=user.get();
			u.setUid(userDto.getUid());
			u.setFname(userDto.getFname());
			u.setLname(userDto.getLname());
			u.setUsername(userDto.getUsername());
			u.setEmail(userDto.getEmail());
			u.setAddress(userDto.getAddress());
			u.setContact(userDto.getContact());
			UserRepo.save(u);
			System.out.println(u);
		}



	}

	@Override
	public void updateChild(ChildDto childdto) {
		Optional<Child>child =childrepo.findById(childdto.getCid());
		if(child.isPresent()) {
			Child c=child.get();
			c.setCid(childdto.getCid());
			c.setCfname(childdto.getCfname());
			c.setAge(childdto.getAge());
			c.setWeight(childdto.getWeight());
			c.setBloodgrp(childdto.getBloodgrp());
			c.setGender(childdto.getGender());
			c.setDob(childdto.getDob());
			childrepo.save(c);
		}

	}

	@Override
	public void deleteChild(int id) {
		// TODO Auto-generated method stub
		childrepo.deleteById(id);

	}

	@Override
	public Set<Child> findAllChild(int uid) {
		Set<Child>cset=childrepo.findAllChild(uid);

		return cset;
	}

	@Override
	public Child findbycid(int cid) {
		Optional<Child> ch=childrepo.findById(cid);
		if(ch.isPresent()) {
		return ch.get();}
		return null;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	}

	@Override
	public User findbyuid(int uid) {
		Optional<User>u=UserRepo.findById(uid);
		if(u.isPresent()) {
			return u.get();
		}
		return null;
	}
	@Override
	public User findbymail(String email) {
		User u=UserRepo.findByEmail(email);
		if(u!=null) {
			return u;
		}
		return null;
	}

	@Override
	public String giveFeedback(int hid, int uid, FeedbackDto fdto) {
		Feedback f1=mapper.map(fdto, Feedback.class);
		f1.setDate(LocalDateTime.now());
		User u=findbyuid(uid);
		f1.setUser(u);
		Hospital h=hosservice.findbyhid(hid);
		f1.setHospital(h);
		frepo.save(f1);
		return f1.getMsg();
	}

	@Override
	public String bookAppointment(int hid,int uid,AppointmentDto adto) {
		Appointment a1=mapper.map(adto,Appointment.class);
		Hospital h=hosservice.findbyhid(hid);
		User u=findbyuid(uid);
		a1.setUser(u);
		a1.setHospital(h);
		arepo.save(a1);
		return a1.getVname();
	}

	@Override
	public void rescheduleappointment(int aid, AppointmentDto adto) {
		Appointment a=arepo.getById(aid);
		a.setDate(adto.getDate());
		a.setTime(adto.getTime());
		arepo.save(a);
		
		
	}

	@Override
	public Set<Appointment> getallappointments(int uid) {
		Set<Appointment>aset=arepo.findAllappointmentsbyuid(uid);
		return aset;
	}

	@Override
	public int getavdoses(String vname) {
		
		return vrepo.getavdoses(vname);
	}

	@Override
	public String resetpassword(UserDto udto) {
		
		return null;
	}

	@Override
	public User findbyemailusername(String email, String username) {
		
		return UserRepo.findbyemailusername(email, username);
	}

	@Override
	public List<Object[]> fetchChildData(int uid) {
		// TODO Auto-generated method stub
		return arepo.fetchChildData(uid);
	}

	@Override
	public String bookConsultAppointment(int uid, ConsultationAppointmentDto adto) {
		ConsultationAppointment ca=mapper.map(adto,ConsultationAppointment.class);
		Doctor d=hosservice.findbydid(adto.getDid());
		ca.setDoctor(d);
		User u=findbyuid(uid);
		ca.setUser(u);
		carepo.save(ca);
		return ca.getContact();
	}

	@Override
	public Set<ConsultationAppointment> getallconsultappointment(int uid) {
		
		return carepo.getallconsultappointment(uid);
	}
	@Override
	public void saveUser(User u) {
		UserRepo.save(u);
	}

	@Override
	public int decrementDoses(String vname) {
		
		return vrepo.decrementDoses(vname);
	}

	@Override
	public Appointment findbyaid(int aid) {
		Optional<Appointment> a=arepo.findById(aid);
		if(a.isPresent()) {
			return a.get();
		}
		return null;
	}

	@Override
	public void deleteAppointment(int aid) {
		Appointment a=findbyaid(aid);
		if(a!=null) {
			arepo.deleteById(aid);
		}
	}

	@Override
	public ConsultationAppointment findbycaid(int caid) {
		Optional<ConsultationAppointment> ca=carepo.findById(caid);
		if(ca.isPresent()) {
			return ca.get();
		}
		return null;
	}

	@Override
	public void deleteConsultAppointment(int caid) {
		ConsultationAppointment ca=findbycaid(caid);
		if(ca!=null) {
			carepo.deleteById(caid);
		}
		
	}

	@Override
	public int incrementDoses(String vname) {
		
		return vrepo.incrementDoses(vname);
	}

	@Override
	public void rescheduleconsultappointment(int caid, ConsultationAppointmentDto cadto) {
		Optional<ConsultationAppointment> ca=carepo.findById(caid);
		if(ca.isPresent()) {
			ConsultationAppointment c1=ca.get();
			c1.setDate(cadto.getDate());
			c1.setTime(cadto.getTime());
			carepo.save(c1);
		}
	}


}