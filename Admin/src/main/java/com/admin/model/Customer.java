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


@Document(collection = "customers1")
public class Customer {
	
	@Transient
    public static final String SEQUENCE_NAME = "customer_sequence";
	
	@Id
	private long id;
	private String name;
	private String phone;
	
	@Indexed(unique = true)
	private String username;
	
	@Indexed(unique = true)
	private String email;
	private String address;
	private boolean enabled=true;
	private String password;
	private String role;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public static String getSequenceName() {
		return SEQUENCE_NAME;
	}
	public Customer(long id, String name, String phone, String username, String email, String address, String password,
			String role) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.username = username;
		this.email = email;
		this.address = address;
		this.password = password;
		this.role = role;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", phone=" + phone + ", username=" + username + ", email="
				+ email + ", address=" + address + ", password=" + password + ", role=" + role + "]";
	}
	
	
}
