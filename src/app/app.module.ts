import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { CustomUppercasePipe } from './custom-uppercase.pipe';  // Import the custom pipe

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    CustomUppercasePipe  // Declare the custom pipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
