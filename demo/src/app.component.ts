import {Component} from 'angular2/core';
import {ColumnDefinition} from '../../src/column-definition.interface';
import {GridComponent} from '../../src/grid.component';

const DATA = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'}
];

@Component({
    selector: 'demo-app',
    template: `
        <h1>{{title}}</h1>
        <dg-grid [columns]="columns"
                 [data]="data"
                 (cellClick)="onCellClick($event)"
                 (rowClick)="onRowClick($event)"></dg-grid>
    `,
    directives: [GridComponent]
})
export class AppComponent {
    title = 'hello, world';

    columns = [
        {title: 'ID', field: 'id'},
        {title: 'Name', field: 'name'}
    ];

    data = DATA;

    onCellClick(event: any) {
        console.log(event);
    }

    onRowClick(event: any) {
        console.log(event);
    }
}