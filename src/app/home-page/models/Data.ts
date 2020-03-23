export interface ICard {
  date: Date | string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface IEvent {
  id: string;
  data: ICard[];
}
