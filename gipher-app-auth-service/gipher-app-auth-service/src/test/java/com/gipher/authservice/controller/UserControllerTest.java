package com.gipher.authservice.controller;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gipher.authservice.model.User;
import org.springframework.http.MediaType;
import com.gipher.authservice.service.UserService;


@ExtendWith(SpringExtension.class)
@WebMvcTest(value = UserController.class)
class UserControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private UserService service;
	
	private User user;
	Optional<User> optUser;

	@BeforeEach
	public void setUp() throws Exception {
		user = new User("nishma@gmail.com", "Gipher App", "Gipher", null, "female", "9876543210", "www.images.com");
	}
	
	@Test
	public void testAddUserSuccess() throws Exception {
		// setup the service mock
		when(service.registerUser(Mockito.any(User.class))).thenReturn(user);
		// send a post request using mockMVC
		String bookJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/user/addNewUser").contentType(MediaType.APPLICATION_JSON).content(bookJson))
				.andExpect(status().isCreated());
		// verify mock has been called
		verify(service).registerUser(Mockito.any(User.class));
		verifyNoMoreInteractions(service);
	}
	
	@Test
	public void testLoginUserSuccess() throws Exception {
		// setup the service mock
		when(service.authenticateUser(Mockito.anyString(), Mockito.anyString())).thenReturn(user);
		// send a post request using mockMVC
		String bookJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/user/loginUser").contentType(MediaType.APPLICATION_JSON).content(bookJson))
				.andExpect(status().isOk());
		// verify mock has been called
		verify(service).authenticateUser(Mockito.anyString(), Mockito.anyString());
		verifyNoMoreInteractions(service);
	}
	
	@Test
	public void testUpdateUserSuccess() throws Exception {
		// setup the service mock
		when(service.updateUser(Mockito.any(User.class))).thenReturn(user);
		// send a post request using mockMVC
		String bookJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(put("/user/updateUser").contentType(MediaType.APPLICATION_JSON).content(bookJson))
				.andExpect(status().isOk());
	}
}
