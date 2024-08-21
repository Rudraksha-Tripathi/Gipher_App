import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gif, Giffy } from '../model/Gif';
import { Comment } from '../model/Comment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class GiphyAPIService {
  baseURL: string;
  apiKey: string;
  selectedGif: Gif;
  trending: Array<Gif>;
  favourites: Array<Giffy>;
  searchedGifs: Array<Gif>;
  recommended: Array<Gif>;
  baseurl: string;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.apiKey = "P2gwfjvjCmIPbZDSbVsJNx4K8ue1XjPH";
    this.trending = [];
    this.searchedGifs = [];
    this.selectedGif = null;
    this.recommended = [];
  }

  initializeAndPush(data: any): Array<Gif> {
    var gifArray: Array<Gif> = [];
    data["data"].forEach(gif => {
      this.selectedGif = new Gif();
      this.selectedGif.id = gif["id"];
      this.selectedGif.username = gif["username"];
      this.selectedGif.title = gif["title"];
      this.selectedGif.isSticker = gif["is_sticker"];
      this.selectedGif.imageURL = gif["images"]["downsized_large"]["url"];

      gifArray.push(this.selectedGif);
    });

    return gifArray;
  }
    
  fetchTrendingGifs(typeChoice: number) {
    if (typeChoice == 0) {
      this.httpClient.get(`http://localhost:8888/v1/gifs/trending?api_key=${this.apiKey}`).subscribe(
        data => {
          this.trending = this.initializeAndPush(data);
          console.log(this.trending);
        },
        error => console.log(error.message)
      );
    } else if (typeChoice == 1) {
      this.httpClient.get(`http://localhost:8888/v1/stickers/trending?api_key=${this.apiKey}`).subscribe(
        data => {
          this.trending = this.initializeAndPush(data);
        },
        error => console.log(error.message)
      );
    }
  }

  fetchSearchedGif(searchString: string, typeChoice: number) {
    if (typeChoice == 0) {
      this.httpClient.get(`http://localhost:8888/v1/gifs/search?api_key=${this.apiKey}&q=${searchString}`).subscribe(
        data => this.searchedGifs = this.initializeAndPush(data),
        error => console.log(error.message)
      );
    } else if (typeChoice == 1) {
      this.httpClient.get(`http://localhost:8888/v1/stickers/search?api_key=${this.apiKey}&q=${searchString}`).subscribe(
        data => this.searchedGifs = this.initializeAndPush(data),
        error => console.log(error.message)
      );
    }
  }

  fetchGifById(gifId: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8888/v1/gifs/${gifId}?api_key=${this.apiKey}`);
  }

  
  fetchAllFavourites() {
    this.httpClient.get<Array<Giffy>>("http://localhost:8888/favourites/getAllFavourites").subscribe(
      data => { this.favourites = data; console.log(this.favourites) },
      error => console.log(error.message)
    );
  }

  addToFavourites(gif: Giffy) {
    console.log(gif);
    this.httpClient.post<Giffy>('http://localhost:8888/favourites/addToFavourites', gif).subscribe(
      data => {
        console.log(data);
        this.fetchGifByEmailId(gif.emailId);
        console.log(this.favourites);
      },
      error => console.log(error.message)
    );
  }
  deleteFromFavourites(gif: Giffy) {
    this.httpClient.delete(`http://localhost:8888/favourites/deleteFromFavourites/${gif.favId}`).subscribe(
      data => this.fetchGifByEmailId(gif.emailId),
      error => console.log(error.message)
    )
  }
  fetchGifByEmailId(emailId: string) {
    this.httpClient.get<any>(`http://localhost:8888/favourites/getAllFavouritesByEmailId/${emailId}`).subscribe(data => {
      console.log(data);
      this.favourites = data;
    })
  }
 
}
