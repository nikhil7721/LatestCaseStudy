package com.washer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.customer.model.Customer;
import com.washer.model.Washer;

@Repository
public interface WasherRepository extends MongoRepository<Washer, Long> {
	
	Washer findByEmail(String email);
	
	public Washer findByUsername(String username);
}
