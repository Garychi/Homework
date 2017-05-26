/**
 * Created by Mos on 2017/5/15.
 */
import {NgModule} from '@angular/core';
import {FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {StationComponent} from "./station.component";
import {StationDetailComponent} from './stationDetail.component';
import {DialogModule,GrowlModule} from 'primeng/primeng';

import {StationService} from '../../service/StationService';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        DialogModule,
        GrowlModule
    ],
    declarations:[
        StationComponent,
        StationDetailComponent
    ],
    providers:[
        StationService
    ],
    exports:[
        StationComponent,
        StationDetailComponent
    ]
})

export class StationModule{}