package com.cloudstorageapi.api.repositories;

import java.util.List;

 import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cloudstorageapi.api.entity.UserEntity;
 
 
@Repository
public interface  UserRepository extends CrudRepository<UserEntity,Integer> {

	@Query(value = "select * from  siddharth_users", nativeQuery = true)
	Page<UserEntity> listallusersfromdb(Pageable pageable);

	@Query(value = "SELECT count(*) from siddharth_users", nativeQuery = true)
	String countNumberOfUsers();



}
