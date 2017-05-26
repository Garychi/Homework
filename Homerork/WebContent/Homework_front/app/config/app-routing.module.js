"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_component_1 = require("../views/employee/employee.component");
var nurseDetail_component_1 = require("../views/employee/nurseDetail.component");
var station_component_1 = require("../views/station/station.component");
var stationDetail_component_1 = require("../views/station/stationDetail.component");
var side_content_component_1 = require("../views/base/side-content.component");
var serverConfig_module_1 = require("./serverConfig.module");
var routes = [
    { path: '', redirectTo: serverConfig_module_1.serverPath + 'menu', pathMatch: 'full' },
    { path: serverConfig_module_1.serverPath + 'menu', component: side_content_component_1.SideContentComponent },
    { path: serverConfig_module_1.serverPath + 'employee', component: employee_component_1.EmployeeComponent },
    { path: serverConfig_module_1.serverPath + 'nurseDetail', component: nurseDetail_component_1.NurseDetailComponent },
    { path: serverConfig_module_1.serverPath + 'station', component: station_component_1.StationComponent },
    { path: serverConfig_module_1.serverPath + 'stationDetail', component: stationDetail_component_1.StationDetailComponent },
    { path: 'Homerork', component: side_content_component_1.SideContentComponent }
    // { path: 'detail/:id', component: HeroDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes),
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map