import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(this.firebaseAuthChangeListener.bind(this));
  }
  ngOnInit() {
  }

  private firebaseAuthChangeListener(response) {
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }



}
