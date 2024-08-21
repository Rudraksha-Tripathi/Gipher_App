import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { GiphyAPIService } from '../services/giphy-api.service';
import { Gif, Giffy } from '../model/Gif';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: Gif;
  @Input() data1: Giffy;
  email: string;
  index: number;
  recommendedString = "Recommend";
  userEmail: string;
  constructor(private gifApi: GiphyAPIService, private activatedRoute: ActivatedRoute, private authService: AuthService, private routerService: RouterService) {

  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.authService.getUserDetails().subscribe(
        user => {
          this.gifApi.recommended.forEach(gif => {
            if (gif.id === this.data.id) {
              var index = gif.recommended.findIndex(email => email === user.emailId);
              if (index === -1) {
                this.recommendedString = "Recommend";
              } else {
                this.recommendedString = "Unrecommend";
              }
            }
          }
          );
        }
      );
    }
  }

  // fetchGif(fetchedGif: Gif) {
  //   var flag = fetchedGif.recommended.findIndex(email => email === this.authService.loggedInUser.emailId)
  //   if (flag === -1) {
  //     fetchedGif.recommended.push(this.authService.loggedInUser.emailId);
  //     this.gifApi.addRecommendations(fetchedGif).subscribe(
  //       data => this.gifApi.fetchAllRecommended(),
  //       error => console.log(error.message)
  //     );
  //     this.recommendedString = "Unrecommend"
  //   } else {
  //     fetchedGif.recommended.splice(flag, 1);
  //     if (fetchedGif.recommended.length === 0) {
  //       this.gifApi.deleteRecommendedByGifId(fetchedGif.id).subscribe(
  //         data => this.gifApi.fetchAllRecommended(),
  //         error => console.log(error.message)
  //       )
  //     }
  //     this.recommendedString = "Recommend";
  //   }
  // }
  // onRecommend() {
  //   var fetchedGif: Gif = this.data;
  //   this.gifApi.fetchRecommendedByGifId(this.data.id).subscribe(
  //     data => {
  //       fetchedGif = data;
  //       this.fetchGif(fetchedGif);
  //     }, error => {
  //       console.log(error.message);
  //       this.fetchGif(fetchedGif);
  //     }
  //   )
  // }

  onClickFavourite() {
    if (this.authService.isAuthenticated()) {
      this.index = this.gifApi.favourites.findIndex((giffy: Giffy) => giffy.favId == this.data.id);

      var gifData: Giffy = {
        "favId": this.data.id,
        "username": this.data.username,
        "emailId": this.authService.loggedInUser.emailId,
        "title": this.data.title,
        "imageURL": this.data.imageURL,
        "isSticker": this.data.isSticker
      }
      console.log(gifData.imageURL);
      if (this.index == -1) {
        this.gifApi.addToFavourites(gifData);

        this.gifApi.favourites.forEach((giffy: Giffy) => {
        })
      }
      else {
        this.gifApi.favourites.splice(
          this.gifApi.favourites.findIndex((giffy: Giffy) => giffy.favId === this.data.id), 1);
        this.gifApi.deleteFromFavourites(gifData);
      }
    }
    else {
      this.routerService.routeToLogin();
    }
  }
  onCheckFavourites() {
    if (this.authService.isAuthenticated()) {
      if (this.gifApi.favourites.findIndex((giffy: Giffy) => this.data.id == giffy.favId) !== -1) {
        return true;
      }
      return false;
    }
  }
}
