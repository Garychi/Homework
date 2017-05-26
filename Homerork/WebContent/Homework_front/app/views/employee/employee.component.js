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
 * Created by Mos on 2017/5/15.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EmployeeService_1 = require("../../service/EmployeeService");
var StationService_1 = require("../../service/StationService");
var WorkStationService_1 = require("../../service/WorkStationService");
var WorkStation_1 = require("../../model/WorkStation");
var moment = require("moment");
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService, stationService, workStationService, router) {
        this.employeeService = employeeService;
        this.stationService = stationService;
        this.workStationService = workStationService;
        this.router = router;
        this.display = false;
        this.msgs = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.Nurses = [];
        this.selectedNurse = [];
        this.unSelectedNurse = [];
        this.selectedStation = [];
        this.unSelectedStation = [];
        this.currentStation = undefined;
        this.currentNurse = undefined;
        this.display = false;
        this.search();
    };
    EmployeeComponent.prototype.search = function () {
        var _this = this;
        var body = { "stationId": "" };
        this.stationService.search(body)
            .subscribe(function (response) {
            console.log(response);
            _this.unSelectedStation = response;
        }, function (error) { return console.log(error); }, function complete() {
            console.log('search complete');
        });
    };
    EmployeeComponent.prototype.insert = function () {
        var _this = this;
        var insertObject = [];
        var empNo = this.empNo;
        this.employeeService.search({ "empNo": this.empNo })
            .subscribe(function (response) {
            var searchEmp = response;
            if (searchEmp.length > 0) {
                if (_this.selectedStation.length > 0) {
                    _this.selectedStation.forEach(function (station) {
                        var workStation = new WorkStation_1.WorkStation(station.stationId, empNo);
                        workStation.joinDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                        workStation.id = {
                            empNo: empNo,
                            stationId: station.stationId
                        };
                        insertObject.push(workStation);
                    });
                    _this.doInsert(insertObject);
                }
            }
            else {
                _this.msgs.push({ severity: 'info', summary: 'Info Message', detail: '無此員工編碼 無法新增' });
            }
        }, function (error) { return console.log(error); }, function complete() {
            console.log('update complete');
        });
    };
    EmployeeComponent.prototype.doInsert = function (insertObject) {
        var _this = this;
        this.workStationService.insert(insertObject)
            .subscribe(function (response) {
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '新增成功' });
            console.log(response);
        }, function (error) {
            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '新增失敗' });
            console.log(error);
        }, function complete() {
            console.log('insert complete');
        });
    };
    EmployeeComponent.prototype.back = function () {
        this.router.navigate(['Homerork']);
    };
    EmployeeComponent.prototype.update = function () {
        var _this = this;
        if (this.unSelectedStation != undefined && this.unSelectedStation.length > 0) {
            this.employeeService.update(this.unSelectedStation)
                .subscribe(function (response) {
                _this.unSelectedStation = [];
                console.log('update success');
            }, function (error) { return console.log(error); }, function complete() {
                console.log('update complete');
            });
        }
    };
    EmployeeComponent.prototype.delete = function () {
        var loginStation = {};
        this.employeeService.delete(loginStation)
            .subscribe(function (response) { return console.log('nurse delete success'); }, function (error) { return console.log(error); }, function complete() {
            console.log('update complete');
        });
    };
    EmployeeComponent.prototype.changeStation = function (station) {
        this.currentStation = station;
        console.log(this.currentStation);
    };
    EmployeeComponent.prototype.selectStation = function () {
        if (this.currentStation != undefined) {
            if (this.selectedStation.length > 0) {
                if (this.selectedStation.indexOf(this.currentStation) == -1) {
                    this.selectedStation.push(this.currentStation);
                    this.unSelectedStation.splice(this.unSelectedStation.indexOf(this.currentStation), 1);
                    this.currentStation = undefined;
                }
            }
            else {
                this.selectedStation.push(this.currentStation);
                this.unSelectedStation.splice(this.unSelectedStation.indexOf(this.currentStation), 1);
                this.currentStation = undefined;
            }
        }
    };
    EmployeeComponent.prototype.removeStation = function () {
        if (this.currentStation != undefined) {
            if (this.unSelectedStation.length > 0) {
                if (this.unSelectedStation.indexOf(this.currentStation) == -1) {
                    this.unSelectedStation.push(this.currentStation);
                    this.selectedStation.splice(this.selectedStation.indexOf(this.currentStation), 1);
                    this.currentStation = undefined;
                }
            }
            else {
                this.unSelectedStation.push(this.currentStation);
                this.selectedStation.splice(this.selectedStation.indexOf(this.currentStation), 1);
                this.currentStation = undefined;
            }
        }
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'employee',
        templateUrl: 'employee.component.html',
        styleUrls: ['employee.css']
    })
    /**
     * 新增護士
     */
    ,
    __metadata("design:paramtypes", [EmployeeService_1.EmployeeService, StationService_1.StationService, WorkStationService_1.WorkStationService, router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map