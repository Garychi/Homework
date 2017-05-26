/**
 * Created by Mos on 2016/11/22.
 */
import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menuBar',
    templateUrl: 'menu.component.html'
})

export class MenuComponent implements OnInit {

    private menuArray;

    ngOnInit(): void {
        this.menuArray = [
            // {"menuId": "0001", "menuName": "Home", "parent": "root", "menuPath": "/employee"},
            {"menuId": "0002", "menuName": "新增站點", "parent": "root", "menuPath": "station"},
            {"menuId": "0003", "menuName": "站點列表", "parent": "root", "menuPath": "stationDetail"},
            {"menuId": "0004", "menuName": "新增護士", "parent": "root", "menuPath": "employee"},
            {"menuId": "0005", "menuName": "護士列表", "parent": "root", "menuPath": "nurseDetail"}
        ];

    }

}