package com.gipher.authservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.servlet.Filter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gipher.authservice.util.AuthFilter;

@SpringBootApplication
@EnableEurekaClient
@ComponentScan(basePackages = {"com.gipher.authservice.controller","com.gipher.authservice.service"})
public class GipherAppAuthServiceApplication {

	@Bean
	public FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean =
				new FilterRegistrationBean<Filter>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/user/authenticate/*");
		return bean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(GipherAppAuthServiceApplication.class, args);
	}
	
	@RequestMapping("/t")
	public String hi() {
		return "hii";
	}

}
