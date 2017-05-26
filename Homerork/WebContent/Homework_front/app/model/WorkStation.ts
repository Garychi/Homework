/**
 * Created by Mos on 2017/5/19.
 */
import {Station} from "./Station";

export class WorkStation extends Station{
    // serialid:number;
    joinDate:string;
    id:{
        stationId: string;
        empNo:string;
    };

    changed:boolean;
    // modiby:string;
    // modidate: string;
    // creator:string;
    // createdate:string;
    // flag:number;

    constructor(stationId,empNo){
        super(stationId);
    }
}