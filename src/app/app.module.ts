import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
