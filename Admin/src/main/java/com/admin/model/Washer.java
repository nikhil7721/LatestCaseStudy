package com.admin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document(collection="washers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Washer 
{
	
	@Transient
    public static final String SEQUENCE_NAME = "washer_sequence";
	
	@Id
	private long id;
	private String name;
	
	@Indexed(unique = true)
	private String email;
	
	@Indexed(unique = true)
	private String username;
	private String phone;
	private String address;
	private boolean enabled=true;
	private String password;
	private String role;
}
