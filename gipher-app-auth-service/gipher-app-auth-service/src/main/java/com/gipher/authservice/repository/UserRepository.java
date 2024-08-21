package com.gipher.authservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.gipher.authservice.model.User;

public interface UserRepository extends JpaRepository<User, String>{

	public void deleteByEmailId(String emailId);
	
    User findByUserNameAndPassword(String username, String password);

	
//	public boolean existsByUsernameAndPassword(String username,String password);
}
