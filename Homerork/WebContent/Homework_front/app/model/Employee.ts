/**
 * Created by Mos on 2017/5/15.
 */
import {WorkStation} from "./WorkStation";

export class Employee{
    empNo:string;
    name:string;
    joinDate:string;
    department:string;
    modidate:string;
    stations:WorkStation[];

    constructor(empNo,name){
        this.empNo=empNo;
        this.name =name;
    }
}


export class Nurse extends Employee{

    constructor(empNo,name){
        super(empNo,name);
    }
}