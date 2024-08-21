import { Component, OnInit } from '@angular/core';
import { GiphyAPIService } from '../services/giphy-api.service';
import 'bootstrap';
import { Gif } from '../model/Gif';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  typeChoice = 0;

  constructor(private gifApi: GiphyAPIService, private authService: AuthService) {
  }

  ngOnInit() {
    this.gifApi.fetchTrendingGifs(this.typeChoice);
    // if (this.authService.isAuthenticated())
    //   this.gifApi.fetchGifByEmailId(this.authService.loggedInUser.emailId);
  }

  onFilter() {
    this.gifApi.fetchTrendingGifs(this.typeChoice);
  }
}
