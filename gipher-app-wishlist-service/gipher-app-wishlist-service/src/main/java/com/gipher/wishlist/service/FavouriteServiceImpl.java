package com.gipher.wishlist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gipher.wishlist.model.Favourite;
import com.gipher.wishlist.repository.FavouriteRepository;

@Service
public class FavouriteServiceImpl implements FavouriteService{

	@Autowired
	private FavouriteRepository favouriteRepository;

	@Override
	public Favourite saveFavourite(Favourite f) {
		Favourite fav = favouriteRepository.save(f);
		return fav;
	}

	@Override
	public List<Favourite> getAllFavourites() {
		List<Favourite> list = favouriteRepository.findAll();
		return list;
	}

	public Favourite deleteFromFavourites(String id) {
		try {
			favouriteRepository.deleteById(id);
		} catch (Exception e) {
			System.out.println(e);
		}
		return null;
	}

	@Override
	public List<Favourite> getFavouritesByEmailId(String emailId) {
		List<Favourite> list = favouriteRepository.findByEmailId(emailId);
		return list;
	}
	
}
