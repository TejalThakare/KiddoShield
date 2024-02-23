package com.example.RegisterLogin.Repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Doctor;
import com.example.RegisterLogin.Entity.Feedback;
@EnableJpaRepositories
@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer>{
	@Query(value="select * from feedback f where f.hid=:hid",nativeQuery = true)
	Set<Feedback> findAllfeedbacks(Integer hid);
}
