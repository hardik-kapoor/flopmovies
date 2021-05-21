import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RouterTable} from '../assets/router-table';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorEditComponent } from './actor-edit/actor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    ActorListComponent,
    ActorEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,
    RouterModule.forRoot(RouterTable),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
