import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router) { }

  routeToSearchResult(searchString: string, typeChoice: number) {
    this.router.navigate(["search", typeChoice, searchString]);
  }

  routeToTrending() {
    this.router.navigate(["/"]);
  }

  routeToLogin() {
    this.router.navigate(["login"]);
  }

  routeToFacebook(){
  }
}