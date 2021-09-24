import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../models/korisnik.model';
import { kupovinaNekretnina } from '../models/kupovina';
import { Nekretnina } from '../models/nekretnina';
import { NekretninaService } from '../nekretnina.service';
import {
  Chart, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip
} from 'chart.js';
Chart.register(BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, ArcElement, LineElement, BarElement, PointElement, BarController, Decimation, Filler, Legend, Title, Tooltip
);
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  staralozinka: string;
  novalozinka: string;
  novalozinka2: string;

  constructor(private korisnikServis: KorisnikService, private nekretninaServis: NekretninaService,
    private ruter: Router) {
    this.cenaOd = null;
    this.cenaDo = null;
    this.pretraga = null;
  }

  ngOnInit(): void {

    this.ja = JSON.parse(localStorage.getItem('ulogovan'));
    if (this.ja == null || this.ja.tip != 'agent' || this.ja.tip == null) {
      // localStorage.clear();
      this.ruter.navigate(['']);
    }
    this.galerija = [] as string[];
    let k = Math.floor(Math.random() * 5) + 1;
    this.idSlike = k.toString();
    this.sveNekretnine = [{}] as Array<Nekretnina>;
    for (let i = 0; i < this.sveNekretnine.length; i++) {
      this.sveNekretnine[i].galerija = [] as string[];
      // this.galerija = [] as string[];
    }
    this.sveNoveNekretnine = [{}] as Array<kupovinaNekretnina>;
    this.mojeNekretnine = [{}] as Array<Nekretnina>;
    for (let i = 0; i < this.mojeNekretnine.length; i++) {
      this.mojeNekretnine[i].galerija = [] as string[];
      // this.galerija = [] as string[];
    }
    this.NoveNekretnine = [{}] as Array<Nekretnina>;
    for (let i = 0; i < this.NoveNekretnine.length; i++) {
      this.NoveNekretnine[i].galerija = [] as string[];
      // this.galerija = [] as string[];
    }
    this.nekretninaServis.dohvatiSveKupovine('agencija').subscribe((podatak: kupovinaNekretnina[]) => {
      this.sveNoveNekretnine = podatak;
    })
    this.nekretninaServis.dohvatiSveNekretnine().subscribe((podatak: Nekretnina[]) => {
      this.sveNekretnine = podatak;
    })
    this.nekretninaServis.dohvatiMojeNekretnine('agencija').subscribe((podatak: Nekretnina[]) => {
      this.mojeNekretnine = podatak;
    })
    this.nekretninaServis.dohvatiSveNoveNekretnine().subscribe((podatak: Nekretnina[]) => {
      this.NoveNekretnine = podatak;
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




  }
  NoveNekretnine: Nekretnina[]
  idSlike: string;
  mojeNekretnine: Nekretnina[]
  opis: string;
  adresa: string;
  tip: string;
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
  poruka: string;
  pretraga: string;
  cenaOd: Number;
  cenaDo: Number;
  sveNekretnine: Nekretnina[];
  sveNoveNekretnine: kupovinaNekretnina[];
  ja: Korisnik;

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

  brSvihNekretnina: number;
  valjevo: number;
  beograd: number;
  sabac: number;
  leskovac: number;
  belaCrkva: number;
  cacak: number;
  ostalo: number;

  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }
  refresh() {
    window.location.reload();
  }
  trazi() {

    this.nekretninaServis.traziNekretninu(this.pretraga, this.cenaOd, this.cenaDo).subscribe((podaci: Nekretnina[]) => {
      this.sveNekretnine = podaci;
    })
  }
  promovisiNekretninu(id) {
    this.nekretninaServis.promovisiNekretninu(id).subscribe((response => {
      if (response['message'] == 'Nekretnina je promovisana') {
      }
      this.nekretninaServis.dohvatiMojeNekretnine(this.ja.korime).subscribe((data: Nekretnina[]) => {
        this.mojeNekretnine = data;
      })
    }))
  }
  ukiniPromociju(id) {
    this.nekretninaServis.ukiniPromociju(id).subscribe((response => {
      if (response['message'] == 'Nekretnina vise nije promovisana') {
      }
      this.nekretninaServis.dohvatiMojeNekretnine(this.ja.korime).subscribe((data: Nekretnina[]) => {
        this.mojeNekretnine = data;
      })
    }))
  }
  sortirajMoje() {
    this.mojeNekretnine.sort((a, b) => {
      return (<number><unknown>a.cena) - (<number><unknown>b.cena);
    });
  }
  sortirajSve() {
    this.sveNekretnine.sort((a, b) => {
      return (<number><unknown>a.cena) - (<number><unknown>b.cena);
    });
  }

  prihvatiKupovinu(k) {
    this.nekretninaServis.prihvatiKupovinu(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
      if (response['message'] == 'Nekretnina je dodata') {
      }
      this.nekretninaServis.dohvatiSveKupovine(this.ja.korime).subscribe((data: kupovinaNekretnina[]) => {
        this.sveNoveNekretnine = data;
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
  prihvatiNovuNekretninu(k) {
    this.nekretninaServis.prihvatiUbacivanje(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo).subscribe(response => {
      if (response['message'] == 'Nekretnina je dodata') {
      }
      this.nekretninaServis.dohvatiSveNoveNekretnine().subscribe((data: Nekretnina[]) => {
        this.NoveNekretnine = data;
      })
      this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[]) => {
        this.sveNekretnine = data;
      })
    })
    this.obrisiZahtevZaNekretninu(k);
  }
  obrisiZahtevZaNekretninu(k) {
    this.nekretninaServis.obrisiNovuNekretninu(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo).subscribe(response => {
      if (response['message'] == 'Nekretnina je obrisana') {
      }
      this.nekretninaServis.dohvatiSveNoveNekretnine().subscribe((data: Nekretnina[]) => {
        this.NoveNekretnine = data;
      })
      this.nekretninaServis.dohvatiSveNekretnine().subscribe((data: Nekretnina[]) => {
        this.sveNekretnine = data;
      })
    })

  }
  ubaciDirekt() {

    this.nekretninaServis.ubaciDirekt(this.opis, this.adresa, this.tip, this.sprat, this.kvadratura, this.sobe, this.namestenost, this.izdavanje, this.galerija, this.cena, 'agencija', this.id, this.promo).subscribe(response => {
      this.poruka = response['message'];
      setTimeout(location.reload.bind(location), 6000);
      this.poruka = 'Uspesno ste dodali nekretninu ';
    })
  }
  navigiraj(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
  izmeni(event: any) {
    let cnt = 0;
    for (let i of event.target.files) {
      this.galerija[cnt] = i.name;
      console.log(this.galerija[cnt])
      cnt++;
    }
  }
  prihvatiKupovinu2(k) {
    this.nekretninaServis.prihvatiKupovinu2(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
      this.nekretninaServis.obrisiOstalePonude(k.opis, k.adresa, k.tip, k.sprat, k.kvadratura, k.sobe, k.namestenost, k.izdavanje, k.galerija, k.cena, k.vlasnik, k.id, k.promo, k.kupac).subscribe(response => {
        this.nekretninaServis.obrisiNekretninu(k.id).subscribe(response => {
          this.nekretninaServis.dohvatiSveKupovine(this.ja.korime).subscribe((data: kupovinaNekretnina[]) => {
            this.sveNoveNekretnine = data;
          })
        })
      })
    })
    this.obrisiKupovinu(k);
  }
  obrisiKupovinu2(k) {
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
  izmeniLozinku() {
    if (this.ja.lozinka == this.staralozinka && this.novalozinka != this.ja.lozinka && this.novalozinka != undefined && this.novalozinka != null && this.novalozinka == this.novalozinka2 && (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/.test(this.novalozinka))) {
      this.korisnikServis.izmeniLozinku(this.novalozinka, this.ja.korime, this.ja.lozinka, this.ja.ime, this.ja.prezime, this.ja.mejl, this.ja.grad, this.ja.drzava, this.ja.slika, this.ja.tip).subscribe(response => {


        this.poruka = 'Uspesno ste izmenili lozinku';
        this.ruter.navigate(['']);
      })
    }

    else {
      this.poruka = 'Niste izmenili lozinku';
    }
    this.odjaviSe();
  }
}
