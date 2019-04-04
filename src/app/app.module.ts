import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarsModule} from './cars/cars.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { SidebarComponent } from './core-module/sidebar/sidebar.component';
import {CoreModuleModule} from './core-module/core-module.module';

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
    CoreModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
