import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appSuperBorder]",
})
export class SuperBorderDirective implements OnInit, OnChanges {
  @Input() appSuperBorder: string | null = null;

  constructor(private $element: ElementRef) {}

  ngOnInit() {
    this.applyBorderColor();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.appSuperBorder = changes.appSuperBorder.currentValue;
    this.applyBorderColor();
  }

  private applyBorderColor() {
    const $div = this.$element.nativeElement;
    $div.style.border = "5px solid " + this.appSuperBorder;
  }
}
