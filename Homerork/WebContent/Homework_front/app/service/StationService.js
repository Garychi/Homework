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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/5/17.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var StationService = (function () {
    function StationService(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    StationService.prototype.search = function (keyword) {
        console.log(keyword);
        var url = "http://localhost:8085/Homerork/services/restfulService/station/search";
        return this.dataAccessService.post(url, keyword);
    };
    StationService.prototype.searchOthers = function (keyword) {
        console.log(keyword);
        var url = "http://localhost:8085/Homerork/services/restfulService/station/searchOthers";
        return this.dataAccessService.post(url, keyword);
    };
    StationService.prototype.insert = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/station/insert";
        return this.dataAccessService.post(url, body);
    };
    StationService.prototype.update = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/station/update";
        return this.dataAccessService.post(url, body);
    };
    StationService.prototype.delete = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/station/delete";
        return this.dataAccessService.post(url, body);
    };
    StationService.prototype.deleteMulti = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/station/deleteMulti";
        return this.dataAccessService.post(url, body);
    };
    return StationService;
}());
StationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
], StationService);
exports.StationService = StationService;
//# sourceMappingURL=StationService.js.map