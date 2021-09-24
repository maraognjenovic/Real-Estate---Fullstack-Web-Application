import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AgentComponent } from './agent/agent.component';
import { KorisnikComponent } from './korisnik/korisnik.component';
import { NekretninaComponent } from './nekretnina/nekretnina.component';
import { NekretnineComponent } from './nekretnine/nekretnine.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';

const routes: Routes = [
  {path: '', component: PrijavaComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'korisnik', component: KorisnikComponent},
  {path: 'agent', component: AgentComponent},
  {path: 'registracija', component: RegistracijaComponent},
  {path: 'nekretnine', component: NekretnineComponent},
  {path:"nekretnina/:id", component:NekretninaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
