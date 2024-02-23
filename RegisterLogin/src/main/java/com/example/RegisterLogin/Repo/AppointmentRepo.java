package com.example.RegisterLogin.Repo;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Hospital;
@EnableJpaRepositories
@Repository
public interface AppointmentRepo extends JpaRepository<Appointment,Integer>{
	@Query(value=" select a.* from hospital h  join appointment a on  h.hid=a.hid where h.hid=:hid",nativeQuery = true)
	Set<Appointment> findAllappointments(Integer hid);

	//List<Appointment> findByAppointmentDateAndHospital(LocalDate appointmentDate, Hospital hospital);
	@Query(value="SELECT * FROM Appointment a WHERE a.date = :twoDaysFromNow",nativeQuery = true)
	List<Appointment> findByAppointmentDateAndHospital(LocalDate twoDaysFromNow);
	@Query(value="select a.*,c.cfname,c.bloodgrp,c.age,c.weight,c.dob from appointment a join child c on a.cid=c.cid where a.hid=:hid",nativeQuery=true)
	List<Object[]> fetchCombinedData(int hid);
	@Query(value=" select * from appointment where uid=:uid",nativeQuery = true)
	Set<Appointment> findAllappointmentsbyuid(Integer uid);

@Query(value="SELECT a.aid,a.cid,c.cfname,a.date,a.time,a.vname\r\n"
		+ "FROM user\r\n"
		+ "JOIN child c ON user.uid = c.uid\r\n"
		+ "JOIN appointment a ON c.cid = a.cid\r\n"
		+ "WHERE user.uid =:uid\r\n"
		+ "",nativeQuery=true)
List<Object[]> fetchChildData(int uid);

}
