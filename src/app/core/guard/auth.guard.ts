import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {
      return Auth.currentAuthenticatedUser().then(user => {
        if (user) {
          // logged in so return true
          return resolve(true);
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return resolve(false);
      })
        .catch(
          err => {
            console.log(err);
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return resolve(false);
          }
        );
    });
  }
}
