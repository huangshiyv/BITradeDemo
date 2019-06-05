import { Component, OnInit, Input} from '@angular/core';
import { PartnerCardModel } from '../../models/partnerCardModel';

@Component({
  selector: 'app-partner-website-card',
  templateUrl: './partner-website-card.component.html',
  styleUrls: ['./partner-website-card.component.css']
})
export class PartnerWebsiteCardComponent implements OnInit {

  @Input() partnerCardInfo: PartnerCardModel;
  constructor() { }

  ngOnInit() {
  }

}
