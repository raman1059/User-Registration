import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { Routes, RouterModule } from "@angular/router";
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';


const routes: Routes = [
  {
    path: '',
    component: DataFormComponent
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DisplayUserDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
