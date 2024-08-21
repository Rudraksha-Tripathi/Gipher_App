import { Component, OnInit } from '@angular/core';
import { GiphyAPIService } from '../services/giphy-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  typeChoice = 0;
  searchString: string;
  constructor(private gifApi: GiphyAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.searchString = this.activatedRoute.snapshot.params['searchString'];
    this.typeChoice = this.activatedRoute.snapshot.params['typeChoice']
    this.gifApi.fetchSearchedGif(this.searchString, this.typeChoice);

    this.activatedRoute.params.subscribe(params => {
      this.searchString = params['searchString'];
      this.typeChoice = params['typeChoice'];
      this.gifApi.fetchSearchedGif(this.searchString, this.typeChoice);
    })

  }

  onFilter() {
    this.searchString = this.activatedRoute.snapshot.params['searchString'];
    this.gifApi.fetchSearchedGif(this.searchString, this.typeChoice);
  }
}
