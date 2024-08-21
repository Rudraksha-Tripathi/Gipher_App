import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GiphyAPIService } from '../services/giphy-api.service';
import { Comment } from '../model/Comment';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  isInEditMode = false;
  mypic: string;
  userProfile: FormGroup;
  userName: FormControl;
  mobileNumber: FormControl;
  commentsArray: Array<Comment>;
  imageURL: string;

  constructor(private authService: AuthService, private gifService: GiphyAPIService, private routerService: RouterService) {
    this.user = new User();
  }

  ngOnInit() {
    // this.gifService.fetchCommentsByUserEmail().subscribe(
    //   comments => this.commentsArray = comments,
    //   error => console.log(error.message)
    // )
    this.getProfilePic();
    // var emailId = sessionStorage.getItem("loggedInEmail");
    this.authService.getUserDetails().subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.mobileNumber = new FormControl(this.user.mobileNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        this.userName = new FormControl(this.user.userName, [Validators.required, Validators.minLength(5)]);
        // this.mypic = data.image;
        this.userProfile = new FormGroup({
          userName: this.userName,
          mobileNumber: this.mobileNumber,
        });
      },
      error => {
        console.log(error.message)
      });

  }

  onChangeState() {
    this.isInEditMode = !this.isInEditMode;
    console.log(this.isInEditMode);
  }

  getProfilePic() {
    this.mypic = sessionStorage.getItem('image');
  }

  saveEditedDetails() {
    console.log(this.user.mobileNumber);
    console.log(this.mobileNumber.value);
    if (this.user.mobileNumber == null) {
      this.user.mobileNumber = this.mobileNumber.value;
    }
    else {
      this.user.mobileNumber = this.userProfile.get("mobileNumber").value;
    }
    this.user.userName = this.userProfile.get("userName").value;

    this.authService.updateUser(this.user);
    this.isInEditMode = false;
  }
  changeProfilePic(event: any) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event => {
      this.imageURL = reader.result.toString();
      this.user.image = this.imageURL;
      this.authService.updateUser(this.user);
      sessionStorage.removeItem('image');
      sessionStorage.setItem('image', this.imageURL);
      this.getProfilePic();
    })
  }
  deleteUser() {
    this.authService.deleteUser().subscribe(
      msg => {

      },
      error => {
        console.log("Successfully deleted user!")
        sessionStorage.clear();
        this.routerService.routeToTrending();
      }
    );
  }
}