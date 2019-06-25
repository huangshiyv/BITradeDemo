import { Injectable } from '@angular/core';
import Amplify, { API, Auth } from 'aws-amplify';
import { Observable, of, from } from 'rxjs';
import { PartnerCardModel } from 'src/app/shared/models/partnerCardModel';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PartnerInfoService {

  constructor() { }

  get(): Observable<PartnerCardModel[]> {
    const apiName = 'MyAPIGatewayAPI';
    const path = '/partners';
    const myInit = { // OPTIONAL
      headers: {},
      response: false // OPTIONAL (return the entire Axios response object instead of only response.data)
    };
    return from(API.get(apiName, path, myInit))
    .pipe(
      catchError(err => {
        console.log(err.response);
        return of();
      })
    );
  }
}
