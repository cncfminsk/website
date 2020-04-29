import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import {
  IEvent,
  IArticle,
  IData,
  IFilterGroupData,
} from "src/app/core/models/Data";

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

  get eventForRegistration(): Observable<IEvent> {
    return this.data$.pipe(map((data) => data["eventForRegistration"]));
  }

  get dataForFilter(): Observable<IFilterGroupData[]> {
    return this.data$.pipe(
      map((data) => [
        {
          id: "masterlassEvents",
          data: data["masterlassEvents"],
        },
        {
          id: "meetupEvents",
          data: data["meetupEvents"],
        },
        {
          id: "digestArticles",
          data: data["digestArticles"],
        },
      ])
    );
  }

  get eventsData(): Observable<IEvent[]> {
    return this.data$.pipe(
      map((data) => [...data["masterlassEvents"], ...data["meetupEvents"]])
    );
  }

  get mainDigestArticle(): Observable<IArticle> {
    return this.data$.pipe(map((data) => data["mainDigestArticle"]));
  }

  get digestArticles(): Observable<IArticle[]> {
    return this.data$.pipe(map((data) => data["digestArticles"]));
  }
}
