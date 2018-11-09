import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[bold]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective{

    constructor(private element: ElementRef, private renderer: Renderer2){

        this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    }

    onMouseEnter(){
        //this.setFontWeight("bold");
        this.setFontWeight("#f0f0f0");
    }
    onMouseLeave(){
        this.setFontWeight("none");
    }
    private setFontWeight(val: string) {
        //this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
        this.renderer.setStyle(this.element.nativeElement, "background", val);
    }
}
