/**
 * Created by Mos on 2017/5/17.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {Station} from "../model/Station";
import {WorkStation} from "../model/WorkStation";

@Injectable()
export class StationService {

    constructor(private dataAccessService: DataAccessService) {

    }

    search(keyword): Observable<Station[]> {
        console.log(keyword);
        let url = "http://localhost:8085/Homerork/services/restfulService/station/search";
        return this.dataAccessService.post(url, keyword);
    }

    searchOthers(keyword): Observable<WorkStation[]> {
        console.log(keyword);
        let url = "http://localhost:8085/Homerork/services/restfulService/station/searchOthers";
        return this.dataAccessService.post(url, keyword);
    }

    insert(body) {
        let url = "http://localhost:8085/Homerork/services/restfulService/station/insert";
        return this.dataAccessService.post(url, body);
    }

    update(body) {
        let url = "http://localhost:8085/Homerork/services/restfulService/station/update";
        return this.dataAccessService.post(url, body);
    }

    delete(body) {
        let url = "http://localhost:8085/Homerork/services/restfulService/station/delete";
        return this.dataAccessService.post(url, body);
    }

    deleteMulti(body) {
        let url = "http://localhost:8085/Homerork/services/restfulService/station/deleteMulti";
        return this.dataAccessService.post(url, body);
    }
}