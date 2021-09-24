import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

    uri = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  prijava(korime, lozinka, tip){
    const podaci = {
      korime: korime,
      lozinka: lozinka,
      tip: tip
    }

    return this.http.post(`${this.uri}/korisnik/prijava`, podaci);
  }  
  prihvatiRegistraciju(korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }

    return this.http.post(`${this.uri}/Korisnik/registracija`, data);
  }
  registrujSe(korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }

    return this.http.post(`${this.uri}/noviKorisnik/registracija`, data);
  }
  dohvatiSveNoveKorisnike(){
    return this.http.get(`${this.uri}/noviKorisnik/dohvatiSveNoveKorisnike`);
  }
  dohvatiSveKorisnike(){
    return this.http.get(`${this.uri}/Korisnik/dohvatiSveKorisnike`);
  }
  dohvatiSebe(){
    return this.http.get(`${this.uri}/Korisnik/dohvatiSebe`);
  }
  obrisiKorisnika  (korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/obrisiKorisnika`,data);
  }
  obrisi(korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/obrisi`,data);
  }
  izmeniKorIme(novoKorIme, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      novoKorIme:novoKorIme,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }

    return this.http.post(`${this.uri}/Korisnik/izmeniKorIme`,data);
  }
  izmeniIme  (novoime, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      novoime:novoime,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }

    return this.http.post(`${this.uri}/Korisnik/izmeniIme`,data);
  }
  izmeniLozinku  (novalozinka, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){
    const data = {
      novalozinka:novalozinka,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }

    return this.http.post(`${this.uri}/Korisnik/izmeniLozinku`,data);
  }
  izmeniPrezime  (novoprezime, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){

    const data = {
      novoprezime:novoprezime,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/izmeniPrezime`,data);
  }
  izmeniGrad  (novigrad, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){

    const data = {
      novigrad:novigrad,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/izmeniGrad`,data);
  }
  izmeniDrzavu  (novadrzava, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){

    const data = {
      novadrzava:novadrzava,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/izmeniDrzavu`,data);
  }
  izmeniTip  (novitip, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){

    const data = {
      novitip:novitip,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/izmeniTip`,data);
  }
  izmeniMejl(novimejl, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){

    const data = {
      novimejl:novimejl,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/izmeniMejl`,data);
  }
  izmeniSliku(novaslika, korime, lozinka,ime, prezime, mejl,grad,drzava,slika,tip){

    const data = {
      novaslika:novaslika,
      korime: korime, 
      lozinka: lozinka, 
      prezime: prezime,
      ime: ime,
      mejl: mejl, 
      grad: grad, 
      drzava: drzava,
      slika: slika,
      tip:tip
    }
    return this.http.post(`${this.uri}/Korisnik/izmeniSliku`,data);
  }
}
