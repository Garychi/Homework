/**
 * Created by Mos on 2017/5/15.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenuModule} from '../menu/menu.module';

import {SideContentComponent} from './side-content.component';

@NgModule({
    imports: [
        BrowserModule,
        MenuModule
    ],
    declarations: [
        SideContentComponent
    ],
    exports:    [ SideContentComponent ]
})
export class SideContentModule { }