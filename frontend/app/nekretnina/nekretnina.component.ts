import { Component, OnInit } from '@angular/core';
import { NekretninaService } from '../nekretnina.service';
import { Nekretnina } from '../models/nekretnina';
import { ActivatedRoute, Router } from '@angular/router';
import { Izdavanje } from '../models/izdavanje';
import { Korisnik } from '../models/korisnik.model';

@Component({
  selector: 'app-nekretnina',
  templateUrl: './nekretnina.component.html',
  styleUrls: ['./nekretnina.component.css']
})
export class NekretninaComponent implements OnInit {
  
  idSlike:string;
  opis: string;
  adresa: string;
  tip: string;
  sprat: string;
  kvadratura: string;
  sobe: string;
  namestenost: string;
  izdavanje: string;
  galerija: string[];
  // cena:string;
  cena: number;
  vlasnik: string;
  id: string;
  idn: string;
  promo: boolean;
  poruka: string;
  mojaNekretnina: Nekretnina;
  iz: Izdavanje;
  plati: string;
  constructor(private nekretninaServis: NekretninaService, private ruter: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ja = JSON.parse(localStorage.getItem('ulogovan'));
    let k = Math.floor(Math.random() * 5)+1;
    this.idSlike= k.toString();
    this.mojaNekretnina = {} as Nekretnina;
    this.route.params.subscribe(params=>{
      this.id = params["id"];
      this.nekretninaServis.dohvatiNekretninuPoId(this.id).subscribe((data: Nekretnina)=>{
        if (data != null) {
          this.mojaNekretnina = data;
        }

      })
    })

  }
  refresh(){
    window.location.reload();
  }
  proveriDostupnost(id, datumOd, datumDo) {
    this.nekretninaServis.dohvatiIzdavanjePoId(this.id).subscribe((podaci: Izdavanje)=>{
      this.iz = podaci;
    })


  }

  ja: Korisnik;
  kupi() {
    if (this.plati == 'kredit') {
      console.log(this.mojaNekretnina.cena);
      this.poruka = 'Ucesce u kreditu je: ' + (String)(this.mojaNekretnina.cena / 5);

    }
    else if (this.plati == 'kes') {
      this.poruka = "Cena koju treba da platite je: " + this.mojaNekretnina.cena;
    }
    else{this.poruka="Unesite nacin placanja";}
    this.nekretninaServis.kupi(this.mojaNekretnina.opis,this.mojaNekretnina.adresa,this.mojaNekretnina.tip,this.mojaNekretnina.sprat,this.mojaNekretnina.kvadratura,this.mojaNekretnina.sobe,this.mojaNekretnina.namestenost,this.mojaNekretnina.izdavanje,this.mojaNekretnina.galerija,this.mojaNekretnina.cena,this.mojaNekretnina.vlasnik,this.mojaNekretnina.id,this.mojaNekretnina.promo,this.ja.korime).subscribe((podaci: Nekretnina)=>{

    })
  }
}
