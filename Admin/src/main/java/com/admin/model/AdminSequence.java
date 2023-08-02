package com.admin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "admin_sequences")
public class AdminSequence {

    @Id
    private String id;

    private long seq;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getSeq() {
		return seq;
	}

	public void setSeq(long seq) {
		this.seq = seq;
	}

	public AdminSequence(String id, long seq) {
		super();
		this.id = id;
		this.seq = seq;
	}

	public AdminSequence() {
		super();
		// TODO Auto-generated constructor stub
	}

    
}
