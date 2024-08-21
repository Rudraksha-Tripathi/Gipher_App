package com.gipher.authservice.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

import com.gipher.authservice.exception.UserAlreadyExistsException;
import com.gipher.authservice.model.User;
import com.gipher.authservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepo;

	@Override
	public User registerUser(User user) throws UserAlreadyExistsException {
		User userExists = getByEmail(user.getEmailId());
		User u = null;

		if (userExists != null) {
			throw new UserAlreadyExistsException("User with this email already Exists!");
		} else {
//			String password = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(12));
			user.setPassword(user.getPassword());
			u = userRepo.save(user);
		}
		return u;
	}

	@Override
	public User authenticateUser(String emailId, String password) {

		User user = getByEmail(emailId);
		System.out.println("User****: "+user.getPassword());
		if (user != null) {
			if (password.equals(user.getPassword())) {
				return user;
			}
		}
		return null;
	}

	@Override
	public boolean isAuthenticated() {

		return false;
	}

	@Override
	public ResponseEntity<User> getUserByEmail(String emailId) {
		List<User> listUser = (List<User>) userRepo.findAll();
		User requiredUser = null;
		for (User user : listUser) {
			if (user.getEmailId().equals(emailId)) {
				requiredUser = user;
			}
		}
		return new ResponseEntity<User>(requiredUser, HttpStatus.OK);
	}

	public User getByEmail(String email) {
		List<User> listUser = (List<User>) userRepo.findAll();
		for (User user : listUser) {
			if (user.getEmailId().equals(email)) {
				return user;
			}
		}
		return null;
	}
	

	public User updateUser(User updatedData) {
		User user = getByEmail(updatedData.getEmailId());
		if (user != null) {
			user.setMobileNumber(updatedData.getMobileNumber());
			user.setPassword(updatedData.getPassword());
			user.setUserName(updatedData.getUserName());
			user.setImage(updatedData.getImage());
			userRepo.save(user);
			return user;
		}
		return null;
	}

	@Transactional
	public boolean removeUser(String emailId) {
		userRepo.deleteByEmailId(emailId);
		User deletedUser = getByEmail(emailId);
		if (deletedUser == null) {
			return true;
		}
		return false;
	}
}
