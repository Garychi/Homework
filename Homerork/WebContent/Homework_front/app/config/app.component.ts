import {Component, OnInit} from '@angular/core';
// import {i18nService} from "../service/i18nService";

@Component({
    selector: 'my-app',
    template: `
        <div class="base">
            <div class="base-header">
                <h1>站點管理系統</h1>
            </div>
            <div class="base-content">
                <!--<div id="side-content">-->
                <!--<side-content></side-content>-->
                <!--</div>-->
                <div class="main-content">
                    <main-content></main-content>
                </div>
            </div>
        </div>
    `
})

export class AppComponent implements OnInit {

    // constructor(private i18nService :i18nService) {
    //
    // }

    ngOnInit() {
        console.log('app_component init complete');
    }

}


