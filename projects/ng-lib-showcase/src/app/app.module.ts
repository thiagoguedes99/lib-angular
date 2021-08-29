import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularLibModule, CircleProgressModule } from '../../../angular-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularLibModule,
    CircleProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
