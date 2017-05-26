/**
 * Created by Mos on 2017/5/18.
 */
import {Component, OnInit} from '@angular/core';
import {Station} from "../../model/Station";
import {Router} from '@angular/router';
import {StationService} from '../../service/StationService';
import {WorkStationService} from '../../service/WorkStationService';
import {Message} from 'primeng/primeng';
import {WorkStation} from "../../model/WorkStation";


@Component({
    moduleId: module.id,
    selector: 'station-detail',
    templateUrl: 'stationDetail.component.html',
    styleUrls: ['station.css']
})

export class StationDetailComponent implements OnInit {

    Stations: Station[];
    detailStation: Station;
    detailWorkStation: WorkStation[];
    display: boolean = false;
    msgs: Message[] = [];

    constructor(private stationService: StationService, private workStationService: WorkStationService, private router: Router) {

    }

    ngOnInit() {
        this.display = false;
        this.detailStation = undefined;
        this.detailWorkStation = [];
        this.search();
    }

    modalSave(detailStation) {
        this.stationService.update(detailStation).subscribe(
            response => console.log(response),
            error => console.log(error),
            function complete() {
                console.log('update complete');
            }
        );
    }

    back() {
        this.router.navigate(['Homerork']);
    }

    modalBack() {
        this.display = false;
    }

    viewStationDetail(station) {
        this.display = true;
        this.detailStation = station;
        let body = {
            id: {
                "stationId": this.detailStation.stationId
            }
        };

        this.workStationService.search(body).subscribe(
            response => {
                this.detailWorkStation = response;
                console.log(response);
            },
            error => {
                console.log(error);
            },
            function complete() {
                console.log('search complete');
            }
        );
    }

    deleteStation(station) {
        this.stationService.delete(station).subscribe(
            response => {
                console.log(response);
                this.msgs.push({severity: 'success', summary: 'Success Message', detail: '刪除成功'});
                this.Stations.splice(this.Stations.indexOf(station), 1);
            },
            error => {
                this.msgs.push({severity: 'success', summary: '刪除失敗', detail: error});
                console.log(error);
            },
            function complete() {
                console.log('delete complete');
            }
        );
    }


    search() {
        let keyword = {"stationId": ""}
        let url = "http://localhost:8085/Homerork/services/restfulService/station/search";
        this.stationService.search(keyword)
            .subscribe(
                response => this.Stations = response,
                error => console.log(error),
                function complete() {
                    console.log('search complete');
                }
            );
    }
}