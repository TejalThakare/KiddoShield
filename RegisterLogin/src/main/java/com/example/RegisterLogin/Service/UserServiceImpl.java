package com.example.RegisterLogin.Service;
import com.example.RegisterLogin.Entity.User;
import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.Hospital;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.log.LogMessage;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.RegisterLogin.Dto.ChildDto;
import com.example.RegisterLogin.Dto.LoginDto;
import com.example.RegisterLogin.payload.response.LoginMesage;
import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Repo.ChildRepo;
import com.example.RegisterLogin.Repo.HospitalRepo;
import com.example.RegisterLogin.Repo.UserRepo;

@Service

public class UserServiceImpl implements UserService {
@Autowired
private HospitalRepo hosrepo;
    @Autowired
    private UserRepo UserRepo;
    @Autowired
    private ChildRepo childrepo;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String addUser(int hid,UserDto UserDto) {

        User User = new User(

        		UserDto.getUid(),
        		UserDto.getFname(),
        		UserDto.getLname(),
        		UserDto.getUsername(),
        		UserDto.getEmail(),
        		UserDto.getAddress(),
        		UserDto.getContact(),

               this.passwordEncoder.encode(UserDto.getPassword())
        );
        Hospital h=hosrepo.getById(hid);
        User.setHospital(h);
        UserRepo.save(User);

        return User.getFname() ;
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
		 Optional<User> user=UserRepo.findById(userDto.getUid());
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
	public Set<Child> findAllChild(int id) {
		Set<Child>cset=childrepo.findAllChild(id);
		return cset;
	}
	

}