package com.washer.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.customer.service.CustomerService;
import com.washer.model.AuthenticationRequest;
import com.washer.model.AuthenticationResponse;
import com.washer.model.Order;
import com.washer.model.Ratings;
import com.washer.model.Washer;
import com.washer.repository.WasherRepository;
import com.washer.service.MyUserDetailsService;
import com.washer.service.WasherService;
import com.washer.util.JwtUtil;

@RestController
@RequestMapping("/washer")
@CrossOrigin(origins = "http://localhost:4200")
public class WasherController 
{
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	

	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private WasherService washerService;
	
	@Autowired
	private WasherRepository washerRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	@GetMapping("/msg")
	public String message() {
		return "Hello! Welcome form Washer page";
	}
	
//	
//	//authenticating washer
//	@PostMapping("/auth")
//	private ResponseEntity<?> authWasher(@RequestBody Washer washer){
//		String email = washer.getEmail();
//		String password = washer.getPassword();
//		try {
//			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
//				
//		} catch (Exception e){
//				
//			return ResponseEntity.ok(new WasherAuthResponse("Error during  washer Authentication  "+ email));
//		}
//		return ResponseEntity.ok(new WasherAuthResponse("Successfully Authenticated washer  "+ email));
//			
//	}
	
	@PostMapping("/authenticate") // Authenticate a Customer (Existing)
	public ResponseEntity<?> generateToken(@RequestBody AuthenticationRequest authRequest) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
			);
		}catch (BadCredentialsException e) {
			throw new Exception("Invalid Username or Password!",e);
		}
		UserDetails userDetails = userDetailsService.loadUserByUsername(authRequest.getUsername());
		String token = jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new AuthenticationResponse(token));
	}
	
	

	//Creating/Adding Washer
	@PostMapping("/addwasher")
	public Washer saveWasher(@RequestBody Washer washer) 
	{
		washer.setId(washerService.generateSequence(washer.SEQUENCE_NAME));
		return washerService.addWasher(washer);
	}
	
	
	
	//Reading all washer
	@GetMapping("/allwashers")
	public List<Washer> findAllWashers()
	{
		return washerService.getWashers();
	}
	
	@GetMapping("/current-user")
	public Object getCurrentUser(Authentication authentication){
		return authentication.getPrincipal();
	}

	
	//Reading Washer by ID
	@GetMapping("/allwashers/{id}")
	public Optional<Washer> getWasherById(@PathVariable long id)
	{
		return washerRepository.findById(id);
				
	}
	
	
	//Updating Washer Data by Id
	@PutMapping("/update/{id}")
	public ResponseEntity<Object> updateWasher(@PathVariable int id, @RequestBody Washer washer)
	{
		
			washerRepository.save(washer);
			return new ResponseEntity<Object>("Washer updated successfully with id " +id, HttpStatus.OK);
		
				
	}
	
	//Reading Washer by Email
    @GetMapping("/WasherByEmail/{email}")
    public Washer getWasherByEmail(@PathVariable String email)
    {
            return this.washerService.findWasherByEmail(email);

    }
	
	
	// Deleting Washer Data by Id 
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Object> deleteWasher(@PathVariable int id)
	{
		washerService.deleteById(id);
		return new ResponseEntity<Object>("Washer deleted with id"+id,HttpStatus.OK);
	}
	
	
//-------------------------------------------Order--------------------------------------------------//
	
	//Reading all orders 
	@GetMapping("/allorders")
	public List<Order> getallorders()
	{
		String baseurl="http://localhost:8084/order/allorders";
		Order[] allorders=restTemplate.getForObject(baseurl, Order[].class);
		
		return Arrays.asList(allorders);
	}

	//Reading orders By Id 
	@GetMapping("/orders/{id}")
	public Order getOrderById(@PathVariable("id") int id) 
	{
		return restTemplate.getForObject("http://localhost:8084/order/orders/" + id, Order.class);
	}
	
	
	//------------------------------------Ratings----------------------------------------------------//
	
	//Reading all ratings from washer 
	@GetMapping("/allratings")
	public List<Ratings> getallratings()
	{
		String baseurl="http://localhost:8083/admin/allratings";
		Ratings[] allratings=restTemplate.getForObject(baseurl, Ratings[].class);
		
		return Arrays.asList(allratings);
	}
	
	
	
	
	
	
}