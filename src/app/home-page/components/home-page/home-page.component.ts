import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Observable } from "rxjs";
import { LoaderService } from "src/app/core/services/loader.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.less"],
})
export class HomePageComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor(
    private loaderService: LoaderService,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.isLoading$;
  }

  ngAfterViewChecked(): void {
    this.changeDetectionRef.detectChanges();
  }
}
