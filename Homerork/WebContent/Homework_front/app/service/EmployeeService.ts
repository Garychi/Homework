/**
 * Created by Mos on 2017/5/16.
 */
import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {DataAccessService} from "./DataAccessService";
import {StationService} from "./StationService";
import {Employee} from "../model/Employee";
import {Station} from "../model/Station";

@Injectable()
export class EmployeeService {

    constructor(private dataAccessService: DataAccessService,private stationService:StationService) {

    }


    search(keyword): Observable<Employee[]> {
        let url = "http://localhost:8085/Homerork/services/restfulService/employee/search";
        return this.dataAccessService.post(url, keyword);
    }

    searchStation(keyword): Observable<Station[]> {
        let url = "http://localhost:8085/Homerork/services/restfulService/employee/searchStation";
        return this.dataAccessService.post(url, keyword);
    }

    insert(body){
        body = {"empno": "7839","ename":"KING"};
        let url = "http://localhost:8085/Homerork/services/restfulService/employee/insert";
        return this.dataAccessService.post(url, body);
    }

    update(body) {
        return this.stationService.deleteMulti(body);
        // body = {"empno": "7839","ename":"KING"};
        // let url = "http://localhost:8085/Homerork/services/restfulService/employee/update";
        // return this.dataAccessService.post(url, body);
    }

    delete(body) {
        return this.stationService.delete(body);
        // body = {"empno": "7839","ename":"KING"};
        // let url = "http://localhost:8085/Homerork/services/restfulService/employee/delete";
        // return this.dataAccessService.post(url, body);
    }
}