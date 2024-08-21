import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    'providedIn': 'root'
})
export class TokenInterceptor {
    constructor(public auth: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request);
        // console.log("---------------");
        request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + this.auth.getToken())
        });
        // console.log(request);
        return next.handle(request);
    }

}