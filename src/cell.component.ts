import {Component, Input} from 'angular2/core';
import {Field} from './field.interface';

@Component({
    selector: 'dg-cell',
    template: `
        <div class="dg-cell">
            {{value}}
        </div>
    `,
    styles: ['div {display: inline-block; width: 30px; height: 30px;}']
})
export class CellComponent {
    @Input()
    field: string;
    @Input()
    dataRow: any;

    get value() {
        return this.dataRow[this.field];
    }
}