import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { FeatureSelectComponent } from './feature-select/feature-select.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { TabPageComponent } from './tab-page/tab-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    FeatureSelectComponent,
    DashboardPageComponent,
    ListPageComponent,
    TabPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class PagesModule { }