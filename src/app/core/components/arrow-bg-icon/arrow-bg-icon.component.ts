import { Input, Component } from "@angular/core";

@Component({
  selector: "app-arrow-bg-icon",
  templateUrl: "./arrow-bg-icon.component.html",
  styleUrls: ["./arrow-bg-icon.component.less"]
})
export class ArrowBgIconComponent {
  @Input() direction: string = "right";
}
