import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import {HttpModule, JsonpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate';

import '../rxjs-operators';

//custom Module
import {MainContentModule} from '../views/base/main-content.module';
import {SideContentModule} from '../views/base/side-content.module';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent}   from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        Ng2BootstrapModule,
        MainContentModule,
        SideContentModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule,
        TranslateModule.forRoot(),
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [

    ]
})
export class AppModule {}

