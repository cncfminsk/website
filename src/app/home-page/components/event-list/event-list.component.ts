import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IEvent, IFilterGroupData, IArticle } from "../../../core/models/Data";

const MEETUP_DATA = {
  id: "meetupEvents",
  title: "Встреча",
};

const MASTERCLASS_DATA = {
  id: "masterlassEvents",
  title: "Мастер-класс",
};

const DIGEST_DATA = {
  id: "digestArticles",
  title: "Дайджест",
};

const DEFAULT_STATE = "default";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.less"],
})
export class EventListComponent implements OnInit {
  public meetupTitle: string = MEETUP_DATA.title;
  public masterclassTitle: string = MASTERCLASS_DATA.title;
  public digestTitle: string = DIGEST_DATA.title;

  public filterActive: string = DEFAULT_STATE;

  private initialData$: Observable<IFilterGroupData[]>;
  public meetupData$: Observable<IEvent[]>;
  public masterclassData$: Observable<IEvent[]>;
  public digestData$: Observable<IArticle[]>;
  private defaultData$: Observable<(IArticle | IEvent)[]>;
  public filteredData$: Observable<(IArticle | IEvent)[]>;

  private filterInitialData(
    initialData$: Observable<IFilterGroupData[]>
  ): Observable<IFilterGroupData[]> {
    return initialData$.pipe(
      map((initialData) =>
        initialData.map((eventData) => ({
          id: eventData.id,
          data: eventData.data
            .filter((x) => new Date(x.date).getTime() >= new Date().getTime())
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            ),
        }))
      )
    );
  }

  private getFilterGroupDataById(
    initialData$: Observable<IFilterGroupData[]>,
    id: string
  ): Observable<(IArticle | IEvent)[]> {
    return initialData$.pipe(
      map((initialData) => {
        const [group] = initialData.filter((x) => x.id === id);
        return group ? group["data"] : [];
      })
    );
  }

  private getDataByDefault(
    initialData$: Observable<IFilterGroupData[]>
  ): Observable<(IArticle | IEvent)[]> {
    return initialData$.pipe(
      map((initialData) =>
        initialData
          .map((group) => {
            const [data] = group["data"];
            return data ? data : null;
          })
          .filter((group) => group ?? false)
      )
    );
  }

  private getFilterData(data$: Observable<(IArticle | IEvent)[]>) {
    return data$.pipe(map((data) => data.slice(0, 3)));
  }

  public onFilterData(filter: string): void {
    this.filterActive = this.filterActive === filter ? DEFAULT_STATE : filter;
    switch (this.filterActive) {
      case this.meetupTitle: {
        this.filteredData$ = this.getFilterData(this.meetupData$);
        break;
      }
      case this.masterclassTitle: {
        this.filteredData$ = this.getFilterData(this.masterclassData$);
        break;
      }
      case this.digestTitle: {
        this.filteredData$ = this.getFilterData(this.digestData$);
        break;
      }
      default: {
        this.filteredData$ = this.getFilterData(this.defaultData$);
      }
    }
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.initialData$ = this.filterInitialData(this.dataService.dataForFilter);

    this.meetupData$ = this.getFilterGroupDataById(
      this.initialData$,
      MEETUP_DATA.id
    );
    this.masterclassData$ = this.getFilterGroupDataById(
      this.initialData$,
      MASTERCLASS_DATA.id
    );
    this.digestData$ = this.getFilterGroupDataById(
      this.initialData$,
      DIGEST_DATA.id
    );
    this.defaultData$ = this.getDataByDefault(this.initialData$);

    this.filteredData$ = this.defaultData$;
  }
}
