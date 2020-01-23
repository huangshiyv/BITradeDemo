import { Injectable } from '@angular/core';
import { CategoriesSideBarModel } from 'src/app/shared/models/CategoriesSideBarModel';

import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  cartegorySidebarList: CategoriesSideBarModel[];
  constructor(private http: HttpClient) {
  }
//  private url = 'http://localhost:53994/api/WebSiteData/Category';
  private url = 'https://tiwebsiteapi.azurewebsites.net/api/WebSiteData/Category';
  getCategorySideBarList(websiteName = '') {
    const fetchUrl = `${this.url}?name=${websiteName}`;
    return this.http.get<CategoriesSideBarModel[]>(fetchUrl).pipe(
      tap(_ => console.log(`found category`))
    //  catchError(this.handleError<I[]>('searchHeroes', null))
    );
  }
}
