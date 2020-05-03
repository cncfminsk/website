import { Directive, OnInit, Input, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appFlexGrow]",
})
export class FlexGrowDirective implements OnInit {
  @Input("appFlexGrow") dataLength: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "flex-grow",
      this.dataLength < 3 ? 0 : 1
    );
  }
}
