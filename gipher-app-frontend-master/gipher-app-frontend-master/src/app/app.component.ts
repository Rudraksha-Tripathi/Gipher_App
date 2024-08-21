import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { GiphyAPIService } from './services/giphy-api.service';
import { IfStmt } from '@angular/compiler';
import { RouterService } from './services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private gifApi: GiphyAPIService, private routerService: RouterService) { }
  ngOnInit():
    void {
    this.gifApi.fetchAllFavourites();
    if (this.authService.isAuthenticated()) {
      this.authService.getUserData();
      // this.gifApi.fetchAllFavourites();

    }
  }
}
