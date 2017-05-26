/**
 * Created by Mos on 2017/5/15.
 */
import {Nurse} from "./Employee";

export class Station {
    // serialid:number;
    // empNo: string;
    stationId: string;
    stationName: string;
    joinDate: string;
    modidate: string;
    // creator:string;
    // createdate:string;
    // modiby:string;
    // flag:number;
    nurses:Nurse[];

    constructor(stationId) {
        this.stationName = stationId;
        this.stationId = stationId;
    }
}