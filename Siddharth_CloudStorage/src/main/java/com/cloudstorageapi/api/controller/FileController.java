package com.cloudstorageapi.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cloudstorageapi.api.model.FileIdRequest;
import com.cloudstorageapi.api.model.FileRequestBody;
import  com.cloudstorageapi.api.service.FileService;
 
  
@RestController
@CrossOrigin
public class FileController {
	
	@Autowired
	private  FileService FileService;	
	
	@RequestMapping(value = "/createFile", method = RequestMethod.POST)
	public ResponseEntity<?> createFile(@RequestBody FileRequestBody FileReqBody) throws Exception {
		return ResponseEntity.ok(FileService.createFile(FileReqBody));
	}
	
	@RequestMapping(value = "/updateFile", method = RequestMethod.PUT)
	public ResponseEntity<?> updateFile(@RequestBody FileRequestBody FileReqBody) throws Exception {
		return ResponseEntity.ok(FileService.updateFile(FileReqBody));
	}		
	
	@RequestMapping(value = "/listAllFiles", method = RequestMethod.GET)
	public ResponseEntity<?> listAllFiles(@RequestParam(defaultValue = "0") final Integer pageNumber,
			@RequestParam(defaultValue = "10") final Integer size) throws Exception {
		return ResponseEntity.ok(FileService.listallusersfromdb(pageNumber, size));
	}		
	
	@RequestMapping(value = "/deleteFile", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteFile(@RequestBody FileIdRequest user) throws Exception {
		return ResponseEntity.ok(FileService.deleteFile(user));
	}		
	
	@RequestMapping(value = "/Filescount", method = RequestMethod.GET)
	public ResponseEntity<?> countNumberOfFiles() throws Exception {
		return ResponseEntity.ok((FileService.countNumberOfFiles()));
	}
	
}
