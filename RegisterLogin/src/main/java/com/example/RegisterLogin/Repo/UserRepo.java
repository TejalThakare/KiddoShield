package com.example.RegisterLogin.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Entity.User;
@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
	Optional<User> findOneByEmailAndPassword(String email, String password);
    User findByEmail(String email);
    Optional<User> findById(int id);
    
}
