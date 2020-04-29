export interface IPerson {
  name: string;
  avatarUrl: string;
}

export interface IEvent {
  date: Date | string;
  filter?: string;
  title: string;
  description: string;
  detailDescription?: string;
  imageUrl: string;
  speakers?: IPerson[];
}

export interface IArticle {
  date: Date | string;
  filter?: string;
  title: string;
  description: string;
  detailDescription?: string;
  imageUrl: string;
  author?: IPerson;
}

export interface IData {
  eventForRegistration: IEvent;
  masterlassEvents: IEvent[];
  meetupEvents: IEvent[];
  mainDigestArticle: IArticle;
  digestArticles: IArticle[];
}

export interface IFilterGroupData {
  id: string;
  data: (IArticle | IEvent)[];
}
