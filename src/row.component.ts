import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {ColumnDefinition} from './column-definition.interface';
import {CellComponent} from './cell.component';

@Component({
    selector: 'dg-row',
    template: `
        <div class="dg-row">
            <dg-cell *ngFor="#column of columns"
                     [dataRow]="dataRow"
                     [field]="column.field"
                     (click)="onCellClick($event)"></dg-cell>
        </div>
    `,
    directives: [CellComponent]
})
export class RowComponent {
    @Input()
    dataRow: any;
    @Input()
    columns: ColumnDefinition[];

    @Output()
    cellClick = new EventEmitter<any>();

    onCellClick(event: any) {
        this.cellClick.emit(event);
    }
}