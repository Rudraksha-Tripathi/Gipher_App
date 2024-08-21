package com.gipher.authservice.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gipher.authservice.exception.UserAlreadyExistsException;
import com.gipher.authservice.model.User;
import com.gipher.authservice.service.UserService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
	
	User user = new User();
	@Value("${gmail.username}")
	private String username;
	@Value("${gmail.password}")
	private String password;

	@Autowired
	private UserService userService;

	@PostMapping("/addNewUser")
	public ResponseEntity<?> addNewUser(@RequestBody User user) {
		try {
			User u = userService.registerUser(user);
			return new ResponseEntity<User>(u, HttpStatus.CREATED);
		} catch (UserAlreadyExistsException e) {
			System.out.println(e.getMessage());
		}
		return new ResponseEntity<String>("Failed to create user", HttpStatus.CONFLICT);
	}
	
	@GetMapping("/findUserByEmail/{token}")
	public ResponseEntity<User> findUserByEmail(@PathVariable String token) {
		Claims claim = Jwts.parser().setSigningKey("usersecretkey").parseClaimsJws(token).getBody();
		return new ResponseEntity<>(userService.getByEmail(claim.getId()), HttpStatus.OK);
	}

	@PostMapping("/loginUser")
	public ResponseEntity<?> loginUser(@ModelAttribute("email") String email,@ModelAttribute("password") String password) {
		System.out.println("Email : "+email+" "+password);
		User user = userService.authenticateUser(email, password);
		System.out.println("User: " +user);
		
		if (user != null) {
			String token = Jwts.builder().setId(user.getEmailId()).setSubject(user.getUserName())
					.setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();
			
			// Add it to a Map and send the map in response body
			Map<String, String> map1 = new HashMap<String, String>();
			map1.put("token", token);
			map1.put("image", user.getImage());

			ResponseEntity<Map<String, String>> response = new ResponseEntity<Map<String, String>>(map1, HttpStatus.OK);
			return response;
		}
		return new ResponseEntity<String>("Login failed!", HttpStatus.UNAUTHORIZED);
	}

	@PutMapping("/updateUser")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User u = userService.updateUser(user);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	@DeleteMapping("/deleteUser/{token}")
	public ResponseEntity<String> deleteUser(@PathVariable String token) {
		Claims claim = Jwts.parser().setSigningKey("usersecretkey").parseClaimsJws(token).getBody();
		userService.removeUser(claim.getId());
		return new ResponseEntity<>("Successfully Deleted", HttpStatus.OK);
	}

}
