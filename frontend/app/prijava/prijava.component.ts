import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik.model';
import { KorisnikService } from '../korisnik.service';
import { Router } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { NekretninaService } from '../nekretnina.service';
import { Nekretnina } from '../models/nekretnina';


@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit {

  ukucaoPretragu:boolean;
  sveNekretnine: Nekretnina[];
  Nekretnine: Nekretnina[];
  pretrazene: Nekretnina[];
  pretraga:string;
  cenaOd:Number;
  cenaDo:Number;
  korime: string;
  lozinka: string;
  tip: string;
poruka2:string;
  poruka: string;
  brojSlika:number;
  constructor(private korisnikServis: KorisnikService,
    private ruter: Router, private nekretninaServis: NekretninaService) {
      this.cenaOd=null;
    this.cenaDo= null;
    this.pretraga=null;
    this.ukucaoPretragu=false;
     }

  ngOnInit(): void {
    // this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[])=>{
    //   this.sveNekretnine = data;
    // })
    let k = Math.floor(Math.random() * 5)+1;
    this.idSlike= k.toString();

    this.nekretninaServis.dohvatiSvePromoNekretnine().subscribe((data: Nekretnina[])=>{
      this.sveNekretnine = data;
    })
    this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[])=>{
      this.Nekretnine = data;
    })
    this.Nekretnine = [{}] as Array<Nekretnina>;
    for (let i = 0; i < this.Nekretnine.length; i++) {
      this.Nekretnine[i].galerija = [] as string[];
    }
    this.sveNekretnine = [{}] as Array<Nekretnina>;
    for (let i = 0; i < this.sveNekretnine.length; i++) {
      this.sveNekretnine[i].galerija = [] as string[];
    }
  }
  refresh(){
    window.location.reload();
  }
  idSlike:string;
  radnom(){
    let k = (Math.random() * 5)+1;
    this.idSlike= k.toString();
  }
  
  prijava() {
    this.korisnikServis.prijava(this.korime, this.lozinka, this.tip).subscribe((korisnik: Korisnik)=>{
      if (korisnik) {
        localStorage.setItem('ulogovan', JSON.stringify(korisnik));
        if(korisnik.tip=='registrovanKorisnik'){this.ruter.navigate(['korisnik']);}
        else{
          if(korisnik.tip=='admin'){this.ruter.navigate(['admin']);}
          else{this.ruter.navigate(['agent']);}
        }
      }
      else {
        this.poruka = 'Niste uneli ispravne podatke';
      }
    })
  }

  trazi(){

    if(this.pretraga!=null || this.cenaOd!=null || this.cenaDo!=null){
      this.ukucaoPretragu=true;
    this.nekretninaServis.traziNekretninu(this.pretraga,this.cenaOd,this.cenaDo).subscribe((podaci: Nekretnina[])=>{
      // this.sveNekretnine = podaci;
      this.Nekretnine = podaci;
      this.poruka2="";
    })
  }
  else this.poruka2='Morate uneti bar jedan parametar za pretragu.';
  this.cenaOd=null;
  this.cenaDo= null;
  this.pretraga=null;

}
  sortiraj(){
    this.Nekretnine.sort((a,b)=>{
       return (<number><unknown>a.cena) - (<number><unknown>b.cena);
    });      
  }
  // sortiraj(){
  //   this.sveNekretnine.sort((a,b)=>{
  //      return (<number><unknown>a.cena) - (<number><unknown>b.cena);
  //   });      
  // }
  navigiraj(section: string) {
    window.location.hash = '';
    window.location.hash = section;
    
}
dohvatiBrojSlika(n: Nekretnina):Number{
  this.brojSlika= n.galerija.length;
  return this.brojSlika;
}


}
