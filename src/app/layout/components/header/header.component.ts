import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public tabItems = [
    {
      label: "Главная",
      route: ["/"],
    },
    {
      label: "События",
      route: ["/events"],
    },
    {
      label: "Партнеры",
      route: ["/"],
    },
    {
      label: "Докладчики",
      route: ["/"],
    },
  ];
}
