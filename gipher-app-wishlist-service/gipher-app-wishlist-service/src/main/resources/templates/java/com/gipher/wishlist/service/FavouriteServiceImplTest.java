package com.gipher.wishlist.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.gipher.wishlist.model.Favourite;
import com.gipher.wishlist.repository.FavouriteRepository;

@ExtendWith(SpringExtension.class)
class FavouriteServiceImplTest {

	@Mock
	private FavouriteRepository favouritesRepository;
	@InjectMocks
	private FavouriteServiceImpl service;
	
	Favourite favourites;
	List<Favourite> listFavourites;
	Optional<Favourite> optFavourite;

	@BeforeEach
	public void setUp() throws Exception {
		favourites = new Favourite("cniCpOSDrSF6nE0vGx", "ctvcomedy", "nishma@gmail.com",
				"Excited Daily Show GIF by CTV Comedy Channel",
				"https://media1.giphy.com/media/cniCpOSDrSF6nE0vGx/giphy.gif?cid=be1a049434fee4c13ea94935ce92928cd1ac8b4f40a9e034&rid=giphy.gif",
				0);

		optFavourite = Optional.of(favourites);
	}
	
	@Test
	public void testSaveFavouriteSuccess() {
		when(favouritesRepository.save(Mockito.any(Favourite.class))).thenReturn(favourites);
		Favourite addedBook = service.saveFavourite(favourites);
		assertEquals(favourites,addedBook);
	}

	@Test
	public void testGetFavouritesByIdSuccess() {
		when(favouritesRepository.findByEmailId((Mockito.anyString()))).thenReturn(listFavourites);
		assertEquals(listFavourites,favouritesRepository.findByEmailId("nishma@gmail.com"));
	}


}
