import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './core/services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {
  }
  ngOnInit() {
    this.checkIsLoggined();
  }

   private checkIsLoggined() {
    return this.authenticationService.isAuthticated().subscribe(
      isLogined => {
        this.authenticationService.isLoggedIn = isLogined;
      }
      );
  }

  logOut() {
    this.authenticationService.logOut().subscribe(
      data => {
        console.log(data);
        this.authenticationService.isLoggedIn = false;
      },
      err => console.log(err)
    );
  }
}
