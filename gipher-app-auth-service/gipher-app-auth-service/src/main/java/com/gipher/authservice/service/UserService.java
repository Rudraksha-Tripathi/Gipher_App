package com.gipher.authservice.service;


import org.springframework.http.ResponseEntity;

import com.gipher.authservice.exception.UserAlreadyExistsException;
import com.gipher.authservice.model.User;

public interface UserService {

	public User registerUser(User user) throws UserAlreadyExistsException;
	public User authenticateUser(String emailId,String password);
	public boolean isAuthenticated();
	public User getByEmail(String email);
	public boolean removeUser(String emailId);
	public ResponseEntity<User> getUserByEmail(String emailId);
	public User updateUser(User user);
	

}
