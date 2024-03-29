import { Component } from '@angular/core';
import { NgbAlertModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngbd-nav-keep',
    standalone: true,
    imports: [ NgbNavModule, NgbAlertModule, CommonModule ],
    templateUrl: './nav-keep-content.html',
})
export class NgbdNavKeep {
    active = 1;
}
