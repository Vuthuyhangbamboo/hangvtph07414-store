import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//client NgModule
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RoutingModule ],
  declarations: [ AppComponent, HelloComponent, BannerComponent, NavComponent ],
  // providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
