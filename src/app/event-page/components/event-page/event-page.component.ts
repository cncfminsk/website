import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IEvent } from "../../../core/models/Data";

@Component({
  selector: "app-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"],
})
export class EventPageComponent implements OnInit {
  private eventsData$: Observable<IEvent[]>;

  public firstColumnData$: Observable<IEvent[]>;
  public secondColumnData$: Observable<IEvent[]>;

  private filterInitialData(
    eventsData$: Observable<IEvent[]>
  ): Observable<IEvent[]> {
    return eventsData$.pipe(
      map((eventsData) =>
        eventsData
          .filter((x) => new Date(x.date).getTime() < new Date().getTime())
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
      )
    );
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.eventsData$ = this.filterInitialData(this.dataService.eventsData);

    this.firstColumnData$ = this.eventsData$.pipe(
      map((eventsData) => eventsData.slice(0, Math.ceil(eventsData.length / 2)))
    );
    this.secondColumnData$ = this.eventsData$.pipe(
      map((eventsData) => eventsData.slice(Math.ceil(eventsData.length / 2)))
    );
  }
}
