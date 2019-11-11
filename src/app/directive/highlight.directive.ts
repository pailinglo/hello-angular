import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color:string = "yellow";

  constructor(private element:ElementRef) {
    
  }

  // ngOnInit(){
  //   console.log("color:"+this.color);
  //   this.element.nativeElement.style.backgroundColor = this.color;
  //   console.log(this.element);
  // }

  @HostListener('mouseenter')
  addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave')
  removeHighlight(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
