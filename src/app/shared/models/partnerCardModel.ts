export class PartnerCardModel {
  id: number;
  name: string;
  longDescription: string;
  shorDdescription: string;
  imgUrl: string;
  websiteUrl: string;
  internalWebSiteUrl: string;
  created: Date;
  parameters: Array<Parameter>;
}

export class Parameter {
  name: string;
  value: string;
}
