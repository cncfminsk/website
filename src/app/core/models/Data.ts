export interface IPerson {
  name: string;
  avatarUrl: string;
  company?: string;
  position?: string;
}

export interface ITopic {
  title: string;
  speaker: IPerson;
  links?: {
    video: string;
    photo: string;
    presentation: string;
  };
}

export interface IEvent {
  date: Date | string;
  filter?: string;
  title: string;
  imageUrl: string;
  briefDescription?: string;
  detailDescription?: string;
  topics?: ITopic[];
}

export interface IArticle {
  date: Date | string;
  filter?: string;
  title: string;
  imageUrl: string;
  briefDescription?: string;
  detailDescription?: string;
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
