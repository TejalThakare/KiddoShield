package com.example.RegisterLogin.Repo;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.RegisterLogin.Entity.Vaccine;
@EnableJpaRepositories
@Repository
public interface VaccineRepo extends JpaRepository<Vaccine,Integer> {
	@Query(value=" select v.* from Vaccine v  join Hospital h on  h.hid=v.hid where h.hid=:hid",nativeQuery = true)
	Set<Vaccine> findAllVaccines(Integer hid);
	@Transactional
	@Modifying
    @Query(value="update Vaccine v SET v.avdoses = v.avdoses - 1 WHERE v.vname=:vname AND v.avdoses > 0",nativeQuery=true)
    int decrementDoses(String vname);
	@Query(value="select avdoses from vaccine where vname=:vname",nativeQuery=true)
	int getavdoses(String vname);
	@Transactional
	@Modifying
    @Query(value="update Vaccine v SET v.avdoses = v.avdoses + 1 WHERE v.vname=:vname AND v.avdoses > 0",nativeQuery=true)
    int incrementDoses(String vname);
}
