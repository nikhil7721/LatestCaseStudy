package com.admin.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.admin.model.Admin;


@Repository
public interface AdminRepository extends MongoRepository<Admin,Long> {
	
	Admin findByEmail(String email);

	public Admin findByUsername(String username);
}
