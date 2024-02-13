package com.example.RegisterLogin.Repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Child;
@EnableJpaRepositories
@Repository
public interface ChildRepo extends JpaRepository<Child,Integer>{
	@Query(value="select * from child where uid=id",nativeQuery = true)
	Set<Child> findAllChild(int id);
	

}
