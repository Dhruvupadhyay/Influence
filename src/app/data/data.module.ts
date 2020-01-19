import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HighchartsChartComponent } from 'highcharts-angular';
import { MatIconModule,MatCardModule} from '@angular/material';
import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './service/apiservice';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
      DataComponent,
    HighchartsChartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,DataRoutingModule,
    MatCardModule,
FlexLayoutModule,
RatingModule
  ],
  providers:[ApiService]
  
})
export class DataModule { }
