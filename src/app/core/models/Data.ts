export interface ICard {
  date: Date | string;
  title: string;
  description: string;
  detailDescription?: string;
  imageUrl: string;
}

export interface IEvent {
  id: string;
  data: ICard[];
}

export interface IArticle {
  date: Date | string;
  title: string;
  imageUrl: string;
  author: string;
  avatarUrl: string;
}

export interface IData {
  registrationCardData: ICard;
  eventsData: IEvent[];
  mainArticleData: IArticle;
  articlesData: IArticle[];
}
