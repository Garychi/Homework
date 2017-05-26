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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var station_component_1 = require("./station.component");
var stationDetail_component_1 = require("./stationDetail.component");
var primeng_1 = require("primeng/primeng");
var StationService_1 = require("../../service/StationService");
var StationModule = (function () {
    function StationModule() {
    }
    return StationModule;
}());
StationModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            primeng_1.DialogModule,
            primeng_1.GrowlModule
        ],
        declarations: [
            station_component_1.StationComponent,
            stationDetail_component_1.StationDetailComponent
        ],
        providers: [
            StationService_1.StationService
        ],
        exports: [
            station_component_1.StationComponent,
            stationDetail_component_1.StationDetailComponent
        ]
    })
], StationModule);
exports.StationModule = StationModule;
//# sourceMappingURL=station.module.js.map