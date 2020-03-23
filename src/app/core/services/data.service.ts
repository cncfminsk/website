import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ICard, IEvent } from "src/app/home-page/models/Data";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getRegistrationCardData(): Observable<ICard> {
    return this.http
      .get("/assets/data.json")
      .pipe(map(data => data["registrationCardData"]));
  }

  public getEventsData(): Observable<IEvent[]> {
    return this.http
      .get("/assets/data.json")
      .pipe(map(data => data["eventsData"]));
  }
}