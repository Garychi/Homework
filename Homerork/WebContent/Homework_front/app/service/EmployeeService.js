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
 * Created by Mos on 2017/5/16.
 */
var core_1 = require("@angular/core");
var DataAccessService_1 = require("./DataAccessService");
var StationService_1 = require("./StationService");
var EmployeeService = (function () {
    function EmployeeService(dataAccessService, stationService) {
        this.dataAccessService = dataAccessService;
        this.stationService = stationService;
    }
    EmployeeService.prototype.search = function (keyword) {
        var url = "http://localhost:8085/Homerork/services/restfulService/employee/search";
        return this.dataAccessService.post(url, keyword);
    };
    EmployeeService.prototype.searchStation = function (keyword) {
        var url = "http://localhost:8085/Homerork/services/restfulService/employee/searchStation";
        return this.dataAccessService.post(url, keyword);
    };
    EmployeeService.prototype.insert = function (body) {
        body = { "empno": "7839", "ename": "KING" };
        var url = "http://localhost:8085/Homerork/services/restfulService/employee/insert";
        return this.dataAccessService.post(url, body);
    };
    EmployeeService.prototype.update = function (body) {
        return this.stationService.deleteMulti(body);
        // body = {"empno": "7839","ename":"KING"};
        // let url = "http://localhost:8085/Homerork/services/restfulService/employee/update";
        // return this.dataAccessService.post(url, body);
    };
    EmployeeService.prototype.delete = function (body) {
        return this.stationService.delete(body);
        // body = {"empno": "7839","ename":"KING"};
        // let url = "http://localhost:8085/Homerork/services/restfulService/employee/delete";
        // return this.dataAccessService.post(url, body);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [DataAccessService_1.DataAccessService, StationService_1.StationService])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map