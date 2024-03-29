import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'ngbd-datepicker-basic',
    standalone: true,
    imports: [ CommonModule, FormsModule, NgbDatepickerModule],
    templateUrl: './datepicker-basic.html',
})
export class NgbdDatepickerBasic {
    model!: NgbDateStruct;
    date!: { year: number; month: number };

    constructor(private calendar: NgbCalendar) {}

    selectToday() {
        this.model = this.calendar.getToday();
    }
}
