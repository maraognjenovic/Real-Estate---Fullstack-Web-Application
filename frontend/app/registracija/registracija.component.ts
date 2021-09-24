import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../korisnik.service';
import { FileUploader } from 'ng2-file-upload';
import { Fajl } from '../models/fajl';
import { FajlService } from '../fajl.service';
import { Router } from '@angular/router';

const tmp = 'http://localhost:4000/upload';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {


  constructor(private korisnikServis: KorisnikService, private fajlServis: FajlService, private ruter: Router) {
  }

  ngOnInit(): void {
  }
  fajlovi: Fajl[];
  korime: string;
  lozinka: string;
  ime: string;
  prezime: string;
  mejl: string;
  grad: string;
  drzava: string;
  slika: string;
  tip: string;
  lozinka2: string;
  uploader: FileUploader = new FileUploader({ url: tmp, itemAlias: 'file' });
  poruka: string;
  naslov_fajla: string;
  ime_fajla_original: string;
  ime_fajla_upload: string;
  velicina: string;
  tip_fajla: string;
  korisnik_slika: string;

  uploadFajlove(item) {
    console.log('usao sam u funkciju');
    this.uploader.onBuildItemForm = (item, form)=>{
      form.append("korime", this.korime);
      form.append("ime_fajla_original", this.ime_fajla_original);
      form.append("ime_fajla_upload", this.ime_fajla_original);
      form.append("velicina", Math.round((this.uploader.queue[0].file.size / 1024)));

      form.append("tip_fajla", this.uploader.queue[0].file.name.split('.').pop());
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteAll = ()=>{
      window.location.reload();
    }

  }
  dodajFajl(korime, ime_fajla_original, ime_fajla_upload, velicina, tip_fajla) {
    console.log('registacija component dodajFajl')
    this.fajlServis.dodajFajl(korime, ime_fajla_original, ime_fajla_upload, velicina, tip_fajla).subscribe(()=>{ });
  }

  registrujSe() {

    if (/^(?!.*(.)\1\1)(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&/]{8,24}$/.test(this.lozinka) && this.lozinka2 == this.lozinka) {
      this.korisnikServis.registrujSe(this.korime, this.lozinka, this.ime, this.prezime, this.mejl, this.grad, this.drzava, this.slika, this.tip).subscribe(response=>{
        this.poruka = response['message'];
        setTimeout(location.reload.bind(location), 4000);
        this.odjaviSe();
      })
    }
    else {
      if (this.lozinka == this.lozinka2) this.poruka = "Lozinka je u pogresnom formatu";
      else this.poruka = "Lozinke se ne poklapaju";
    }
    if (this.lozinka2 == null || this.lozinka2 == undefined) this.poruka = 'Morate ponoviti lozinku ';
    if (this.lozinka == null || this.lozinka == undefined) this.poruka = 'Morate uneti lozinku ';
    if (this.tip == null || this.tip == undefined) this.poruka = 'Morate uneti tip ';
    if (this.drzava == null || this.drzava == undefined) this.poruka = 'Morate uneti drzavu';
    if (this.grad == null || this.grad == undefined) this.poruka = 'Morate uneti grad';
    if (this.mejl == null || this.mejl == undefined) this.poruka = 'Morate uneti mejl';
    if (this.prezime == null || this.prezime == undefined) this.poruka = 'Morate uneti prezime ';
    if (this.ime == null || this.ime == undefined) this.poruka = 'Morate uneti ime';
    if (this.korime == null || this.korime == undefined) this.poruka = 'Morate uneti korisnicko ime';
  }
  odjaviSe() {
    localStorage.clear();
    this.ruter.navigate(['']);
  }
  refresh() {
    window.location.reload();
  }

  navigiraj(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }


  change(event: any) {
    // event.target.files.forEach(f=>{
    //   console.log(f);
    // })
    this.slika = event.target.files[0].name;
  }
}
