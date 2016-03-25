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
var cell_component_1 = require('./cell.component');
var RowComponent = (function () {
    function RowComponent() {
        this.cellClick = new core_1.EventEmitter();
    }
    RowComponent.prototype.onCellClick = function (event) {
        this.cellClick.emit(event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RowComponent.prototype, "dataRow", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RowComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RowComponent.prototype, "cellClick", void 0);
    RowComponent = __decorate([
        core_1.Component({
            selector: 'dg-row',
            template: "\n        <div class=\"dg-row\">\n            <dg-cell *ngFor=\"#column of columns\"\n                     [dataRow]=\"dataRow\"\n                     [field]=\"column.field\"\n                     (click)=\"onCellClick($event)\"></dg-cell>\n        </div>\n    ",
            directives: [cell_component_1.CellComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RowComponent);
    return RowComponent;
}());
exports.RowComponent = RowComponent;
