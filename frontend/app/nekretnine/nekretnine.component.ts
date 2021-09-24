import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik.model';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';

@Component({
  selector: 'app-nekretnine',
  templateUrl: './nekretnine.component.html',
  styleUrls: ['./nekretnine.component.css']
})
export class NekretnineComponent implements OnInit {

  constructor(private nekretninaServis: NekretninaService, private ruter: Router) {     this.cenaOd=null;
    this.cenaDo= null;
    this.pretraga=null;}

  ngOnInit(): void {
    this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[])=>{
      this.sveNekretnine = data;
    })

  }

  opis:string;
  adresa:string;
  tip:string;
  sprat:string;
  kvadratura:string;
  sobe:string;
  namestenost:string;
  izdavanje:string;
  galerija:string[];
  // cena:string;
  cena:Number;
  vlasnik:string;
  id:string;
  promo:boolean;
  korisnik: Korisnik;


  poruka:string;
  sveNekretnine: Nekretnina[];
  pretrazene: Nekretnina[];
  obrisi(k){
    this.nekretninaServis.obrisiNekretninu(k.id).subscribe(response=>{
      if(response['message']=='Korisnik je obrisan'){
      }
    })

  }
  odjaviSe(){
    localStorage.clear();
    this.ruter.navigate(['']);
  }
  pretraga: string;
  cenaOd:string;
  cenaDo: string;
  trazi(){

    this.nekretninaServis.traziNekretninu(this.pretraga,this.cenaOd,this.cenaDo).subscribe((podaci: Nekretnina[])=>{
      this.sveNekretnine = podaci;
    })
  }
  // traziCenu(){
  //   this.nekretninaServis.traziNekretninuCena(this.cenaOd,this.cenaDo).subscribe((podaci: Nekretnina[])=>{
  //     this.sveNekretnine = podaci;
  //   })
  // }


  sortiraj(){
    this.sveNekretnine.sort((a,b)=>{
       return (<number><unknown>a.cena) - (<number><unknown>b.cena);
    });      
  }
  ubaci(){ 
    
    this.nekretninaServis.ubaci(this.opis,this.adresa,this.tip,this.sprat,this.kvadratura,this.sobe,this.namestenost,this.izdavanje,this.galerija,this.cena,this.vlasnik,this.id,this.promo).subscribe(response=>{      
      if(response['message']=='nekretnina je dodata'){
    } })
  }


}
