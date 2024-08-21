package com.gipher.wishlist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class GipherAppWishlistServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GipherAppWishlistServiceApplication.class, args);
	}

}
