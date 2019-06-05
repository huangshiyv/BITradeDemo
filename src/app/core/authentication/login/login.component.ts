import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    emailName: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      { label: 'username', type: 'string', key: 'username', required: true, custom: false, displayOrder: 1 },
      { label: 'Password', type: 'password', key: 'password', required: true, custom: false, displayOrder: 2 }
    ]
  };

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.loginForm.controls.emailName.hasError('required') ? 'You must enter a value' :
      this.loginForm.controls.emailName.hasError('email') ? 'Not a valid email' :
        '';
  }
  onSubmitLogin() {
    this.authenticationService.login(this.loginForm.controls.emailName.value,
      this.loginForm.controls.password.value).subscribe(user => {
        if (user) {
          this.authenticationService.isLoggedIn = true;
          this.router.navigate(['']);
        }},
        err => {
          console.log(err);}
      );
  }

}
