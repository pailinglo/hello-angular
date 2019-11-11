import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    this.isLoggedIn = true;
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)  //for some reason, this line doesn't set isLoggedIn true successfully.
    );

  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
