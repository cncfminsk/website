import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent {
  public tabItems = [
    {
      label: "Главная",
      route: ["/"]
    },
    {
      label: "События",
      route: ["/"]
    },
    {
      label: "Партнеры",
      route: ["/"]
    },
    {
      label: "Докладчики",
      route: ["/"]
    }
  ];
}
