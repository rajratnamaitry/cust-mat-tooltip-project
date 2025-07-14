import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatCustomTooltipModule } from '../../node_modules/mat-custom-tooltip/src/public-api';
import { MatCustomTooltipModule } from 'mat-custom-tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatCustomTooltipModule,
    MatTooltipModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
