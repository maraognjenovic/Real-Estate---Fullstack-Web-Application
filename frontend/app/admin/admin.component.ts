import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik.model';
import { Nekretnina } from '../models/nekretnina';
import {
  Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip
} from 'chart.js';
import { NekretninaService } from '../nekretnina.service';
import { kupljenaNekretnina } from '../models/kupljena';
Chart.register(
  ArcElement, LineElement, BarElement, PointElement, RadarController, ScatterController, CategoryScale, LinearScale, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip
);
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private korisnikServis: KorisnikService, private nekretninaServis: NekretninaService,
    private ruter: Router) {
    this.azuriranje = false;
  }

  ngOnInit(): void {

    this.korisnik = JSON.parse(localStorage.getItem('ulogovan'));
    this.ja = this.korisnik;
    if (this.korisnik == null || this.korisnik.tip != 'admin' || this.korisnik.tip == null) {
      // localStorage.clear();
      this.ruter.navigate(['']);
    }
    this.ja = this.korisnik;
    this.sveNoveKupljeneNekretnine = [{}] as Array<kupljenaNekretnina>;
    let k = Math.floor(Math.random() * 5) + 1;
    this.idSlike = k.toString();
    this.galerija = [] as string[];
    this.imenaGradova = [] as string[];
    this.brojNekretninaUGradovima = [] as number[];
    this.sveNekretnine = [{}] as Array<Nekretnina>;
    this.sveNoveNekretnine = [{}] as Array<Nekretnina>;

    for (let i = 0; i < this.sveNoveNekretnine.length; i++) {
      this.sveNoveNekretnine[i].galerija = [] as string[];
    }
    for (let i = 0; i < this.sveNoveKupljeneNekretnine.length; i++) {
      this.sveNoveKupljeneNekretnine[i].galerija = [] as string[];
    }
    for (let i = 0; i < this.sveNekretnine.length; i++) {
      this.sveNekretnine[i].galerija = [] as string[];
    }
    this.nekretninaServis.dohvatiSveRealizovaneKupovine().subscribe((data: kupljenaNekretnina[]) => {
      this.sveNoveKupljeneNekretnine = data;
    })

    this.nekretninaServis.brojSvihNekretnina().subscribe((podatak: number) => {
      this.brSvihNekretnina = podatak;
      this.nekretninaServis.brojNekretninaUGradu('Valjevo').subscribe((podatak: number) => {
        this.valjevo = podatak;
        this.nekretninaServis.brojNekretninaUGradu('Beograd').subscribe((podatak: number) => {
          this.beograd = podatak;
          this.nekretninaServis.brojNekretninaUGradu('Cacak').subscribe((podatak: number) => {
            this.cacak = podatak;
            this.nekretninaServis.brojNekretninaUGradu('Sabac').subscribe((podatak: number) => {
              this.sabac = podatak;
              this.nekretninaServis.brojNekretninaUGradu('Leskovac').subscribe((podatak: number) => {
                this.leskovac = podatak;
                this.nekretninaServis.brojNekretninaUGradu('Bela Crkva').subscribe((podatak: number) => {
                  this.belaCrkva = podatak;
                  this.nekretninaServis.brojNekretninaCena(0, 10000).subscribe((podatak: number) => {
                    this.rasponPrvi = podatak;
                    this.nekretninaServis.brojNekretninaCena(10001, 20000).subscribe((podatak: number) => {
                      this.rasponDrugi = podatak;
                      this.nekretninaServis.brojNekretninaCena(20001, 30000).subscribe((podatak: number) => {
                        this.rasponTreci = podatak;
                        this.nekretninaServis.brojNekretninaCena(30001, 40000).subscribe((podatak: number) => {
                          this.rasponCetvrti = podatak;
                          this.nekretninaServis.brojNekretninaCena(40001, 50000).subscribe((podatak: number) => {
                            this.rasponPeti = podatak;
                            this.nekretninaServis.brojNekretninaCena(50001, 60000).subscribe((podatak: number) => {
                              this.rasponSesti = podatak;
                              this.nekretninaServis.brojNekretninaCena(60001, 70000).subscribe((podatak: number) => {
                                this.rasponSedmi = podatak;
                                this.nekretninaServis.brojNekretninaCena(70001, 80000).subscribe((podatak: number) => {
                                  this.rasponOsmi = podatak;
                                  this.nekretninaServis.brojNekretninaCena(80001, 90000).subscribe((podatak: number) => {
                                    this.rasponDeveti = podatak;
                                    this.nekretninaServis.brojNekretninaCena(90001, 100000).subscribe((podatak: number) => {
                                      this.rasponPrvi0 = podatak;
                                      this.nekretninaServis.brojNekretninaCena(100001, 999999).subscribe((podatak: number) => {
                                        this.rasponPrvi1 = podatak;
                                        this.nekretninaServis.brojStanovaIzdavanje().subscribe((podatak: number) => {
                                          this.stanoviIzdavanje = podatak;
                                          this.nekretninaServis.brojStanovaProdaja().subscribe((podatak: number) => {
                                            this.stanoviProdaja = podatak;
                                            this.nekretninaServis.brojKucaIzdavanje().subscribe((podatak: number) => {
                                              this.kuceIzdavanje = podatak;
                                              this.nekretninaServis.brojKucaProdaja().subscribe((podatak: number) => {
                                                this.kuceProdaja = podatak;
                                                this.ostalo = this.brSvihNekretnina - (this.valjevo + this.beograd + this.cacak + this.belaCrkva + this.leskovac + this.sabac);
                                                {
                                                  new Chart("myChart", {
                                                    type: 'pie',
                                                    data: {
                                                      labels: ['Valjevo', 'Beograd', 'Cacak', 'Sabac', 'Leskovac', 'Bela Crkva', 'Ostalo'],
                                                      datasets: [{
                                                        label: 'Broj nekretnine po gradovima',
                                                        data: [this.valjevo, this.beograd, this.cacak, this.sabac, this.leskovac, this.belaCrkva, this.ostalo],
                                                        backgroundColor: [
                                                          '	#ffcaca',
                                                          '	#aff8db',
                                                          '#feffb8',
                                                          '#b28dff',
                                                          '#c8e5ff',
                                                          '#f6a6ff',
                                                          '#dcd3ff'
                                                        ]
                                                      }]
                                                    },
                                                    options: {
                                                      responsive: true,
                                                      plugins: {
                                                        legend: {
                                                          position: 'bottom',
                                                        },
                                                        title: {
                                                          display: true,
                                                          text: 'Nekretnine po gradovima'
                                                        }
                                                      }
                                                    },
                                                  });
                                                }

                                                {
                                                  new Chart("cenovniRang", {
                                                    type: 'pie',
                                                    data: {
                                                      labels: ['[0-10000]', '[10000-20000]', '[20000-30000]', '[30000-40000]', '[40000-50000]', '[50000-60000]', '[60000-70000]', '[70000-80000]', '[80000-90000]', '[90000-100000]', '[>100000 ]'],
                                                      datasets: [{
                                                        label: 'Nekretnine po gradovima',
                                                        data: [this.rasponPrvi, this.rasponDrugi, this.rasponTreci, this.rasponCetvrti, this.rasponPeti, this.rasponSesti, this.rasponSedmi, this.rasponOsmi, this.rasponDeveti, this.rasponPrvi0, this.rasponPrvi1],
                                                        backgroundColor: [
                                                          '	#ffcaca',
                                                          '	#aff8db',
                                                          '#feffb8',
                                                          '#b28dff',
                                                          '#c8e5ff',
                                                          '#f6a6ff',
                                                          '#dcd3ff',
                                                          '#ea5e76',
                                                          '#7cbfb6',
                                                          '#57838d',
                                                          '#ccadb2'
                                                        ]
                                                      }]
                                                    },
                                                    options: {
                                                      responsive: true,
                                                      plugins: {
                                                        legend: {
                                                          position: 'bottom',
                                                        },
                                                        title: {
                                                          display: true,
                                                          text: 'Cenovnom rang'
                                                        }
                                                      }
                                                    },
                                                  });
                                                }


                                                {
                                                  new Chart("stanovi", {
                                                    type: 'pie',
                                                    data: {
                                                      labels: ['Stanovi koji se izdaju', 'Stanovi koji se prodaju', 'Kuce koji se izdaju', 'Kuce koji se prodaju'],
                                                      datasets: [{
                                                        data: [this.stanoviIzdavanje, this.stanoviProdaja, this.kuceIzdavanje, this.kuceProdaja],
                                                        backgroundColor: [
                                                          '#ea5e76',
                                                          '#7cbfb6',
                                                          '#57838d',
                                                          '#ccadb2'
                                                        ]
                                                      }]
                                                    },
                                                    options: {
                                                      responsive: true,
                                                      plugins: {
                                                        legend: {
                                                          position: 'bottom',
                                                        },
                                                        title: {
                                                          display: true,
                                                          text: 'Stanovi / kuce za izdavanje / prodaju'
                                                        }
                                                      }
                                                    },
                                                  });
                                                }
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })


    this.korisnikServis.dohvatiSveNoveKorisnike().subscribe((data: Korisnik[]) => {
      this.sviKorisnici = data;
    })
    this.korisnikServis.dohvatiSveKorisnike().subscribe((data: Korisnik[]) => {
      this.korisnici = data;
    })
    this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[]) => {
      this.sveNekretnine = data;
    })
    this.nekretninaServis.dohvatiSveNoveNekretnine().subscribe((data: Nekretnina[]) => {
      this.sveNoveNekretnine = data;
    })

  }

  adresica: string[];
  ja: Korisnik;
  sveNoveKupljeneNekretnine: kupljenaNekretnina[];
  korisnik: Korisnik;
  idSlike: string;
  korime: string;
  lozinka: string;
  ime: string;
  prezime: string;
  mejl: string;
  grad: string;
  drzava: string;
  slika: string;
  tip: string;
  sviKorisnici: Korisnik[];

  brojRazlicitihGradova: number;
  brojNekretninaUGradovima: number[];
  imenaGradova: string[];
  sveAdrese: string[];
  korisnici: Korisnik[];
  sveNoveNekretnine: Nekretnina[];
  lozinka2: string;
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

  stanoviIzdavanje: number;
  stanoviProdaja: number;
  kuceIzdavanje: number;
  kuceProdaja: number;
  rasponPrvi: number;
  rasponDrugi: number;
  rasponTreci: number;
  rasponCetvrti: number;
  rasponPeti: number;
  rasponSesti: number;
  rasponSedmi: number;
  rasponOsmi: number;
  rasponDeveti: number;
  rasponPrvi0: number;
  rasponPrvi1: number;

  novoKorIme: string;
  staralozinka: string;
  novoime: String;
  novoprezime: String;
  novalozinka: string;
  novalozinka2: string;
  novimejl: string;
  novigrad: string;
  novadrzava: string;
  novaslika: string;
  novitip: string;

  brSvihNekretnina: number;
  valjevo: number;
  beograd: number;
  cacak: number;
  sabac: number;
  leskovac: number;
  belaCrkva: number;
  ostalo: number;
  poruka: string;
  sveNekretnine: Nekretnina[];
  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }

  prihvati(k) {
    this.korisnikServis.prihvatiRegistraciju(k.korime, k.lozinka, k.ime, k.prezime, k.mejl, k.grad, k.drzava, k.slika, k.tip).subscribe(response => {
      this.poruka = response['message'];
    })
    this.obrisi(k);
  }
  obrisi(k) {
    this.korisnikServis.obrisi(k.korime, k.lozinka, k.ime, k.prezime, k.mejl, k.grad, k.drzava, k.slika, k.tip).subscribe(response => {
      this.poruka = response['message'];
      this.korisnikServis.dohvatiSveNoveKorisnike().subscribe((data: Korisnik[]) => {
        this.korisnici = data;
      })
    })

  }
  obrisiKorisnika(k) {
    this.korisnikServis.obrisiKorisnika(k.korime, k.lozinka, k.ime, k.prezime, k.mejl, k.grad, k.drzava, k.slika, k.tip).subscribe(response => {
      this.poruka = response['message'];
      this.nekretninaServis.obrisiSveKorisnikoveNekretnine(k.korime).subscribe(response => {
      })
      this.korisnikServis.dohvatiSveKorisnike().subscribe((data: Korisnik[]) => {
        this.korisnici = data;
      })
    })

  }
  prihvatiNovuNekretninu(k) {
    this.nekretninaServis.prihvatiUbacivanje(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo).subscribe(response => {
      this.poruka = response['message'];
      setTimeout(location.reload.bind(location), 3000);
    })
    this.obrisiZahtevZaNekretninu(k);
  }
  obrisiZahtevZaNekretninu(k) {
    this.nekretninaServis.obrisiNovuNekretninu(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo).subscribe(response => {
      this.poruka = response['message'];
      setTimeout(location.reload.bind(location), 3000);
    })

  }
  registrujSe() {

    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/.test(this.lozinka) && this.lozinka2 == this.lozinka) {
      this.korisnikServis.prihvatiRegistraciju(this.korime, this.lozinka, this.ime, this.prezime, this.mejl, this.grad, this.drzava, this.slika, this.tip).subscribe(response => {
        this.poruka = response['message'];
        setTimeout(location.reload.bind(location), 6000);
      })
    } else {
      if (this.lozinka == this.lozinka2)
        this.poruka = "Lozinka je u pogresnom formatu";
      else
        this.poruka = "Lozinke se ne poklapaju";
    }
  }

  refresh() {
    window.location.reload();
  }

  ubaciDirekt() {

    this.nekretninaServis.ubaciDirekt(this.opis, this.adresa, this.tip, this.sprat, this.kvadratura, this.sobe, this.namestenost, this.izdavanje, this.galerija, this.cena, this.vlasnik, this.id, this.promo).subscribe(response => {
      this.poruka = response['message'];
      setTimeout(location.reload.bind(location), 3000);
    })
  }
  navigiraj(section: string) {
    location.hash = '';
    location.hash = section;
  }
  brojNekretninaUGradu() {
    this.nekretninaServis.brojNekretninaUGradu('Valjevo').subscribe((data: number) => {
      this.valjevo = data;
    })
  }
  brojSvihNekretnina() {
    this.nekretninaServis.brojSvihNekretnina().subscribe((data: number) => {
      this.brSvihNekretnina = data;
    })
  }
  brojNekretninaCena(cenaOd, cenaDo) {
    this.nekretninaServis.brojNekretninaCena(cenaOd, cenaDo).subscribe((data: number) => {
      this.rasponPrvi = data;
    })
  }
  brojStanovaIzdavanje() {
    this.nekretninaServis.brojStanovaIzdavanje().subscribe((data: number) => {
      this.stanoviIzdavanje = data;
    })
  }
  brojStanovaProdaja() {
    this.nekretninaServis.brojStanovaProdaja().subscribe((data: number) => {
      this.stanoviProdaja = data;
    })
  }
  brojKucaIzdavanje() {
    this.nekretninaServis.brojKucaIzdavanje().subscribe((data: number) => {
      this.kuceIzdavanje = data;
    })
  }
  brojKucaProdaja() {
    this.nekretninaServis.brojKucaProdaja().subscribe((data: number) => {
      this.kuceProdaja = data;
    })
  }
  izmeniKorIme(n) {
    if (this.novoKorIme != n.korime && this.novoKorIme != undefined && this.novoKorIme != null) {
      this.korisnikServis.izmeniKorIme(this.novoKorIme, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio ime') {
        }
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili ime na ' + this.novoKorIme;

      })
    }
    else {
      setTimeout(location.reload.bind(location), 6000);
      this.poruka = 'Niste izmenili ime';
    }
  }
  izmeniIme(n) {
    if (this.novoime != n.ime && this.novoime != undefined && this.novoime != null) {
      this.korisnikServis.izmeniIme(this.novoime, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio ime') {
        }
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili ime na ' + this.novoime;

      })
    }
    else {
      setTimeout(location.reload.bind(location), 6000);
      this.poruka = 'Niste izmenili ime';
    }
  }
  izmeniPrezime(n) {
    if (this.novoprezime != n.prezime && this.novoprezime != undefined && this.novoprezime != null) {
      this.korisnikServis.izmeniPrezime(this.novoprezime, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili prezime na ' + this.novoprezime;

      })

    }
    else {
      this.poruka = 'Niste izmenili prezime';
    }
  }
  izmeniLozinku(n) {
    if (n.lozinka == this.staralozinka && this.novalozinka != n.lozinka && this.novalozinka != undefined && this.novalozinka != null && this.novalozinka == this.novalozinka2 && (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/.test(this.novalozinka))) {
      this.korisnikServis.izmeniLozinku(this.novalozinka, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio lozinku') {
        }

        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili lozinku';
      })
    }

    else {
      this.poruka = 'Niste izmenili lozinku';
    }
    this.odjaviSe();
  }
  izmeniGrad(n) {
    if (this.novigrad != n.grad && this.novigrad != undefined && this.novigrad != null) {
      this.korisnikServis.izmeniGrad(this.novigrad, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio grad') {
        }

        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili grad na ' + this.novigrad;
      })
    }
    else {
      this.poruka = 'Niste izmenili grad';
    }
  }
  izmeniDrzavu(n) {
    if (this.novadrzava != n.drzava && this.novadrzava != undefined && this.novadrzava != null) {
      this.korisnikServis.izmeniDrzavu(this.novadrzava, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio drzavu') {
        }
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili drzavu na ' + this.novadrzava;

      })
    }
    else {
      this.poruka = 'Niste izmenili drzavu';
    }
  }
  izmeniTip(n) {
    if (this.novitip != n.tip && this.novitip != undefined && this.novitip != null) {
      this.korisnikServis.izmeniTip(this.novitip, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio tip') {
        }
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili tip na ' + this.novitip;

      })
    }
    else {
      this.poruka = 'Niste izmenili tip';
    }
  }

  izmeniMejl(n) {
    if (this.novimejl != n.mejl && this.novimejl != undefined && this.novimejl != null) {
      this.korisnikServis.izmeniMejl(this.novimejl, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio tip') {
        }
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili mejl na ' + this.novimejl;

      })
    }
    else {
      this.poruka = 'Niste izmenili tip';
    }
  }
  izmeniSliku(n) {
    if (this.novaslika != n.slika && this.novaslika != undefined && this.novaslika != null) {
      this.korisnikServis.izmeniSliku(this.novaslika, n.korime, n.lozinka, n.ime, n.prezime, n.mejl, n.grad, n.drzava, n.slika, n.tip).subscribe(response => {
        if (response['message'] == 'Korisnik je izmenio sliku') {
        }
        setTimeout(location.reload.bind(location), 6000);
        this.poruka = 'Uspesno ste izmenili sliku ';

      })
    }
    else {
      this.poruka = 'Niste izmenili sliku';
    }
  }
  azuriranje: boolean;
  togAzuriraj: Korisnik;
  azurirajKorisnika(n) {
    this.azuriranje = true;
    this.togAzuriraj = n;
    this.navigiraj('azuriranjeKorisnika');
  }
  izmeni(event: any) {
    let cnt = 0;
    for (let i of event.target.files) {
      this.galerija[cnt] = i.name;
      console.log(this.galerija[cnt])
      cnt++;
    }
  }

  promeniProfilnu(event: any, togAzuriraj) {
    this.novaslika = event.target.files[0].name;
  }
  upload(event: any) {
    this.slika = event.target.files[0].name;
  }
}
