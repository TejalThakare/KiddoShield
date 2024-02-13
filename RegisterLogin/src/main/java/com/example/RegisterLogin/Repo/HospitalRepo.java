package com.example.RegisterLogin.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Entity.User;
@EnableJpaRepositories
@Repository
public interface HospitalRepo extends JpaRepository<Hospital,Integer>  {
	Optional<Hospital> findOneByEmailAndPassword(String email, String password);
    Hospital findByEmail(String email);
}
