/**
 * Created by Mos on 2017/5/15.
 */
import {Component, OnInit} from '@angular/core';
import {Station} from "../../model/Station";
import {Router} from '@angular/router';
import * as moment from 'moment';
import {StationService} from '../../service/StationService';
import {Message} from 'primeng/primeng';

@Component({
    moduleId: module.id,
    selector: 'station',
    templateUrl: 'station.component.html',
    styleUrls: ['station.css']
})


export class StationComponent implements OnInit {
    inputStation: String;

    Stations: Station[];
    detailStation: Station;
    detailStations: Station[];
    selectedStattions: Station[];
    display: boolean = false;
    msgs: Message[] = [];

    constructor(private stationService: StationService, private router: Router) {

    }

    ngOnInit() {
        this.display = false;
        this.detailStation = undefined;
    }

    insertStation() {
        let currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        var station = new Station(this.inputStation);
        station.modidate = currentDate;
        station.joinDate = currentDate;


        let url = "http://localhost:8085/Homerork/services/restfulService/station/insert";
        this.stationService.insert(station)
            .subscribe(response => {
                    this.msgs.push({severity: 'success', summary: 'Success Message', detail: '新增成功'});
                    console.log(response);
                },
                error => {
                    console.log(error);
                    this.msgs.push({severity: 'error', summary: 'Error Message', detail: '新增失敗'});
                },
                function complete() {
                    console.log('complete');
                }
            );
    }

    back() {
        this.router.navigate(['Homerork']);
    }

}

