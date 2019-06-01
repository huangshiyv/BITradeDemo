import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test() {
    Auth.currentSession()
      .then(
        data => console.log(data)
        )
      .catch(err => console.log(err));


  }
}
