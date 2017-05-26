"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/5/15.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
//Custom Module
var employee_module_1 = require("../employee/employee.module");
var station_module_1 = require("../station/station.module");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
//Service
var DataAccessService_1 = require("../../service/DataAccessService");
//Component
var main_content_component_1 = require("./main-content.component");
var MainContentModule = (function () {
    function MainContentModule() {
    }
    return MainContentModule;
}());
MainContentModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            ng2_bootstrap_1.TooltipModule,
            employee_module_1.EmployeeModule,
            station_module_1.StationModule,
            router_1.RouterModule,
        ],
        declarations: [
            main_content_component_1.MainContentComponent
        ],
        exports: [main_content_component_1.MainContentComponent],
        providers: [
            DataAccessService_1.DataAccessService
        ]
    })
], MainContentModule);
exports.MainContentModule = MainContentModule;
//# sourceMappingURL=main-content.module.js.map