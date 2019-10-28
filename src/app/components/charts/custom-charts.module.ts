import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { LineChartComponent } from './line-chart/line-chart.component';

const CHARTS = [
  LineChartComponent
];

@NgModule({
  declarations: CHARTS,
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: CHARTS
})
export class CustomChartsModule { }
