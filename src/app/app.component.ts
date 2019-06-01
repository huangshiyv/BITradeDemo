import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BITrade';
  signedIn: boolean;
    user: any;
    greeting: string;
  constructor(private amplifyService: AmplifyService, private router: Router) {
      this.amplifyService.authStateChange$
      .subscribe(authState => {
          this.signedIn = authState.state === 'signedIn';
          if (!authState.user) {
              this.user = null;
          } else {
              this.user = authState.user;
              this.greeting = 'Hello ' + this.user.username;
              this.router.navigate(['']);
          }
    });
  }
  logOut() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

}
