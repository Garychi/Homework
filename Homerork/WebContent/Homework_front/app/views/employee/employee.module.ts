/**
 * Created by Mos on 2017/5/15.
 */
import {NgModule} from '@angular/core';
import {FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {DialogModule,GrowlModule} from 'primeng/primeng';

import {EmployeeComponent} from "./employee.component";
import {NurseDetailComponent}from './nurseDetail.component';

import {EmployeeService} from '../../service/EmployeeService';
import {StationService} from '../../service/StationService';
import {WorkStationService} from '../../service/WorkStationService';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        DialogModule,
        GrowlModule
    ],
    declarations:[
        EmployeeComponent,
        NurseDetailComponent
    ],
    providers:[
        EmployeeService,
        StationService,
        WorkStationService
    ],
    exports:[
        EmployeeComponent,
        NurseDetailComponent
    ]
})

export class EmployeeModule{}