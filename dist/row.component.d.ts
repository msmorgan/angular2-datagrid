import { EventEmitter } from 'angular2/core';
import { ColumnDefinition } from './column-definition.interface';
export declare class RowComponent {
    dataRow: any;
    columns: ColumnDefinition[];
    cellClick: EventEmitter<any>;
    onCellClick(event: any): void;
}
