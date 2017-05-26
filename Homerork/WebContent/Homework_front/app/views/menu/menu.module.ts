/**
 * Created by Mos on 2016/11/22.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import {MenuComponent} from './menu.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ],
    providers:[

    ]
})

export class MenuModule {}