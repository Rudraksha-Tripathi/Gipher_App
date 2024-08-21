package com.gipher.wishlist.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.gipher.wishlist.model.Favourite;

public interface FavouriteRepository extends MongoRepository<Favourite, String>{

	public List<Favourite> findByEmailId(String emailId);
}
