/**
 * Created by Mos on 2017/5/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

//Custom Module
import {EmployeeModule} from "../employee/employee.module";
import {StationModule} from "../station/station.module";
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

//Service
import {DataAccessService} from '../../service/DataAccessService';

//Component
import {MainContentComponent} from './main-content.component';


@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        JsonpModule,
        TooltipModule,
        EmployeeModule,
        StationModule,
        RouterModule,
    ],
    declarations: [
        MainContentComponent
    ],
    exports :[MainContentComponent],
    providers :[
        DataAccessService
    ]


})
export class MainContentModule {

}