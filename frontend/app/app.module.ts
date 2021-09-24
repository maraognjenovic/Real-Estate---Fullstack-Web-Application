import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { AgentComponent } from './agent/agent.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { NekretnineComponent } from './nekretnine/nekretnine.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';

import { Chart } from 'chart.js';  
@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    AdminComponent,
    KorisnikComponent,
    AgentComponent,
    RegistracijaComponent,
    NekretnineComponent,
    NekretninaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
