import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule
  ],
  exports: [CarsListComponent]
})
export class CarsModule { }
