import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[productHighlight]'
})

export class ProductHighlightDirective {
    constructor(private el: ElementRef) { }
    @Input('productHighlight') availableQuantity:Number ;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    
    private highlight(color: string) {
        if(this.availableQuantity > 0) {
            this.el.nativeElement.style.backgroundColor = color;
        }
    }
}