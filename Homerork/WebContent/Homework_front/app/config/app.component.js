"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {i18nService} from "../service/i18nService";
var AppComponent = (function () {
    function AppComponent() {
    }
    // constructor(private i18nService :i18nService) {
    //
    // }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app_component init complete');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <div class=\"base\">\n            <div class=\"base-header\">\n                <h1>\u7AD9\u9EDE\u7BA1\u7406\u7CFB\u7D71</h1>\n            </div>\n            <div class=\"base-content\">\n                <!--<div id=\"side-content\">-->\n                <!--<side-content></side-content>-->\n                <!--</div>-->\n                <div class=\"main-content\">\n                    <main-content></main-content>\n                </div>\n            </div>\n        </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map