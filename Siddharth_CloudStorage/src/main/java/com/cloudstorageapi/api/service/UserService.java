package com.cloudstorageapi.api.service;

 
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;

import com.cloudstorageapi.api.entity.UserEntity;
import com.cloudstorageapi.api.model.UserIdRequest;
import com.cloudstorageapi.api.model.UserRequestBody;
import com.cloudstorageapi.api.repositories.UserRepository;

@Service
public class UserService  {

	@Autowired
	private  UserRepository UserRepository;

	

	public UserEntity createUser(UserRequestBody userRequestBodyObj) {

		UserEntity newUser = new UserEntity();
		newUser.setUserName(userRequestBodyObj.getUserName());
		newUser.setUserId(userRequestBodyObj.getUserId());
		newUser.setEmailId(userRequestBodyObj.getEmailId());
		newUser.setPasswordHash(userRequestBodyObj.getPasswordHash());
		newUser.setCreatedAt(userRequestBodyObj.getCreatedAt());
	 
		return UserRepository.save(newUser);		 
	}

	public UserEntity updateUser(UserRequestBody userRequestBodyObj) {
		UserEntity newUser = new UserEntity();
		newUser.setUserId(userRequestBodyObj.getUserId() );
		newUser.setUserName(userRequestBodyObj.getUserName());
		newUser.setEmailId(userRequestBodyObj.getEmailId());
		newUser.setPasswordHash(userRequestBodyObj.getPasswordHash());
		newUser.setCreatedAt(userRequestBodyObj.getCreatedAt());
		return UserRepository.save(newUser);		 
	}

	public Page<UserEntity> listallusersfromdb(int pageNumber, int size) {
		Pageable pageable = PageRequest.of(pageNumber, size);
		return UserRepository.listallusersfromdb(pageable);
	}
 
	public String deleteUser(UserIdRequest fld) {
		int UserId= fld.getUserId();
		UserRepository.deleteById(UserId);
		return "User Deleted";
	}

	public String countNumberOfUsers() {

		return UserRepository.countNumberOfUsers();
	}

}
