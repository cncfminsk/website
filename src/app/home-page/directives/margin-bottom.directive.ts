import { Directive, Input, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: "[appMarginBottom]",
})
export class MarginBottomDirective implements OnInit {
  @Input("appMarginBottom") dataLength: number;
  @Input() index: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "margin-bottom",
      this.dataLength < 3 && this.index === 0 ? "3rem" : 0
    );
  }
}
