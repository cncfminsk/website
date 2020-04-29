import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"],
})
export class LayoutComponent {
  @ViewChild("header", { read: ElementRef }) header: ElementRef;

  public scrollToTop() {
    this.header.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
