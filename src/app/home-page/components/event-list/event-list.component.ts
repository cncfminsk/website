import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ICard, IEvent } from "../../models/Data";

const MEETUP_DATA = {
  id: "meetup",
  title: "Встреча"
};

const MASTERCLASS_DATA = {
  id: "masterclass",
  title: "Мастер-класс"
};

const DIGEST_DATA = {
  id: "digest",
  title: "Дайджест"
};

const DEFAULT_STATE = "default";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.less"]
})
export class EventListComponent implements OnInit {
  public meetupTitle: string = MEETUP_DATA.title;
  public masterclassTitle: string = MASTERCLASS_DATA.title;
  public digestTitle: string = DIGEST_DATA.title;

  public filterActive: string = DEFAULT_STATE;

  private eventsData: Observable<IEvent[]>;
  public meetupData: Observable<ICard[]>;
  public masterclassData: Observable<ICard[]>;
  public digestData: Observable<ICard[]>;
  private defaultData: Observable<ICard[]>;
  public filteredData: Observable<ICard[]>;

  private filterInitialData(
    eventsData: Observable<IEvent[]>
  ): Observable<IEvent[]> {
    return eventsData.pipe(
      map(eventsData =>
        eventsData.map(eventData => ({
          id: eventData.id,
          data: eventData.data
            .filter(x => new Date(x.date).getTime() >= new Date().getTime())
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
        }))
      )
    );
  }

  private getEventDataById(
    eventsData: Observable<IEvent[]>,
    id: string
  ): Observable<ICard[]> {
    return eventsData.pipe(
      map(eventsData => {
        const [event] = eventsData.filter(x => x.id === id);
        return event ? event["data"] : [];
      })
    );
  }

  private getEventDataByDefault(
    eventsData: Observable<IEvent[]>
  ): Observable<ICard[]> {
    return eventsData.pipe(
      map(eventsData =>
        eventsData
          .map(eventData => {
            const [data] = eventData["data"];
            return data ? data : null;
          })
          .filter(eventData => eventData ?? false)
      )
    );
  }

  private getFilterData(data: Observable<ICard[]>) {
    return data.pipe(map(data => data.slice(0, 3)));
  }

  public onFilterEventData(filter: string): void {
    this.filterActive = this.filterActive === filter ? DEFAULT_STATE : filter;
    switch (this.filterActive) {
      case this.meetupTitle: {
        this.filteredData = this.getFilterData(this.meetupData);
        break;
      }
      case this.masterclassTitle: {
        this.filteredData = this.getFilterData(this.masterclassData);
        break;
      }
      case this.digestTitle: {
        this.filteredData = this.getFilterData(this.digestData);
        break;
      }
      default: {
        this.filteredData = this.getFilterData(this.defaultData);
      }
    }
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.eventsData = this.filterInitialData(this.dataService.getEventsData());

    this.meetupData = this.getEventDataById(this.eventsData, MEETUP_DATA.id);
    this.masterclassData = this.getEventDataById(
      this.eventsData,
      MASTERCLASS_DATA.id
    );
    this.digestData = this.getEventDataById(this.eventsData, DIGEST_DATA.id);
    this.defaultData = this.getEventDataByDefault(this.eventsData);

    this.filteredData = this.defaultData;
  }
}
