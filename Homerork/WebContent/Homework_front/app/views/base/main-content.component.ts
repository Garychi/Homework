/**
 * Created by Mos on 2017/5/15.
 */
import {Component, OnInit} from '@angular/core';
import {DataAccessService} from '../../service/DataAccessService';


import '../../rxjs-operators';


@Component({
    moduleId: module.id,
    selector: 'main-content',
    templateUrl: 'main-content.component.html'
})

export class MainContentComponent implements OnInit {

    private boxes;
    private errorMessage;
    private valueObject;
    private title;

    constructor(private dataAccessService: DataAccessService) {
        this.title="This is Main Content";
    }


    ngOnInit(): void {

    }
}