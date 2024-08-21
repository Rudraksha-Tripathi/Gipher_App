import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GiphyAPIService } from '../services/giphy-api.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {
  category: string;

  constructor(private activatedRoute: ActivatedRoute, private gifApi: GiphyAPIService) {
  }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.params['categoryName'];
    this.gifApi.fetchSearchedGif(this.category, 0);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.category = params['categoryName'];
        this.gifApi.fetchSearchedGif(this.category, 0);
      }
    );
  }

}
