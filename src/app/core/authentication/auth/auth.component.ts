import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

   signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
      {label: 'username', type: 'string', key: 'username', required: true, custom: false, displayOrder: 1},
      {label: 'Password', type: 'password',  key: 'password', required: true, custom: false, displayOrder: 2}
    ]
  };

  constructor() {
   }

  ngOnInit() {
  }

}
