package com.admin.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.admin.model.WashPack;

@Repository
public interface WashPackRepository extends MongoRepository<WashPack, Integer>{

}
