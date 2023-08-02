package com.admin.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.admin.model.Ratings;

@Repository
public interface RatingRepository extends MongoRepository<Ratings, Integer>
{

}