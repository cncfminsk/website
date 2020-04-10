import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { ICard, IEvent, IArticle, IData } from "src/app/core/models/Data";

const CACHE_SIZE = 1;

@Injectable({
  providedIn: "root",
})
export class DataService {
  private data$: Observable<IData>;

  constructor(private http: HttpClient) {
    this.data$ = this.http
      .get<IData>("/assets/data.json")
      .pipe(shareReplay(CACHE_SIZE));
  }

  get registrationCardData(): Observable<ICard> {
    return this.data$.pipe(map((data) => data["registrationCardData"]));
  }

  get eventsData(): Observable<IEvent[]> {
    return this.data$.pipe(map((data) => data["eventsData"]));
  }

  get mainArticleData(): Observable<IArticle> {
    return this.data$.pipe(map((data) => data["mainArticleData"]));
  }

  get articlesData(): Observable<IArticle[]> {
    return this.data$.pipe(map((data) => data["articlesData"]));
  }
}
