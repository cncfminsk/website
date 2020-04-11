import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "src/app/core/services/data.service";
import { ICard } from "../../../core/models/Data";

@Component({
  selector: "app-registration-card",
  templateUrl: "./registration-card.component.html",
  styleUrls: ["./registration-card.component.less"],
})
export class RegistrationCardComponent implements OnInit {
  public registrationCardData$: Observable<ICard>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.registrationCardData$ = this.dataService.registrationCardData;
  }

  public onRegistration() {
    this.router.navigate(["/"]);
  }
}
