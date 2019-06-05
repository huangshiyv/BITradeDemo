import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { PartnerCardModel } from 'src/app/shared/models/partnerCardModel';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  constructor() { }
  test1: PartnerCardModel = {
    id: 1,
    name: 'test',
    longDescription: 'Weve shot a new video, showing how you can get \
    even better results from Photo Negative Scanner by using a dedicated digital camera.',
    shorDdescription: 'Digitize negatives using a DSLR or mirrorless camera',
    imgUrl: '../../../../../assets/images/blog_thumb/aarhus_taxa_logo.jpg',
    websiteUrl: 'www.google.fr',
    internalWebSiteUrl: 'string',
    created: null,
    parameters: []
  };
  ngOnInit() {

  }

  test() {
    Auth.currentUserInfo()
      .then(
        data => console.log(data)
      )
      .catch(err => console.log(err));


  }
}
