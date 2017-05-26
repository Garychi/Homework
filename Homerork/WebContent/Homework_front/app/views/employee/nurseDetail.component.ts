/**
 * Created by Mos on 2017/5/18.
 */
import {Component, OnInit} from '@angular/core';
import {Nurse} from "../../model/Employee";
import {WorkStation} from "../../model/WorkStation";
import {Router} from '@angular/router';
import {EmployeeService} from "../../service/EmployeeService";
import {WorkStationService} from '../../service/WorkStationService';
import {StationService} from '../../service/StationService';
import * as moment from 'moment';
import {Message} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'nurse-detail',
    templateUrl: 'nurseDetail.component.html',
    styleUrls: ['employee.css']
})

export class NurseDetailComponent implements OnInit {
    Nurses: Nurse[];
    display: boolean = false;
    detailNurse: Nurse;
    empNo: String;

    selectedStation: WorkStation[];
    unSelectedStation: WorkStation[];
    currentStation: WorkStation;
    msgs: Message[] = [];

    constructor(private employeeService: EmployeeService, private workStationService: WorkStationService, private stationService: StationService, private router: Router) {

    }

    ngOnInit() {
        this.Nurses = [];
        this.selectedStation = [];
        this.unSelectedStation = [];
        this.search();
    }

    search() {
        let body = {"empNo": ""};
        this.employeeService.search(body)
            .subscribe(response => {
                    this.Nurses = response;
                    console.log(this.Nurses);
                },
                error => console.log(error),
                function complete() {
                    console.log('search complete');
                }
            )
    }

    back() {
        this.router.navigate(['Homerork']);
    }

    update() {
        let currentNurse = this.detailNurse;
        let stations = this.detailNurse.stations;//記憶體

        console.log(this.detailNurse);
        var selectedStations = this.selectedStation;
        var unSelectedStations = this.unSelectedStation;

        var insertStation: WorkStation[] = [];
        var deleteStation: WorkStation[] = [];

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
                .subscribe(response => {
                        insertStation = [];
                        console.log('workStation insert success');
                    },
                    error => console.log(error),
                    function complete() {
                        console.log('update complete');
                    });
        }

        if (deleteStation.length > 0) {
            this.workStationService.deleteMulti(deleteStation)
                .subscribe(response => {
                        deleteStation = [];
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

    /**
     * search All Stations
     */
    searchAllStations(body) {
        console.log(body);
        this.workStationService.searchOthers(body)
            .subscribe(response => {
                    console.log(response);
                    this.unSelectedStation = response;

                    if (this.unSelectedStation != undefined && this.unSelectedStation.length > 0) {
                        this.unSelectedStation.forEach(function (station) {
                            station.changed = false;
                        });
                    }
                },
                error => console.log(error),
                function complete() {
                    console.log('search complete');
                }
            );
    }

    viewNurseDetail(nurse) {
        this.detailNurse = nurse;
        let body = {id: {"empNo": nurse.empNo}};
        console.log(body);


        //找目前護士負責的區域
        this.workStationService.search(body)
            .subscribe(response => {
                    this.detailNurse.stations = response;
                    this.selectedStation = response;
                    this.display = true;

                    if (this.selectedStation != undefined && this.selectedStation.length > 0) {
                        this.selectedStation.forEach(function (station) {
                            station.changed = false;
                        })
                    }

                    console.log(response);
                    this.searchAllStations(this.selectedStation);
                },
                error => console.log(error),
                function complete() {
                    console.log('search complete');
                }
            )
    }

    deleteNurseStation(nurse) {
        this.detailNurse = nurse;
        let deleteStations = this.detailNurse.stations;
        let body = {"empNo": this.detailNurse.empNo};
        this.workStationService.delete(body)
            .subscribe(response => {
                    this.msgs.push({severity: 'success', summary: 'Success Message', detail: '刪除成功'});
                    console.log('nurse delete success');
                },
                error => {
                    this.msgs.push({severity: 'success', summary: '刪除失敗', detail: error});
                    console.log(error)
                },
                function complete() {
                    console.log('update complete');
                });

        console.log('deleteNurseStation');
    }

    modalBack() {
        this.display = false;
    }

    changeStation(station) {
        this.currentStation = station;
        console.log(this.currentStation);
    }

    selectStation() {
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
    }

    removeStation() {
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
    }
}