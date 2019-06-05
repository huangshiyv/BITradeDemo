import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Observable, of, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  constructor() { }

  login(username: string, password: string) {
    return from(Auth.signIn(username, password));
  }

  logOut() {
    return from(Auth.signOut());
  }

  isAuthticated() {
    return from(Auth.currentAuthenticatedUser()).pipe(
      map(user => {
        if (user) {
          return true;
        }
        return false;
      }),
      catchError(err => {
        return of(false);
      })
    );
  }
}
