import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { HomeCompComponent } from './home-comp/home-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    HomeCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
