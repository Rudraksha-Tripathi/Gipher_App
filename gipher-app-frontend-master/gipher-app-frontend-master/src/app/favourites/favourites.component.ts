import { Component, OnInit, Input } from '@angular/core';
import { Gif, Giffy } from '../model/Gif';
import { GiphyAPIService } from '../services/giphy-api.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  emailId: string;
  @Input() data: Gif;
  // @Input() data1: Giffy;
  isFav = false;
  index: number;
  arr: Array<any> = [];
  email: string;

  constructor(private gifApi: GiphyAPIService, private authService: AuthService) { }

  ngOnInit() {
   
    this.authService.getUserDetails().subscribe(
      data =>{
        console.log(data.emailId);
        this.gifApi.fetchGifByEmailId(data.emailId);
      }
    )

  }

  onClickFavourite(data: Giffy)
  {
    console.log("aaa");
    this.email = sessionStorage.getItem("key");
    //console.log(this.data.id);
    // this.index=this.gifApi.favourites.findIndex((giffy:Gif)=>giffy.id===data.id);
    this.index = this.gifApi.favourites.findIndex((giffy: Giffy) => giffy.favId === data.favId);
    console.log(this.index);
    var gifData: Giffy = {
      "favId": data.favId,
      "username": data.username,
      "emailId": this.authService.loggedInUser.emailId,
      "title": data.title,
      "imageURL": data.imageURL,
      "isSticker": data.isSticker
    }
    this.gifApi.favourites.splice(this.index, 1);
      this.gifApi.deleteFromFavourites(gifData);
  }
  
}
