package com.gipher.wishlist.service;

import java.util.List;

import com.gipher.wishlist.model.Favourite;

public interface FavouriteService {

	public Favourite saveFavourite(Favourite f);
	
	public List<Favourite> getAllFavourites();
	
	public Favourite deleteFromFavourites(String id);
	
	public List<Favourite> getFavouritesByEmailId(String emailId);
}
