package com.example.RegisterLogin.Repo;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Child;
import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Entity.User;
@EnableJpaRepositories
@Repository
public interface HospitalRepo extends JpaRepository<Hospital,Integer>  {
	Optional<Hospital> findOneByEmailAndPassword(String email, String password);
    Hospital findByEmail(String email);
    @Query(value="select * from hospital where hospital.email=:email AND hospital.hname=:hname",nativeQuery=true)
    Hospital findbyemailhname(String email,String hname);
}
