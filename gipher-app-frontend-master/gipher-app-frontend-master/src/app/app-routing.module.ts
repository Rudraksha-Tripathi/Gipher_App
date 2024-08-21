import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GifDetailsComponent } from './gif-details/gif-details.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { SearchComponent } from './search/search.component';
// import { RecommendedComponent } from './recommended/recommended.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginRegGuardGuard } from './login-reg-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: TrendingComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginRegGuardGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginRegGuardGuard] },
  { path: 'cardDetails/:id', component: GifDetailsComponent },
  { path: 'category/:categoryName', component: CategoryViewComponent },
  { path: 'search/:typeChoice/:searchString', component: SearchComponent },
  // { path: 'recommended', component: RecommendedComponent }
  { path: 'favourite', component: FavouritesComponent, canActivate: [AuthGuardGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}