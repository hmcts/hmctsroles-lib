import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HmctsrolesLibModule} from '../../projects/hmctsroles-lib/src/lib/hmctsroles-lib.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HmctsrolesLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
