import { EventEmitter } from 'angular2/core';
import { ColumnDefinition } from './column-definition.interface';
export declare class GridComponent {
    columns: ColumnDefinition[];
    data: any[];
    cellClick: EventEmitter<any>;
    rowClick: EventEmitter<any>;
    onCellClick(event: any): void;
    onRowClick(event: any): void;
}
