import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  genderForm: FormGroup;
  emailId: FormControl;
  userName: FormControl;
  password: FormControl;
  date: FormControl;
  gender: FormControl;
  mobileNumber: FormControl;
  image: FormControl;
  submitMessage: string;
  imageURL: string;
  passwordOriginal: string;
  confirmPassword: string;

  constructor(private a: AuthService, private routerService: RouterService) { }
  fileSelected(event) {
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
      this.imageURL = reader.result.toString();
      console.log(this.imageURL);
    })
  }

  ngOnInit() {
    this.emailId = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      this.userName = new FormControl('', [Validators.required, Validators.minLength(5)]),
      this.password = new FormControl('', [Validators.required, Validators.minLength(5)]),
      this.date = new FormControl('', Validators.required),
      this.mobileNumber = new FormControl('', Validators.required),
      this.gender = new FormControl('', Validators.required),
      this.image = new FormControl(''),

      this.registrationForm = new FormGroup({
        emailId: this.emailId,
        userName: this.userName,
        password: this.password,
        date: this.date,
        mobileNumber: this.mobileNumber,
        gender: this.gender,
        image: this.image
      });
  }
  
  registerSubmit() {
    console.log(this.registrationForm.value);
    // console.log(this.genderForm.value);
    var emailId = this.registrationForm.get("emailId").value;
    var password = this.registrationForm.get("password").value;
    var userName = this.registrationForm.get("userName").value;
    var date = this.registrationForm.get("date").value;
    var mobileNumber = this.registrationForm.get("mobileNumber").value;
    var gender = this.registrationForm.get("gender").value;
    var img = this.imageURL;
    // var image = this.registrationForm.get("image");
    //this.register.image = this.imageURL;
    var user = {
      "emailId": emailId,
      "password": password,
      "userName": userName,
      "date": date,
      "mobileNumber": mobileNumber,
      "gender": gender,
      "image": img,
    }
    this.a.registerUser(user);
    this.routerService.routeToLogin();
  }
}
