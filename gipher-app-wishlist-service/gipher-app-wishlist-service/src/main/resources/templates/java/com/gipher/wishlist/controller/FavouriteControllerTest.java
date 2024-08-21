package com.gipher.wishlist.controller;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gipher.wishlist.model.Favourite;
import com.gipher.wishlist.service.FavouriteService;


@ExtendWith(SpringExtension.class)
@WebMvcTest(value = FavouriteController.class)
class FavouriteControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private FavouriteService service;
	
	private Favourite favourites;
	private List<Favourite> listFavourites;

	@BeforeEach
	public void setUp() throws Exception {
		favourites = new Favourite("cniCpOSDrSF6nE0vGx", "ctvcomedy", "nishma@gmail.com",
				"Excited Daily Show GIF by CTV Comedy Channel",
				"https://media1.giphy.com/media/cniCpOSDrSF6nE0vGx/giphy.gif?cid=be1a049434fee4c13ea94935ce92928cd1ac8b4f40a9e034&rid=giphy.gif",
				0);
	}
	
	@Test
	public void testAddToFavouritesSuccess() throws Exception {
		// setup the service mock
		when(service.saveFavourite(Mockito.any(Favourite.class))).thenReturn(favourites);
		// send a post request using mockMVC
		String favouritesJson = new ObjectMapper().writeValueAsString(favourites);
		mockMvc.perform(
				post("/favourites/addToFavourites").contentType(MediaType.APPLICATION_JSON).content(favouritesJson))
				.andExpect(status().isCreated());
		// verify mock has been called
		verify(service).saveFavourite(Mockito.any(Favourite.class));
		verifyNoMoreInteractions(service);
	}

	@Test
	public void testGetAllFavouritesByEmailIdSuccess() throws Exception {
		when(service.getFavouritesByEmailId(Mockito.anyString())).thenReturn(listFavourites);
		mockMvc.perform(get("/favourites/getAllFavouritesByEmailId/gipher@gmail.com")).andExpect(status().isOk())
				.andDo(print());
		verify(service, times(1)).getFavouritesByEmailId(Mockito.anyString());
	}

	@Test
	public void testDeleteFromFavouritesSuccess() throws Exception {
		when(service.deleteFromFavourites(Mockito.anyString())).thenReturn(favourites);
		mockMvc.perform(delete("/favourites/deleteFromFavourites/cniCpOSDrSF6nE0vGx")).andExpect(status().isOk())
				.andDo(print());
		verify(service, times(1)).deleteFromFavourites(Mockito.anyString());
	}


}
