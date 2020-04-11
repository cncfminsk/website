import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IArticle } from "../../../core/models/Data";

@Component({
  selector: "app-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.less"],
})
export class ArticleListComponent implements OnInit {
  public mainArticleData$: Observable<IArticle>;
  public articlesData$: Observable<IArticle[]>;

  private filterInitialData(
    articlesData$: Observable<IArticle[]>
  ): Observable<IArticle[]> {
    return articlesData$.pipe(
      map((articlesData) =>
        articlesData
          .filter((x) => new Date(x.date).getTime() >= new Date().getTime())
          .sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )
          .slice(0, 3)
      )
    );
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.mainArticleData$ = this.dataService.mainArticleData;
    this.articlesData$ = this.filterInitialData(this.dataService.articlesData);
  }
}
