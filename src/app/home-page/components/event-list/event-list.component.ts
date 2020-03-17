import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/core/services/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.less"]
})
export class EventListComponent implements OnInit {
  public reviewEventData: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.reviewEventData = this.dataService.getReviewEventData();
  }
}
