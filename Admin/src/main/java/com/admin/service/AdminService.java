package com.admin.service;

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

import com.admin.model.Admin;
import com.admin.model.AdminSequence;
import com.admin.repository.AdminRepository;

@Service
public class AdminService implements UserDetailsService
{

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private MongoOperations mongoOperations;
	
	//Creating and adding admin
	public Admin addAdmin(Admin admin) 
	{
		return adminRepository.save(admin);
			
	}
	
	//Reading All admin
	public List<Admin> getAdmins() 
	{
		List<Admin> admins =adminRepository.findAll();
		System.out.println("Getting Admins from DB" + admins);
		return admins;
	}
	
	//For deleting By Id
	public void deleteById(long id) 
	{
		adminRepository.deleteById(id);
				
	}
	
	//For deleting 
	public void deleteAdmin(Admin admin)
	{
		adminRepository.delete(admin);
	}
	
	//for get admin by emailId
	public Admin findAdminByEmailId(String Email) {
		return this.adminRepository.findByEmail(Email);
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Admin foundedAdmin = adminRepository.findByEmail(username);
		
//		if  (foundedAdmin ==null) return null;
		String email = foundedAdmin.getEmail();
		String password = foundedAdmin.getPassword();
		return new User(email, password, new ArrayList<>());
	}
	
	public long generateSequence(String seqName) {

        AdminSequence counter = mongoOperations.findAndModify(query(where("id").is(seqName)),
                new Update().inc("seq",1), options().returnNew(true).upsert(true),
                AdminSequence.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;

    }
	
}
