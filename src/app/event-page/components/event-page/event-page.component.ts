import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IArticle } from "../../../core/models/Data";

@Component({
  selector: "app-event-page",
  templateUrl: "./event-page.component.html",
  styleUrls: ["./event-page.component.less"],
})
export class EventPageComponent implements OnInit {
  public articlesData$: Observable<IArticle[]>;
  public firstColumnData$: Observable<IArticle[]>;
  public secondColumnData$: Observable<IArticle[]>;

  private filterInitialData(
    articlesData$: Observable<IArticle[]>
  ): Observable<IArticle[]> {
    return articlesData$.pipe(
      map((articlesData) =>
        articlesData
          .filter((x) => new Date(x.date).getTime() < new Date().getTime())
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
      )
    );
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.articlesData$ = this.filterInitialData(this.dataService.articlesData);
    this.firstColumnData$ = this.articlesData$.pipe(
      map((articlesData) =>
        articlesData.slice(0, Math.ceil(articlesData.length / 2))
      )
    );
    this.secondColumnData$ = this.articlesData$.pipe(
      map((articlesData) =>
        articlesData.slice(Math.ceil(articlesData.length / 2))
      )
    );
  }
}
