import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { RouterService } from './services/router.service';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class LoginRegGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private routerService: RouterService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserAuthenticated().then(
      authenticated => {
        this.routerService.routeToTrending();
        return false;
      }, reject => {
        return true;
      }
    );
  }

}
