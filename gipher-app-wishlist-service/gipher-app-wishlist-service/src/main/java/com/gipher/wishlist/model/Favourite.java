package com.gipher.wishlist.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="favourites")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favourite {

	
	@Id
	private String favId;
	private String username;
	private String emailId;
	private String title;
	private String imageURL;
	private int isSticker;
	
	
}
