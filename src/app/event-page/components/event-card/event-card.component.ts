import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  HostListener,
} from "@angular/core";
import { IEvent } from "../../../core/models/Data";

const ELLIPSIS_WIDTH = 20;
const AUTHOR_LIST_VIEW_ROWS = 2;

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.less"],
})
export class EventCardComponent implements AfterViewInit {
  @Input() eventData: IEvent;

  @HostListener("window:resize", ["$event.target"])
  onResize() {
    this.updateEllipsisPosition();
  }

  @ViewChild("authorList", { read: ElementRef }) authorList: ElementRef;
  @ViewChild("ellipsisTemplate") ellipsisTemplate: TemplateRef<any>;
  @ViewChildren("ellipsisContainer", { read: ViewContainerRef })
  ellipsisContainer: QueryList<ViewContainerRef>;

  private currentIndex: number = 0;

  private findLastVisibleElementIndex(
    container: ElementRef,
    currentIndex: number
  ): number {
    let containerScrollHeight = container.nativeElement.scrollHeight;
    let containerClientHeight = container.nativeElement.clientHeight;
    let containerWidth = container.nativeElement.getBoundingClientRect().width;

    if (containerScrollHeight === containerClientHeight) return -1;

    const containerNodesWidth = [...container.nativeElement.children].map(
      (item) => {
        return item.getBoundingClientRect().width;
      }
    );

    if (currentIndex > 0) {
      containerNodesWidth.splice(currentIndex + 1, 1);
    }

    let accumulatedWidthSum = 0;
    let currentContainerRow = 1;

    for (let i = 0; i < containerNodesWidth.length; i++) {
      if (
        accumulatedWidthSum +
          containerNodesWidth[i] +
          containerNodesWidth[i + 1] >
        containerWidth
      ) {
        if (currentContainerRow < AUTHOR_LIST_VIEW_ROWS) {
          currentContainerRow += 1;
          accumulatedWidthSum = 0;
        } else {
          return accumulatedWidthSum + containerNodesWidth[i] + ELLIPSIS_WIDTH <
            containerWidth
            ? i
            : i - 1;
        }
      } else {
        accumulatedWidthSum += containerNodesWidth[i];
      }
    }

    return -1;
  }

  private updateEllipsisPosition(): void {
    setTimeout(() => {
      const index = this.findLastVisibleElementIndex(
        this.authorList,
        this.currentIndex
      );

      if (index === this.currentIndex) return;

      const ellipsisContainer = this.ellipsisContainer.toArray();

      if (ellipsisContainer[this.currentIndex].get(0)) {
        ellipsisContainer[this.currentIndex].remove(0);
      }

      if (index === -1) {
        this.currentIndex = 0;
        return;
      }

      ellipsisContainer[index].insert(
        this.ellipsisTemplate.createEmbeddedView(this.ellipsisTemplate)
      );

      this.currentIndex = index;
    }, 100);
  }

  ngAfterViewInit() {
    this.updateEllipsisPosition();
  }
}
