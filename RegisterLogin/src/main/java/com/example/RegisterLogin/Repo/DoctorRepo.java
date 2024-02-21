package com.example.RegisterLogin.Repo;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Doctor;
@EnableJpaRepositories
@Repository
public interface DoctorRepo extends JpaRepository<Doctor,Integer> {
	//@Query(value="select * from doctor where doctor.email=:email",nativeQuery=true)
	Doctor findByEmail(String email);

	Optional<Doctor> findOneByEmailAndPassword(String email, String encodedPassword);
	@Query(value=" select d.* from hospital h  join doctor d on  h.hid=d.hid where h.hid=:hid",nativeQuery = true)
	Set<Doctor> findAllDoctor(Integer hid);
//	@Query(value="select * from doctor where doctor.email=:email",nativeQuery=true)
//	Doctor findbymail(String email);
	@Query(value="select * from doctor where doctor.specialization=:specialization",nativeQuery=true)
	Set<Doctor> findbyspecialization(String specialization);
}
