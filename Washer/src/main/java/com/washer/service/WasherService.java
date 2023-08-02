package com.washer.service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.customer.model.CustomerSequence;
import com.washer.model.Washer;
import com.washer.model.WasherSequence;
import com.washer.repository.WasherRepository;

@Service
public class WasherService implements UserDetailsService
{
	@Autowired
	private WasherRepository washerRepository;
	
	@Autowired
	private MongoOperations mongoOperations;
	
  
	//for creating/adding washer
	public Washer addWasher(Washer washer)
	{
		return washerRepository.save(washer);
	}
 
	
	////For getting All Washer
	public List<Washer> getWashers() 
	{
		// TODO Auto-generated method stub
		List<Washer> washer= washerRepository.findAll();
		System.out.println("Getting Washer from DB" + washer);
		return washer;
	}

	//For deleting By Id
	public void deleteById(long id)
	{
		washerRepository.deleteById(id);
		
	}
	
	//For deleting
	public void deleteWasher(Washer washer) 
	{
		washerRepository.delete(washer);
	}
	
	//For get washer by email_Id
    public Washer findWasherByEmail(String email) 
    {
        return this.washerRepository.findByEmail(email);
    }
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Washer foundedWasher = washerRepository.findByEmail(username);
		
		if  (foundedWasher ==null) return null;
		String Email = foundedWasher.getEmail();
		String Password = foundedWasher.getPassword();
		return new User(Email, Password, new ArrayList<>());
	}
	
	public long generateSequence(String seqName) {

        WasherSequence counter = mongoOperations.findAndModify(query(where("id").is(seqName)),
                new Update().inc("seq",1), options().returnNew(true).upsert(true),
                WasherSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;

    }
	
	
}