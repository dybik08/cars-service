import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarsModule} from './cars/cars.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CoreModuleModule} from './core-module/core-module.module';
import {CarsRoutingModule} from './cars/cars-routing.module';
import {CarsService} from './cars/cars.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CarsModule,
    CoreModuleModule,
    CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
