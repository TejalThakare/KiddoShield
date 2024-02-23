package com.example.RegisterLogin.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Dto.UserDto;
import com.example.RegisterLogin.Entity.User;
@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {
	Optional<User> findOneByEmailAndPassword(String email, String password);
	@Query(value="select * from user where user.email=:email",nativeQuery=true)
    User findByEmail(String email);
    Optional<User> findById(int id);
     @Query(value="select * from user where user.email=:email AND user.username=:username",nativeQuery=true)
     User findbyemailusername(String email,String username);
}
