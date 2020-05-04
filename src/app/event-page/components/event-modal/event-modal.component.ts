import { Component, Output, EventEmitter, Input } from "@angular/core";
import { IEvent } from "src/app/core/models/Data";

@Component({
  selector: "app-event-modal",
  templateUrl: "./event-modal.component.html",
  styleUrls: ["./event-modal.component.less"],
})
export class EventModalComponent {
  @Input() isVisible: boolean;
  @Input() eventData: IEvent;
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter<void>();
}
