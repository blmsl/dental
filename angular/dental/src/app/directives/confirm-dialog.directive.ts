import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmDialog]'
})
export class ConfirmDialogDirective {

  @HostListener('click', ['$event'])

  confirmFirst(event: Event) {
    return confirm('Are you sure you want to do this?');
  }

}
