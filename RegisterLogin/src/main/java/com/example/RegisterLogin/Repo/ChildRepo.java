package com.example.RegisterLogin.Repo;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Child;
@EnableJpaRepositories
@Repository
public interface ChildRepo extends JpaRepository<Child,Integer>{
	@Query(value=" select c.* from user u  join child c on  u.uid=c.uid where u.uid=:uid",nativeQuery = true)
	Set<Child> findAllChild(Integer uid);
	@Query(value=" select child.* from hospital join user on hospital.hid=user.hid join child on user.uid=child.uid where hospital.hid=:hid",nativeQuery=true)
	Set<Child> findAllChildByhid(Integer hid);

}
