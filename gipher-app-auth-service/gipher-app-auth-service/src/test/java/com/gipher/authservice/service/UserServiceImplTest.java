package com.gipher.authservice.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.gipher.authservice.exception.UserAlreadyExistsException;
import com.gipher.authservice.model.User;
import com.gipher.authservice.repository.UserRepository;

@ExtendWith(SpringExtension.class)
class UserServiceImplTest {
	
	@Mock
	private UserRepository userRepository;
	@InjectMocks
	private UserServiceImpl service;
	
	User user;
	Optional<User> optUser;

	@BeforeEach()
	public void setUp() throws Exception {
		user = new User("nishma@gmail.com", "Gipher-App", "Gipher", null, "female", "9876543210", "www.images.com");
		optUser = Optional.of(user);
	}
	
	@Test
	public void testRegisterUserSuccess() throws UserAlreadyExistsException {
		when(userRepository.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(userRepository.save(Mockito.any(User.class))).thenReturn(user);
		User addedUser = service.registerUser(user);
		assertEquals(user, addedUser);
	}
	
	@Test
	public void testRegisterUserFailure() throws UserAlreadyExistsException {
		when(userRepository.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(userRepository.save(Mockito.any(User.class))).thenReturn(null);
	}

	@Test
	public void testUpdateUserSuccess() throws UserAlreadyExistsException {
		when(userRepository.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(userRepository.save(Mockito.any(User.class))).thenReturn(user);
		assertEquals(user, userRepository.save(user));
	}

	@Test
	public void testUpdateUserFailure() throws UserAlreadyExistsException {
		when(userRepository.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(userRepository.save(Mockito.any(User.class))).thenReturn(null);
	}

	@Test
	public void testAuthenticateUserSuccess() {
		when(userRepository.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(userRepository.save(Mockito.any(User.class))).thenReturn(user);
	}

	@Test
	public void testAuthenticateUserFailure() {
		when(userRepository.findById(Mockito.anyString())).thenReturn(Optional.empty());
		when(userRepository.save(Mockito.any(User.class))).thenReturn(null);
	}
	
}
