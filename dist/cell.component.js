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
var CellComponent = (function () {
    function CellComponent() {
    }
    Object.defineProperty(CellComponent.prototype, "value", {
        get: function () {
            return this.dataRow[this.field];
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CellComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CellComponent.prototype, "dataRow", void 0);
    CellComponent = __decorate([
        core_1.Component({
            selector: 'dg-cell',
            template: "\n        <div class=\"dg-cell\">\n            {{value}}\n        </div>\n    ",
            styles: ['div {display: inline-block; width: 30px; height: 30px;}']
        }), 
        __metadata('design:paramtypes', [])
    ], CellComponent);
    return CellComponent;
}());
exports.CellComponent = CellComponent;
