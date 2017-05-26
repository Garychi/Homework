/**
 * Created by Mos on 2017/5/15.
 */
import {Component, OnInit} from '@angular/core';
import {Employee, Nurse} from "../../model/Employee";
import {Station} from "../../model/Station";
import {Router} from '@angular/router';
import {EmployeeService} from "../../service/EmployeeService";
import {StationService} from '../../service/StationService';
import {WorkStationService} from '../../service/WorkStationService';
import {WorkStation} from "../../model/WorkStation";
import * as moment from 'moment';
import {Message} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.css']
})

/**
 * 新增護士
 */
export class EmployeeComponent implements OnInit {
    nurseName: String;
    Nurses: Nurse[];
    display: boolean = false;

    selectedNurse: Nurse[];
    unSelectedNurse: Nurse[];
    detailNurse: Nurse;
    currentNurse: Nurse;

    empNo: string;

    selectedStation: Station[];
    unSelectedStation: Station[];
    currentStation: Station;
    msgs: Message[] = [];

    constructor(private employeeService: EmployeeService, private stationService: StationService, private workStationService: WorkStationService, private router: Router) {

    }

    ngOnInit() {
        this.Nurses = [];
        this.selectedNurse = [];
        this.unSelectedNurse = [];
        this.selectedStation = [];
        this.unSelectedStation = [];
        this.currentStation = undefined;
        this.currentNurse = undefined;

        this.display = false;

        this.search();
    }

    search() {
        let body = {"stationId": ""};

        this.stationService.search(body)
            .subscribe(response => {
                    console.log(response);
                    this.unSelectedStation = response;
                },
                error => console.log(error),
                function complete() {
                    console.log('search complete');
                }
            );
    }

    insert() {
        let insertObject = [];
        let empNo = this.empNo;

        this.employeeService.search({"empNo": this.empNo})
            .subscribe(response => {
                    let searchEmp: Employee [] = response;
                    if (searchEmp.length > 0) {
                        if (this.selectedStation.length > 0) {
                            this.selectedStation.forEach(function (station) {

                                var workStation = new WorkStation(station.stationId, empNo);
                                workStation.joinDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                                workStation.id = {
                                    empNo: empNo,
                                    stationId: station.stationId
                                };

                                insertObject.push(workStation);
                            });

                            this.doInsert(insertObject);
                        }
                    }
                    else{
                        this.msgs.push({severity: 'info', summary: 'Info Message', detail: '無此員工編碼 無法新增'});
                    }
                },
                error => console.log(error),
                function complete() {
                    console.log('update complete');
                });
    }

    doInsert(insertObject) {
        this.workStationService.insert(insertObject)
            .subscribe(response => {
                    this.msgs.push({severity: 'success', summary: 'Success Message', detail: '新增成功'});
                    console.log(response);
                },
                error => {
                    this.msgs.push({severity: 'error', summary: 'Error Message', detail: '新增失敗'});
                    console.log(error);
                },
                function complete() {
                    console.log('insert complete');
                }
            )
    }

    back() {
        this.router.navigate(['Homerork']);
    }

    update() {
        if (this.unSelectedStation != undefined && this.unSelectedStation.length > 0) {
            this.employeeService.update(this.unSelectedStation)
                .subscribe(response => {
                        this.unSelectedStation = [];
                        console.log('update success');
                    },
                    error => console.log(error),
                    function complete() {
                        console.log('update complete');
                    });
        }
    }

    delete() {
        let loginStation = {};
        this.employeeService.delete(loginStation)
            .subscribe(response => console.log('nurse delete success'),
                error => console.log(error),
                function complete() {
                    console.log('update complete');
                });
    }

    changeStation(station) {
        this.currentStation = station;
        console.log(this.currentStation);
    }

    selectStation() {
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
    }

    removeStation() {
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
    }
}