import { Injectable } from '@angular/core';
import Amplify, { API, Auth } from 'aws-amplify';
@Injectable({
  providedIn: 'root'
})
export class PartnerInfoService {

  constructor() { }

  async get() {
    let apiName = 'MyAPIGatewayAPI';
    let path = '/partners';
    let myInit = { // OPTIONAL
      headers: {},
      response: false // OPTIONAL (return the entire Axios response object instead of only response.data)
    };
    API.get(apiName, path, myInit).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error.response);
    });
  }
}
