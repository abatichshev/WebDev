export class Item {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public rating: number,
    public productLink: string,
    public likes: number = 0 
  ) {}
}
