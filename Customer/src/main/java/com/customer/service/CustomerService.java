package com.customer.service;

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

import com.customer.model.Customer;
import com.customer.model.CustomerSequence;
import com.customer.repository.CustomerRepository;

@Service
public class CustomerService implements UserDetailsService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private MongoOperations mongoOperations;
	
	
	
	//For Creating/Adding Customer 
	public Customer addCustomer(Customer customer) 
	{
		return customerRepository.save(customer);
			
	}
	
	
	 //For getting All Customers
	public List<Customer> getCustomers() 
	{
		List<Customer> customers =customerRepository.findAll();
		System.out.println("Getting Customers from DB" + customers);
		return customers;
	}
	
	//For deleting 
	public void deleteCustomer(Customer customer) 
	{
		customerRepository.delete(customer);
	}

	//For deleting By Id
	public void deleteById(long id) 
	{
		customerRepository.deleteById(id);
			
	}
	
    //For   get customer by email_Id
    public Customer getCustomerByEmail(String email) 
    {
        return customerRepository.findByemail(email);
    }
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Customer foundedCustomer = customerRepository.findByemail(username);
		

		String Email = foundedCustomer.getEmail();
		String Password = foundedCustomer.getPassword();
		return new User(Email,Password,new ArrayList<>());
	}
	
	public long generateSequence(String seqName) {

        CustomerSequence counter = mongoOperations.findAndModify(query(where("id").is(seqName)),
                new Update().inc("seq",1), options().returnNew(true).upsert(true),
                CustomerSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;

    }
	


}
