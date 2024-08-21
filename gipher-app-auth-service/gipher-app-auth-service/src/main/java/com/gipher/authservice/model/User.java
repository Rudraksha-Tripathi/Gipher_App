package com.gipher.authservice.model;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

	@Entity
	@Table(name="user")
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public class User{
		
		@Id
		private String emailId;
		private String userName;
		private String password;
		private Date date;
		private String gender;
		private String mobileNumber;
		@Column(name="image", length=1000000,columnDefinition = "mediumtext")
		private String image;
		
		
		
		
		public java.sql.Date parsedDate(String date) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			java.util.Date d = null;
			try {
				d = sdf.parse(date);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			java.sql.Date pDate = new java.sql.Date(d.getTime());
			return pDate;
		}




		public String getEmailId() {
			return emailId;
		}




		public void setEmailId(String emailId) {
			this.emailId = emailId;
		}




		public String getUserName() {
			return userName;
		}




		public void setUserName(String userName) {
			this.userName = userName;
		}




		public String getPassword() {
			return password;
		}




		public void setPassword(String password) {
			this.password = password;
		}




		public Date getDate() {
			return date;
		}




		public void setDate(Date date) {
			this.date = date;
		}




		public String getGender() {
			return gender;
		}




		public void setGender(String gender) {
			this.gender = gender;
		}




		public String getMobileNumber() {
			return mobileNumber;
		}




		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}




		public String getImage() {
			return image;
		}




		public void setImage(String image) {
			this.image = image;
		}

		

}
