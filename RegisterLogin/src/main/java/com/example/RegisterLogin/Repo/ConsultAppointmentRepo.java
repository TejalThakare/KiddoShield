package com.example.RegisterLogin.Repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.ConsultationAppointment;
@EnableJpaRepositories
@Repository
public interface ConsultAppointmentRepo extends JpaRepository<ConsultationAppointment,Integer>{
	@Query(value="select * from consultappointment c where c.uid=:uid",nativeQuery=true)
	Set<ConsultationAppointment> getallconsultappointment(int uid);
	@Query(value="select * from consultappointment c where c.did=:did",nativeQuery=true)
	Set<ConsultationAppointment> getallconsultappointmentbydid(int did);
}
