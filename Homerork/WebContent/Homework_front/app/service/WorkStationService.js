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
 * Created by Mos on 2017/5/19.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var WorkStationService = (function () {
    function WorkStationService(dataAccessService) {
        this.dataAccessService = dataAccessService;
    }
    WorkStationService.prototype.search = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/workStation/search";
        return this.dataAccessService.post(url, body);
    };
    WorkStationService.prototype.searchStation = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/workStation/searchStation";
        return this.dataAccessService.post(url, body);
    };
    WorkStationService.prototype.insert = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/workStation/insert";
        return this.dataAccessService.post(url, body);
    };
    WorkStationService.prototype.delete = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/workStation/delete";
        return this.dataAccessService.post(url, body);
    };
    WorkStationService.prototype.deleteMulti = function (body) {
        var url = "http://localhost:8085/Homerork/services/restfulService/workStation/deleteMulti";
        return this.dataAccessService.post(url, body);
    };
    WorkStationService.prototype.searchOthers = function (keyword) {
        var url = "http://localhost:8085/Homerork/services/restfulService/workStation/searchOthers";
        return this.dataAccessService.post(url, keyword);
    };
    return WorkStationService;
}());
WorkStationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [DataAccessService_1.DataAccessService])
], WorkStationService);
exports.WorkStationService = WorkStationService;
//# sourceMappingURL=WorkStationService.js.map