package com.cloudstorageapi.api.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class FileRequestBody {
 
	private int fileId;

	 
	private String fileName;
	 
	private int parentFileId;
	  
	private Date createdAt;

	public int getFileId() {
		return fileId;
	}

	public void setFileId(int fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public int getParentFileId() {
		return parentFileId;
	}

	public void setParentFileId(int parentFileId) {
		this.parentFileId = parentFileId;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
 
 

}
