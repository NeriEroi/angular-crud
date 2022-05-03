import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http requests
import { HttpClientModule } from '@angular/common/http';
// / http requests

// post request
import { FormsModule } from '@angular/forms';
// post request

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
