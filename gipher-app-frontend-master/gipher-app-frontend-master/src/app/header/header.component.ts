import { Component, OnInit } from '@angular/core';
import { GiphyAPIService } from '../services/giphy-api.service';
import 'bootstrap';
import { RouterService } from '../services/router.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchString: string;
  typeChoice: number = 0;

  categoriesArray: Array<String> = ['Actions', 'Anime', 'Cartoons', 'Emotions', 'Food/Drinks', 'Gaming', 'Holidays/Greetings', 'Memes']
  constructor(private gifApi: GiphyAPIService,
    private routerService: RouterService,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSearchSubmit() {
    this.routerService.routeToSearchResult(this.searchString, this.typeChoice);
  }

  getProfilePic() {
    return sessionStorage.getItem('image');
  }

}
