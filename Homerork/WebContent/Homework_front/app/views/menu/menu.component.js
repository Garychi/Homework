"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2016/11/22.
 */
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menuArray = [
            // {"menuId": "0001", "menuName": "Home", "parent": "root", "menuPath": "/employee"},
            { "menuId": "0002", "menuName": "新增站點", "parent": "root", "menuPath": "station" },
            { "menuId": "0003", "menuName": "站點列表", "parent": "root", "menuPath": "stationDetail" },
            { "menuId": "0004", "menuName": "新增護士", "parent": "root", "menuPath": "employee" },
            { "menuId": "0005", "menuName": "護士列表", "parent": "root", "menuPath": "nurseDetail" }
        ];
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'menuBar',
        templateUrl: 'menu.component.html'
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map