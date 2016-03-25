import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RowComponent} from './row.component';
import {ColumnDefinition} from './column-definition.interface';

@Component({
    selector: 'dg-grid',
    template: `
        <div class="dg-grid">
            <dg-row *ngFor="#row of data"
                    [dataRow]="row"
                    [columns]="columns"
                    (click)="onRowClick($event)"
                    (cellClick)="onCellClick($event)"></dg-row>
        </div>
    `,
    directives: [RowComponent]
})
export class GridComponent {
    @Input()
    columns: ColumnDefinition[];
    @Input()
    data: any[];

    @Output()
    cellClick = new EventEmitter<any>();
    @Output()
    rowClick = new EventEmitter<any>();

    onCellClick(event: any) {
        this.cellClick.emit(event);
    }

    onRowClick(event) {
        this.rowClick.emit(event);
    }
}