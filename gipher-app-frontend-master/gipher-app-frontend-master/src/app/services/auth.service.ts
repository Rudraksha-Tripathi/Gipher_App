import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLSearchParams } from 'url';
import { User } from '../model/User';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  baseurl: string;
  loggedInUser: User;
  errMessage: string;

  ngOnInit(): void {

  }
  constructor(private httpClient: HttpClient, private routerService: RouterService) {
    this.baseurl = "http://localhost:8888/user";
    this.errMessage = '';
  }

  isAuthenticated() {
    if (sessionStorage.getItem("token"))
      return true;
    else return false;
  }

  isUserAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        if (sessionStorage.getItem('token')) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    );
    return promise;
  }

  getAuth(email, password) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    this.httpClient.post(`${this.baseurl}/loginUser`, formData)
      .subscribe(data => {
        console.log("asdsad");
        
        console.log(data);
        sessionStorage.setItem("token", data['token']);
        sessionStorage.setItem("image", data['image']);
        this.getUserData();
        this.routerService.routeToTrending();
      },
        error => {
          console.log("ereoroeoreoroeor");
          
          this.errMessage = 'Wrong Username & Password combination'
        }
      );
  }

  registerUser(user) {
    console.log(user);
    this.httpClient.post(`${this.baseurl}/addNewUser`, user, ({ responseType: "text" }))
      .subscribe(data => { console.log("successfully registered") },
        error => { console.log("Registeration Failed!") }
      );
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  logoutUser() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('image');
    this.routerService.routeToTrending();
  }

  getUserData() {
    this.httpClient.get<User>(`${this.baseurl}/findUserByEmail/${this.getToken()}`).subscribe(
      user => { this.loggedInUser = user; console.log(this.loggedInUser) },
      error => console.log(error.message)
    );
  }

  getUserDetails(): Observable<User> {
    return this.httpClient.get<User>(`${this.baseurl}/findUserByEmail/${this.getToken()}`);
  }
  updateUser(user) {
    this.httpClient.put<User>('http://localhost:8888/user/updateUser', user)
      .subscribe(data => {
        console.log(data);
        //this.router.routeToTrending();
      }, error => {
        console.log(error.message)
      }
      );
  }
  deleteUser(): Observable<string> {
    return this.httpClient.delete<string>(`http://localhost:8888/user/deleteUser/${this.getToken()}`);
    // this.logoutUser();
  }
}