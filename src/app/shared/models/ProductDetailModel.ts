export class ProductDetailModel {
  Id: number;
  siteName: string;
  ProductBrandName: string;
  ProductRangeName: string;
  category: string;
  currency: string;
  hashCode: string;
  oldPrice: number;
  price: number;
  subCategory: string;
  productName: string;
  originalUrl: string;
  longDesc: Description;
  imgs: Imgs;
  quantity: number;
}

class Description {
  desc: string;
  integrents: string;
  langCode: string;
}

class Imgs {
  galleryImgs: Array<string>;
  galleryImgsThumb: Array<string>;
  primaryImg: string;
}
