import { Input, Component } from "@angular/core";

@Component({
  selector: "app-arrow-right-icon",
  templateUrl: "./arrow-right-icon.component.html",
  styleUrls: ["./arrow-right-icon.component.less"]
})
export class ArrowRightIconComponent {
  @Input() type: string = "dark";
}
