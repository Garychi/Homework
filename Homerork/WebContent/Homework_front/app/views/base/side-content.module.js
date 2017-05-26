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
var menu_module_1 = require("../menu/menu.module");
var side_content_component_1 = require("./side-content.component");
var SideContentModule = (function () {
    function SideContentModule() {
    }
    return SideContentModule;
}());
SideContentModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            menu_module_1.MenuModule
        ],
        declarations: [
            side_content_component_1.SideContentComponent
        ],
        exports: [side_content_component_1.SideContentComponent]
    })
], SideContentModule);
exports.SideContentModule = SideContentModule;
//# sourceMappingURL=side-content.module.js.map