"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var row_component_1 = require('./row.component');
var GridComponent = (function () {
    function GridComponent() {
        this.cellClick = new core_1.EventEmitter();
        this.rowClick = new core_1.EventEmitter();
    }
    GridComponent.prototype.onCellClick = function (event) {
        this.cellClick.emit(event);
    };
    GridComponent.prototype.onRowClick = function (event) {
        this.rowClick.emit(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GridComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], GridComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "cellClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], GridComponent.prototype, "rowClick", void 0);
    GridComponent = __decorate([
        core_1.Component({
            selector: 'dg-grid',
            template: "\n        <div class=\"dg-grid\">\n            <dg-row *ngFor=\"#row of data\"\n                    [dataRow]=\"row\"\n                    [columns]=\"columns\"\n                    (click)=\"onRowClick($event)\"\n                    (cellClick)=\"onCellClick($event)\"></dg-row>\n        </div>\n    ",
            directives: [row_component_1.RowComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
