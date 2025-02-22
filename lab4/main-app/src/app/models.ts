export class Item {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public imageUrl: string,
    public rating: number,
    public productLink: string, // Исправлено название
    public likes: number = 0 // Добавлено свойство likes
  ) {}
}
