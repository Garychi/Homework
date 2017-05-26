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
 * Created by Mos on 2017/5/18.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EmployeeService_1 = require("../../service/EmployeeService");
var WorkStationService_1 = require("../../service/WorkStationService");
var StationService_1 = require("../../service/StationService");
var moment = require("moment");
var NurseDetailComponent = (function () {
    function NurseDetailComponent(employeeService, workStationService, stationService, router) {
        this.employeeService = employeeService;
        this.workStationService = workStationService;
        this.stationService = stationService;
        this.router = router;
        this.display = false;
        this.msgs = [];
    }
    NurseDetailComponent.prototype.ngOnInit = function () {
        this.Nurses = [];
        this.selectedStation = [];
        this.unSelectedStation = [];
        this.search();
    };
    NurseDetailComponent.prototype.search = function () {
        var _this = this;
        var body = { "empNo": "" };
        this.employeeService.search(body)
            .subscribe(function (response) {
            _this.Nurses = response;
            console.log(_this.Nurses);
        }, function (error) { return console.log(error); }, function complete() {
            console.log('search complete');
        });
    };
    NurseDetailComponent.prototype.back = function () {
        this.router.navigate(['Homerork']);
    };
    NurseDetailComponent.prototype.update = function () {
        var currentNurse = this.detailNurse;
        var stations = this.detailNurse.stations; //記憶體
        console.log(this.detailNurse);
        var selectedStations = this.selectedStation;
        var unSelectedStations = this.unSelectedStation;
        var insertStation = [];
        var deleteStation = [];
        selectedStations.forEach(function (station) {
            if (station.changed == true) {
                station.id = {
                    empNo: currentNurse.empNo,
                    stationId: station.stationId
                };
                station.joinDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                insertStation.push(station);
            }
        });
        unSelectedStations.forEach(function (station) {
            if (station.changed == true) {
                deleteStation.push(station);
            }
        });
        if (insertStation.length > 0) {
            this.workStationService.insert(insertStation)
                .subscribe(function (response) {
                insertStation = [];
                console.log('workStation insert success');
            }, function (error) { return console.log(error); }, function complete() {
                console.log('update complete');
            });
        }
        if (deleteStation.length > 0) {
            this.workStationService.deleteMulti(deleteStation)
                .subscribe(function (response) {
                deleteStation = [];
                console.log('update success');
            }, function (error) { return console.log(error); }, function complete() {
                console.log('update complete');
            });
        }
    };
    NurseDetailComponent.prototype.delete = function () {
        var loginStation = {};
        this.employeeService.delete(loginStation)
            .subscribe(function (response) { return console.log('nurse delete success'); }, function (error) { return console.log(error); }, function complete() {
            console.log('update complete');
        });
    };
    /**
     * search All Stations
     */
    NurseDetailComponent.prototype.searchAllStations = function (body) {
        var _this = this;
        console.log(body);
        this.workStationService.searchOthers(body)
            .subscribe(function (response) {
            console.log(response);
            _this.unSelectedStation = response;
            if (_this.unSelectedStation != undefined && _this.unSelectedStation.length > 0) {
                _this.unSelectedStation.forEach(function (station) {
                    station.changed = false;
                });
            }
        }, function (error) { return console.log(error); }, function complete() {
            console.log('search complete');
        });
    };
    NurseDetailComponent.prototype.viewNurseDetail = function (nurse) {
        var _this = this;
        this.detailNurse = nurse;
        var body = { id: { "empNo": nurse.empNo } };
        console.log(body);
        //找目前護士負責的區域
        this.workStationService.search(body)
            .subscribe(function (response) {
            _this.detailNurse.stations = response;
            _this.selectedStation = response;
            _this.display = true;
            if (_this.selectedStation != undefined && _this.selectedStation.length > 0) {
                _this.selectedStation.forEach(function (station) {
                    station.changed = false;
                });
            }
            console.log(response);
            _this.searchAllStations(_this.selectedStation);
        }, function (error) { return console.log(error); }, function complete() {
            console.log('search complete');
        });
    };
    NurseDetailComponent.prototype.deleteNurseStation = function (nurse) {
        var _this = this;
        this.detailNurse = nurse;
        var deleteStations = this.detailNurse.stations;
        var body = { "empNo": this.detailNurse.empNo };
        this.workStationService.delete(body)
            .subscribe(function (response) {
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '刪除成功' });
            console.log('nurse delete success');
        }, function (error) {
            _this.msgs.push({ severity: 'success', summary: '刪除失敗', detail: error });
            console.log(error);
        }, function complete() {
            console.log('update complete');
        });
        console.log('deleteNurseStation');
    };
    NurseDetailComponent.prototype.modalBack = function () {
        this.display = false;
    };
    NurseDetailComponent.prototype.changeStation = function (station) {
        this.currentStation = station;
        console.log(this.currentStation);
    };
    NurseDetailComponent.prototype.selectStation = function () {
        if (this.currentStation != undefined) {
            if (this.selectedStation.length > 0) {
                if (this.selectedStation.indexOf(this.currentStation) == -1) {
                    this.currentStation.changed = !this.currentStation.changed;
                    console.log(this.currentStation);
                    this.currentStation.id = {
                        empNo: this.detailNurse.empNo,
                        stationId: this.currentStation.stationId
                    };
                    this.selectedStation.push(this.currentStation);
                    this.unSelectedStation.splice(this.unSelectedStation.indexOf(this.currentStation), 1);
                    this.currentStation = undefined;
                }
            }
            else {
                this.currentStation.changed = !this.currentStation.changed;
                this.selectedStation.push(this.currentStation);
                this.unSelectedStation.splice(this.unSelectedStation.indexOf(this.currentStation), 1);
                this.currentStation = undefined;
            }
        }
    };
    NurseDetailComponent.prototype.removeStation = function () {
        if (this.currentStation != undefined) {
            if (this.unSelectedStation.length > 0) {
                if (this.unSelectedStation.indexOf(this.currentStation) == -1) {
                    this.currentStation.changed = !this.currentStation.changed;
                    this.currentStation.stationId = this.currentStation.id.stationId;
                    this.unSelectedStation.push(this.currentStation);
                    this.selectedStation.splice(this.selectedStation.indexOf(this.currentStation), 1);
                    this.currentStation = undefined;
                }
            }
            else {
                this.currentStation.changed = !this.currentStation.changed;
                this.unSelectedStation.push(this.currentStation);
                this.selectedStation.splice(this.selectedStation.indexOf(this.currentStation), 1);
                this.currentStation = undefined;
            }
        }
    };
    return NurseDetailComponent;
}());
NurseDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'nurse-detail',
        templateUrl: 'nurseDetail.component.html',
        styleUrls: ['employee.css']
    }),
    __metadata("design:paramtypes", [EmployeeService_1.EmployeeService, WorkStationService_1.WorkStationService, StationService_1.StationService, router_1.Router])
], NurseDetailComponent);
exports.NurseDetailComponent = NurseDetailComponent;
//# sourceMappingURL=nurseDetail.component.js.map