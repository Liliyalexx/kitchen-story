export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor (id:number, name:string, description = '', price = 0, imageUrl = 'https://thumbor.thedailymeal.com/8y2crmTl4zBDxgHZJc0Lphm2Bdw=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1943277/2108053/Cumin.jpg') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
