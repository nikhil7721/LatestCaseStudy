package com.washer.service;



import com.washer.model.Washer;
import com.washer.repository.WasherRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private WasherRepository washerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Washer washer = washerRepository.findByUsername(username);
        if(washer != null) {
            GrantedAuthority authority = new SimpleGrantedAuthority(washer.getRole());
            return new User(washer.getUsername(), washer.getPassword(),Arrays.asList(authority));
        }
        else return new User(null,null,null);
    }
}

