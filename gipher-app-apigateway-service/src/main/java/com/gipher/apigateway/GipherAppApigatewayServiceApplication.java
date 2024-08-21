package com.gipher.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class GipherAppApigatewayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GipherAppApigatewayServiceApplication.class, args);
	}

}
