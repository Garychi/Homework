/**
 * Created by Mos on 2017/5/19.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {WorkStation} from "../model/WorkStation";

@Injectable()
export class WorkStationService{

    constructor(private dataAccessService: DataAccessService) {

    }

    search(body): Observable<WorkStation[]>{
        let url = "http://localhost:8085/Homerork/services/restfulService/workStation/search";
        return this.dataAccessService.post(url, body);
    }

    searchStation(body): Observable<WorkStation[]>{
        let url = "http://localhost:8085/Homerork/services/restfulService/workStation/searchStation";
        return this.dataAccessService.post(url, body);
    }

    insert(body){
        let url = "http://localhost:8085/Homerork/services/restfulService/workStation/insert";
        return this.dataAccessService.post(url, body);
    }

    delete(body){
        let url = "http://localhost:8085/Homerork/services/restfulService/workStation/delete";
        return this.dataAccessService.post(url, body);
    }

    deleteMulti(body){
        let url = "http://localhost:8085/Homerork/services/restfulService/workStation/deleteMulti";
        return this.dataAccessService.post(url, body);
    }

    searchOthers(keyword): Observable<WorkStation[]> {
        let url = "http://localhost:8085/Homerork/services/restfulService/workStation/searchOthers";
        return this.dataAccessService.post(url, keyword);
    }
}