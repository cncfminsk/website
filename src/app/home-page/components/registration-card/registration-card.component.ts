import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "src/app/core/services/data.service";
import { IEvent } from "../../../core/models/Data";

@Component({
  selector: "app-registration-card",
  templateUrl: "./registration-card.component.html",
  styleUrls: ["./registration-card.component.less"],
})
export class RegistrationCardComponent implements OnInit {
  public eventForRegistration$: Observable<IEvent>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.eventForRegistration$ = this.dataService.eventForRegistration;
  }

  public onRegistration() {
    this.router.navigate(["/"]);
  }
}
