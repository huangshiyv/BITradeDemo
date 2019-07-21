import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductInfoService<I> {
  private items: Subject<I>;
  private url = 'http://localhost:53994/api/WebSiteData';
  fromItem: number;
  toItem: number;
  totalItems: number;
  constructor(private http: HttpClient) {
      this.items = new Subject<I>();
  }

  public getItems(): Observable<I> {
    return this.items.asObservable();
  }

  public setItems(newItems: I) {
    this.items.next(newItems);
  }

  getProductByID(searchP: string, pageSize: number, page: number): Observable<I> {
    const fetchUrl = `${this.url}?jsonQuery=${searchP}&pageSize=${pageSize}&page=${page}`;
    return this.http.get<I>(fetchUrl).pipe(
      tap(_ => console.log(`found heroes matching `)),
      catchError(this.handleError<I>('searchHeroes', null))
    );
  }

  getProductById(searchP: string): Observable<I> {
    const fetchUrl = `${this.url}/${searchP}`;
    return this.http.get<I>(fetchUrl).pipe(
      tap(_ => console.log(`found heroes matching `))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
