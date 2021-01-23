import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts'; // npm install @angular/cdk --save For runing

@NgModule({
  declarations: [HeaderComponent, ChartComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderComponent,
    ChartComponent,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
})
export class ComponentsModule {}
