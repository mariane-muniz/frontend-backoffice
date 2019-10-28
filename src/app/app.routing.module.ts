import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { FeatureSelectComponent } from './pages/feature-select/feature-select.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { TabPageComponent } from './pages/tab-page/tab-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const ROUTES: Routes = [
    { path: "", component: FeatureSelectComponent },
    { path: "dashboard", component: DashboardPageComponent },
    { path: "list", component: ListPageComponent},
    { path: "tab", component: TabPageComponent },
    { path: "login", component: LoginPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
})
export class RoutingModule {}