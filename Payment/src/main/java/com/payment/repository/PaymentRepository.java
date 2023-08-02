package com.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.payment.model.Payments;

@Repository
public interface PaymentRepository extends MongoRepository<Payments, Integer> {

}
