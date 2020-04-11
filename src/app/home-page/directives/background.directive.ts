import { Directive, ElementRef, Renderer2, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appBackground]",
})
export class BackgroundDirective implements OnInit {
  @Input("appBackground") imageUrl: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background",
      `linear-gradient(rgba(71, 82, 158, 0.65) 0%, rgba(71, 82, 158, 0.65) 100%), url(${this.imageUrl})`
    );
  }
}
