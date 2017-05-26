"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Mos on 2017/5/19.
 */
var Station_1 = require("./Station");
var WorkStation = (function (_super) {
    __extends(WorkStation, _super);
    // modiby:string;
    // modidate: string;
    // creator:string;
    // createdate:string;
    // flag:number;
    function WorkStation(stationId, empNo) {
        return _super.call(this, stationId) || this;
    }
    return WorkStation;
}(Station_1.Station));
exports.WorkStation = WorkStation;
//# sourceMappingURL=WorkStation.js.map