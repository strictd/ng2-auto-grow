import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[autoGrow]'
})

export class AutoGrowDirective {

  constructor(private el: ElementRef) {
      setTimeout(function() {
        let correction = el.nativeElement.offsetHeight - el.nativeElement.clientHeight;
        el.nativeElement.style.height = ((el.nativeElement.scrollHeight - correction) + 10) + 'px';
      }, 0);
  }
  @HostListener('input', ['$event.target']) onMouseEnter(textArea) {
    textArea.style.height = 'auto';

    let correction = textArea.offsetHeight - textArea.clientHeight;
    textArea.style.height = ((textArea.scrollHeight - correction) + 10) + 'px';
  }

}
