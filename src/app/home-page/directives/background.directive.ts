import { Directive, ElementRef, Renderer2, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appBackground]",
})
export class BackgroundDirective implements OnInit {
  @Input("appBackground") imageUrl: string;
  @Input() gradientColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-image",
      `${
        this.gradientColor
          ? `linear-gradient(${this.gradientColor} 0%, ${this.gradientColor} 100%),`
          : ""
      }
      url(${this.imageUrl})`
    );
  }
}
