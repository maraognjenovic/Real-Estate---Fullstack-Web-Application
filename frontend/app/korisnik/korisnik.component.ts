import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik.model';
import { kupovinaNekretnina } from '../models/kupovina';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';
import { NekretninaComponent } from '../nekretnina/nekretnina.component';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  opis2: string;
  adresa2: string;
  tip2: string;
  sprat2: string;
  kvadratura2: string;
  sobe2: string;
  namestenost2: string;
  izdavanje2: string;
  cena2: string;
  vlasnik2: string;
  id2: string;
  promo2: string;

  constructor(private korisnikServis: KorisnikService, private nekretninaServis: NekretninaService,
    private ruter: Router) {
    this.cenaOd = null;
    this.cenaDo = null;
    this.pretraga = null;
  }
  pretraga: string;
  cenaOd: Number;
  cenaDo: Number;
  korime: string;
  lozinka: string;
  ime: string;
  prezime: string;
  mejl: string;
  grad: string;
  drzava: string;
  slika: string;
  tip: string;

  poruka: string;
  ngOnInit(): void {
    this.ja = JSON.parse(localStorage.getItem('ulogovan'));
    if (this.ja == null || this.ja.tip != 'registrovanKorisnik' || this.ja.tip == null) {
      //localStorage.clear();
      this.ruter.navigate(['']);
    }
    let k = Math.floor(Math.random() * 5) + 1;
    this.idSlike = k.toString();
    this.galerija = [] as string[];
    this.gallery = [] as string[];
    this.mojeNekretnine = [{}] as Array<Nekretnina>;
    this.sveNekretnine = [{}] as Array<Nekretnina>;
    this.promoNekretnine = [{}] as Array<Nekretnina>;
    this.sveNoveNekretnine = [{}] as Array<kupovinaNekretnina>;
    for (let i = 0; i < this.promoNekretnine.length; i++) {
      this.promoNekretnine[i].galerija = [] as string[];
    }
    for (let i = 0; i < this.sveNekretnine.length; i++) {
      this.sveNekretnine[i].galerija = [] as string[];
    }
    for (let i = 0; i < this.mojeNekretnine.length; i++) {
      this.mojeNekretnine[i].galerija = [] as string[];
    }
    this.nekretninaServis.dohvatiSvePromoNekretnine().subscribe((data: Nekretnina[]) => {
      this.promoNekretnine = data;
    })
    this.nekretninaServis.dohvatiSveKupovine(this.ja.korime).subscribe((data: kupovinaNekretnina[]) => {
      this.sveNoveNekretnine = data;
    })
    this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[]) => {
      this.sveNekretnine = data;
    })
    this.nekretninaServis.dohvatiMojeNekretnine(this.ja.korime).subscribe((data: Nekretnina[]) => {
      this.mojeNekretnine = data;
    })
  }
  promoNekretnine: Nekretnina[];
  dohvacena: Nekretnina;
  mojeNekretnine: Nekretnina[]
  ja: Korisnik;
  staralozinka: string;
  novoKorIme: string;
  novoime: String;
  novoprezime: String;
  novalozinka: string;
  novalozinka2: string;
  novimejl: string;
  novigrad: string;
  novadrzava: string;
  novaslika: string;
  novitip: string;
  sveNoveNekretnine: kupovinaNekretnina[];
  opis: string;
  adresa: string;
  tipn: string;
  sprat: string;
  kvadratura: string;
  sobe: string;
  namestenost: string;
  izdavanje: string;
  galerija: string[];
  cena: number;
  vlasnik: string;
  id: string;
  promo: boolean;

  sveNekretnine: Nekretnina[];

  idSlike: string;
  radnom() {
    let k = (Math.random() * 5) + 1;
    this.idSlike = k.toString();
  }
  izmeniKorIme() {
    if (this.novoKorIme != this.ja.korime && this.novoKorIme != undefined && this.novoKorIme != null) {
      this.korisnikServis.izmeniKorIme(this.novoKorIme, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio ime') {
        }
        this.poruka = 'Uspesno ste izmenili ime na ' + this.novoKorIme;

        this.odjaviSe();



      })
    }
    else {
      this.poruka = 'Niste izmenili ime';
      //setTimeout(location.reload.bind(location), 6000);

    }

  }

  izmeniIme() {
    if (this.novoime != this.ja.ime && this.novoime != undefined && this.novoime != null) {
      this.korisnikServis.izmeniIme(this.novoime, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio ime') {
        }

        this.poruka = 'Uspesno ste izmenili ime na ' + this.novoime;
        this.odjaviSe();

      })
    }
    else {
      setTimeout(location.reload.bind(location), 6000);
      this.poruka = 'Niste izmenili ime';

    }
  }
  izmeniPrezime() {
    if (this.novoprezime != this.ja.prezime && this.novoprezime != undefined && this.novoprezime != null) {
      this.korisnikServis.izmeniPrezime(this.novoprezime, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {

        this.poruka = 'Uspesno ste izmenili prezime na ' + this.novoprezime;
        this.odjaviSe();

      })

    }
    else {
      this.poruka = 'Niste izmenili prezime';
    }
  }
  izmeniLozinku() {
    if (this.ja.lozinka == this.staralozinka && this.novalozinka != this.ja.lozinka && this.novalozinka != undefined && this.novalozinka != null && this.novalozinka == this.novalozinka2 && (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/.test(this.novalozinka))) {
      this.korisnikServis.izmeniLozinku(this.novalozinka, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {


        this.poruka = 'Uspesno ste izmenili lozinku';
        this.odjaviSe();
      })
    }

    else {
      this.poruka = 'Niste izmenili lozinku';
    }

  }
  izmeniGrad() {
    if (this.novigrad != this.ja.grad && this.novigrad != undefined && this.novigrad != null) {
      this.korisnikServis.izmeniGrad(this.novigrad, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio grad') {
        }


        this.poruka = 'Uspesno ste izmenili grad na ' + this.novigrad;
        this.odjaviSe();
      })
    }
    else {
      this.poruka = 'Niste izmenili grad';
    }
  }
  izmeniDrzavu() {
    if (this.novadrzava != this.ja.drzava && this.novadrzava != undefined && this.novadrzava != null) {
      this.korisnikServis.izmeniDrzavu(this.novadrzava, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio drzavu') {
        }

        this.poruka = 'Uspesno ste izmenili drzavu na ' + this.novadrzava;
        this.odjaviSe();

      })
    }
    else {
      this.poruka = 'Niste izmenili drzavu';
    }
  }
  izmeniTip() {
    if (this.novitip != this.ja.tip && this.novitip != undefined && this.novitip != null) {
      this.korisnikServis.izmeniTip(this.novitip, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio tip') {
        }

        this.poruka = 'Uspesno ste izmenili tip na ' + this.novitip;
        this.odjaviSe();

      })
    }
    else {
      this.poruka = 'Niste izmenili tip';
    }
  }

  izmeniMejl() {
    if (this.novimejl != this.ja.mejl && this.novimejl != undefined && this.novimejl != null) {
      this.korisnikServis.izmeniMejl(this.novimejl, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio tip') {
        }

        this.poruka = 'Uspesno ste izmenili mejl na ' + this.novimejl;
        this.odjaviSe();

      })
    }
    else {
      this.poruka = 'Niste izmenili tip';
    }
  }
  izmeniSliku() {
    if (this.novaslika != undefined && this.novaslika != null) {
      this.korisnikServis.izmeniSliku(this.novaslika, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {
        this.ja.slika = this.novaslika;
        // setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili sliku';
        this.odjaviSe();

      })
    }
    else {
      this.poruka = 'Niste izmenili sliku';
    }
  }



  prihvatiKupovinu(k) {
    this.nekretninaServis.prihvatiKupovinu2(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
      this.nekretninaServis.obrisiOstalePonude(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
        this.nekretninaServis.dohvatiSveKupovine(this.ja.korime).subscribe((data: kupovinaNekretnina[]) => {
          this.sveNoveNekretnine = data;
        })
      })
    })
    this.obrisiKupovinu(k);
  }
  obrisiKupovinu(k) {
    this.nekretninaServis.obrisiKupovinu(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
      if (response['message'] == 'Nekretnina je obrisana') {
      }
      this.nekretninaServis.dohvatiSveKupovine(this.ja.korime).subscribe((data: kupovinaNekretnina[]) => {
        this.sveNoveNekretnine = data;
      })
    })

  }
  obrisiOstalePonude(k) {
    this.nekretninaServis.obrisiOstalePonude(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
      if (response['message'] == 'Nekretnina je obrisana') {
      }
      this.nekretninaServis.dohvatiSveKupovine(this.ja.korime).subscribe((data: kupovinaNekretnina[]) => {
        this.sveNoveNekretnine = data;
      })
    })
  }
  ubaci() {
    this.promo = false;
    this.nekretninaServis.ubaci(this.opis, this.adresa, this.tip, this.sprat, this.kvadratura, this.sobe, this.namestenost, this.izdavanje, this.galerija, this.cena, this.ja.korime, this.id, this.promo).subscribe(response => {
      if (response['message'] == 'nekretnina je dodata') {

      } this.poruka = response['message'];
    })
    this.refresh();
  }
  trazi() {

    this.nekretninaServis.traziNekretninu(this.pretraga, this.cenaOd, this.cenaDo).subscribe((podaci: Nekretnina[]) => {
      this.sveNekretnine = podaci;
    })
  }
  sortiraj() {
    this.sveNekretnine.sort((a, b) => {
      return (<number><unknown>a.cena) - (<number><unknown>b.cena);
    });
  }
  navigiraj(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
  refresh() {
    window.location.reload();
  }
  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }
  clickedChg: boolean = false;
  descr: string;
  change(d) {
    this.clickedChg = true;
    this.descr = d;

  }

  messageUpdate: string;
  izmeniNekretninu(id) {
    this.clickedChg = true;
    this.izmeniOvu = id;
    this.nekretninaServis.dohvatiNekretninuPoId(this.izmeniOvu).subscribe((data: Nekretnina) => {
      this.dohvacena = data;
      this.dohvacena.galerija = [] as string[];
    })
    this.navigiraj('tr1');

  }
  izmeniOvu: string;
  gallery: string[];
  update(id) {
    this.nekretninaServis.azuriraj(id, this.opis2, this.adresa2, this.tip2, this.sprat2, this.kvadratura2, this.sobe2, this.namestenost2, this.izdavanje2, this.gallery, this.cena2, this.vlasnik2, this.id2, this.promo2).subscribe(
      (res) => {
        if (res['message'] == 'Nekretnina je azurirana') {
          this.clickedChg = false;
          this.nekretninaServis.dohvatiMojeNekretnine(this.ja.korime).subscribe((data: Nekretnina[]) => {
            this.mojeNekretnine = data;
            this.refresh();
            // this.odjaviSe();
          })
        } else {
          this.messageUpdate = "'Nesto je poslo po zlu kod azuriranja nekretnine'"
        }
      }
    )
  }

  changeProperty(event: any) {
    let cnt = 0;
    for (let i of event.target.files) {
      this.galerija[cnt] = i.name;
      console.log(this.galerija[cnt])
      cnt++;
    }
  }
  changePropertyGallery(event: any) {
    let cnt = 0;
    for (let i of event.target.files) {
      this.gallery[cnt] = i.name;
      console.log(this.gallery[cnt])
      cnt++;
    }
  }
  promeniProfilnu(event: any) {
    this.novaslika = event.target.files[0].name;
    this.ja.slika = this.novaslika;
  }
}
