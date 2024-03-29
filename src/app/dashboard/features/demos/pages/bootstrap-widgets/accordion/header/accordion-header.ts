import { Component, ViewEncapsulation } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngbd-accordion-header',
    standalone: true,
    imports: [ NgbAccordionModule, CommonModule ],
    templateUrl: './accordion-header.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .card.disabled {
                opacity: 0.5;
            }
            .custom-header::after {
                content: none;
            }
        `,
    ],
})
export class NgbdAccordionHeader {
    disabled = false;
}
