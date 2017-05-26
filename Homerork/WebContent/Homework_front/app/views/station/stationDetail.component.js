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
var StationService_1 = require("../../service/StationService");
var WorkStationService_1 = require("../../service/WorkStationService");
var StationDetailComponent = (function () {
    function StationDetailComponent(stationService, workStationService, router) {
        this.stationService = stationService;
        this.workStationService = workStationService;
        this.router = router;
        this.display = false;
        this.msgs = [];
    }
    StationDetailComponent.prototype.ngOnInit = function () {
        this.display = false;
        this.detailStation = undefined;
        this.detailWorkStation = [];
        this.search();
    };
    StationDetailComponent.prototype.modalSave = function (detailStation) {
        this.stationService.update(detailStation).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); }, function complete() {
            console.log('update complete');
        });
    };
    StationDetailComponent.prototype.back = function () {
        this.router.navigate(['Homerork']);
    };
    StationDetailComponent.prototype.modalBack = function () {
        this.display = false;
    };
    StationDetailComponent.prototype.viewStationDetail = function (station) {
        var _this = this;
        this.display = true;
        this.detailStation = station;
        var body = {
            id: {
                "stationId": this.detailStation.stationId
            }
        };
        this.workStationService.search(body).subscribe(function (response) {
            _this.detailWorkStation = response;
            console.log(response);
        }, function (error) {
            console.log(error);
        }, function complete() {
            console.log('search complete');
        });
    };
    StationDetailComponent.prototype.deleteStation = function (station) {
        var _this = this;
        this.stationService.delete(station).subscribe(function (response) {
            console.log(response);
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '刪除成功' });
            _this.Stations.splice(_this.Stations.indexOf(station), 1);
        }, function (error) {
            _this.msgs.push({ severity: 'success', summary: '刪除失敗', detail: error });
            console.log(error);
        }, function complete() {
            console.log('delete complete');
        });
    };
    StationDetailComponent.prototype.search = function () {
        var _this = this;
        var keyword = { "stationId": "" };
        var url = "http://localhost:8085/Homerork/services/restfulService/station/search";
        this.stationService.search(keyword)
            .subscribe(function (response) { return _this.Stations = response; }, function (error) { return console.log(error); }, function complete() {
            console.log('search complete');
        });
    };
    return StationDetailComponent;
}());
StationDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'station-detail',
        templateUrl: 'stationDetail.component.html',
        styleUrls: ['station.css']
    }),
    __metadata("design:paramtypes", [StationService_1.StationService, WorkStationService_1.WorkStationService, router_1.Router])
], StationDetailComponent);
exports.StationDetailComponent = StationDetailComponent;
//# sourceMappingURL=stationDetail.component.js.map