import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserModel } from 'src/app/shared/models/UserModel';
import { throwError, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':  'application/json'
     // 'Authorization': 'my-auth-token'
    })
  };

  private url = 'http://localhost:53994/api/User';
  constructor(private http: HttpClient) { }

  addAddress(address) {
    const userData = {
      'Address': [address]
    };
    return this.http.post<UserModel>(this.url, JSON.stringify(userData), this.httpOptions);
 //   .pipe(
  //    catchError(this.handleError('addAddress', address))
  //  );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
