import { Directive, OnInit, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { };

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
  

}
