import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { PartnerCardModel } from 'src/app/shared/models/partnerCardModel';
import { PartnerInfoService } from 'src/app/core/services/partner-info.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  partnerCardDatas: PartnerCardModel[];
  constructor(private partnerInfoService: PartnerInfoService, private http: HttpClient) { }

  ngOnInit() {
    this.partnerInfoService.get().subscribe(
      parternData => {
        this.partnerCardDatas = parternData;
        console.log(this.partnerCardDatas);
      }
    );
  }

  test2() {
    let req = {
      method: 'get',
      url: 'https://www.sephora.fr/p/moroccan-spice---palette-de-fards-a-paupieres-P3397005.html'
    };
    var url = "http://www.whateverorigin.org/get?url=" + encodeURIComponent("https://www.sephora.fr/p/moroccan-spice---palette-de-fards-a-paupieres-P3397005.html");
    const headers = new HttpHeaders().append("Access-Control-Allow-Origin", "http://localhost:4200")
    // .append('Access-Control-Allow-Headers', 'Content-Type').
     .append('Access-Control-Allow-Methods', 'post');
    const options = { headers };

    const headerDict = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.http.request('get', url, requestOptions).pipe(
      catchError(
        err => {
          console.log(err);
          return of();
        }
      )
    ).subscribe(
      data => {
        console.log(data);
      }
    );

  }

  test() {
    Auth.currentUserInfo()
      .then(
        data => console.log(data)
      )
      .catch(err => console.log(err));
  }
}
