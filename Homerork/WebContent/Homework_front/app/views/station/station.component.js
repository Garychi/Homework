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
var Station_1 = require("../../model/Station");
var router_1 = require("@angular/router");
var moment = require("moment");
var StationService_1 = require("../../service/StationService");
var StationComponent = (function () {
    function StationComponent(stationService, router) {
        this.stationService = stationService;
        this.router = router;
        this.display = false;
        this.msgs = [];
    }
    StationComponent.prototype.ngOnInit = function () {
        this.display = false;
        this.detailStation = undefined;
    };
    StationComponent.prototype.insertStation = function () {
        var _this = this;
        var currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        var station = new Station_1.Station(this.inputStation);
        station.modidate = currentDate;
        station.joinDate = currentDate;
        var url = "http://localhost:8085/Homerork/services/restfulService/station/insert";
        this.stationService.insert(station)
            .subscribe(function (response) {
            _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '新增成功' });
            console.log(response);
        }, function (error) {
            console.log(error);
            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '新增失敗' });
        }, function complete() {
            console.log('complete');
        });
    };
    StationComponent.prototype.back = function () {
        this.router.navigate(['Homerork']);
    };
    return StationComponent;
}());
StationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'station',
        templateUrl: 'station.component.html',
        styleUrls: ['station.css']
    }),
    __metadata("design:paramtypes", [StationService_1.StationService, router_1.Router])
], StationComponent);
exports.StationComponent = StationComponent;
//# sourceMappingURL=station.component.js.map