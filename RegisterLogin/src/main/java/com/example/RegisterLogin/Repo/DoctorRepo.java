package com.example.RegisterLogin.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.RegisterLogin.Entity.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor,Integer> {

	Doctor findByEmail(String email);

	Optional<Doctor> findOneByEmailAndPassword(String email, String encodedPassword);

}
