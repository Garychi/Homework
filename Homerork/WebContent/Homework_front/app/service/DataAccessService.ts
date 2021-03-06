import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class DataAccessService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({headers: this.headers});

    constructor(private http: Http) {

    }

    post(url,body,options?){
        options = options || this.options;

        return this.http.post(url, body,options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}