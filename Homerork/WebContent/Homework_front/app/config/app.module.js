"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
require("../rxjs-operators");
//custom Module
var main_content_module_1 = require("../views/base/main-content.module");
var side_content_module_1 = require("../views/base/side-content.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng2_bootstrap_1.Ng2BootstrapModule,
            main_content_module_1.MainContentModule,
            side_content_module_1.SideContentModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_module_1.AppRoutingModule,
            ng2_translate_1.TranslateModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map