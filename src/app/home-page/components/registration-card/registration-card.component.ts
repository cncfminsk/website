import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "src/app/core/services/data.service";

@Component({
  selector: "app-registration-card",
  templateUrl: "./registration-card.component.html",
  styleUrls: ["./registration-card.component.less"]
})
export class RegistrationCardComponent implements OnInit {
  public registrationCardData: Observable<any>;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.registrationCardData = this.dataService.getRegistrationCardData();
  }

  public onRegistration() {
    this.router.navigate(["/"]);
  }
}
