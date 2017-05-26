import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EmployeeComponent} from '../views/employee/employee.component';
import {NurseDetailComponent} from '../views/employee/nurseDetail.component';
import {StationComponent} from '../views/station/station.component';
import {StationDetailComponent} from '../views/station/stationDetail.component';
import {SideContentComponent} from '../views/base/side-content.component';

import {serverPath} from './serverConfig.module';

const routes: Routes = [
    {path: '', redirectTo:serverPath+'menu', pathMatch: 'full'},
    {path: serverPath+'menu', component: SideContentComponent},
    {path: serverPath+'employee', component: EmployeeComponent},
    {path: serverPath+'nurseDetail', component: NurseDetailComponent},
    {path: serverPath+'station', component: StationComponent},
    {path: serverPath+'stationDetail', component: StationDetailComponent},
    {path: 'Homerork', component: SideContentComponent}
    // { path: 'detail/:id', component: HeroDetailComponent }

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
