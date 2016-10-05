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

  ngAfterContentChecked() {
    this.el.nativeElement.style.height = 'auto';
    
    let correction = this.el.nativeElement.offsetHeight - this.el.nativeElement.clientHeight;
    this.el.nativeElement.style.height = ((this.el.nativeElement.scrollHeight - correction)) + 'px';
  }

}
