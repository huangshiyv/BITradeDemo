import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailName: string;
  password: string;
  email = new FormControl('', [Validators.required, Validators.email]);

   signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      {label: 'username', type: 'string', key: 'username', required: true, custom: false, displayOrder: 1},
      {label: 'Password', type: 'password',  key: 'password', required: true, custom: false, displayOrder: 2}
    ]
  };

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  login() {
    if (this.email.invalid) {
      return;
    }
    this.authenticationService.login(this.emailName, this.password,
      (cogUser) => {
        if (cogUser != null) {
          this.router.navigate(['']);
        }
      },
      (errorMsg) => {
        alert(errorMsg);
      }
    );
  }

}
