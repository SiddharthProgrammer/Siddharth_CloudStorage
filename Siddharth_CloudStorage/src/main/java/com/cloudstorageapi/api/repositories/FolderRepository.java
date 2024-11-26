package com.cloudstorageapi.api.repositories;

import java.util.List;

 import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cloudstorageapi.api.entity.FolderEntity;
 
 
@Repository
public interface  FolderRepository extends CrudRepository<FolderEntity,Integer> {

	@Query(value = "select * from  siddharth_folders ", nativeQuery = true)
	Page<FolderEntity> listallusersfromdb(Pageable pageable);

	@Query(value = "SELECT count(*) from siddharth_folders", nativeQuery = true)
	String countNumberOfFolders();



}
