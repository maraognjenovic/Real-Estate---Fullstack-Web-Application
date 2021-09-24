import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { createNgModule } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Nekretnina } from './models/nekretnina';

@Injectable({
  providedIn: 'root'
})
export class NekretninaService {
  uri = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  dohvatiSveNekretnine(){
    return this.http.get(`${this.uri}/Nekretnina/dohvatiSveNekretnine`);
  }
  dohvatiMojeNekretnine(vlasnik){
    const data={
      vlasnik:vlasnik
    }
    return this.http.post(`${this.uri}/Nekretnina/dohvatiMojeNekretnine`,data);
  }
  dohvatiSvePromoNekretnine(){
    return this.http.get(`${this.uri}/Nekretnina/dohvatiSvePromoNekretnine`);
  }
  dohvatiSveNoveNekretnine(){
    return this.http.get(`${this.uri}/novaNekretnina/dohvatiSveNoveNekretnine`);
  }
  dohvatiSveKupovine(vlasnik){
    const data={
      vlasnik:vlasnik
    }
    return this.http.post(`${this.uri}/Nekretnina/dohvatiSveKupovine`,data);
  }
  obrisiNekretninu (id){
    const data = {
    id:id
    }
    return this.http.post(`${this.uri}/Nekretnina/obrisi`,data);
  }
  obrisiSveKorisnikoveNekretnine (korime){
    const data = {
      korime:korime
    }

    return this.http.post(`${this.uri}/Nekretnina/obrisiSveKorisnikoveNekretnine`,data);
  }
  dohvatiNekretninuPoId (id){
    const data = {
    id:id
    }
    return this.http.post(`${this.uri}/Nekretnina/dohvatiPoId`,data);
  }
  promovisiNekretninu(id){
    const data = {
    id:id
    }
    return this.http.post(`${this.uri}/Nekretnina/promovisiNekretninu`,data);
  }
  ukiniPromociju(id){
    const data = {
    id:id
    }
    return this.http.post(`${this.uri}/Nekretnina/ukiniPromociju`,data);
  }
  traziNekretninu(pretraga,cenaOd, cenaDo){
    const podaci = {
      pretraga:pretraga,
      cenaOd: cenaOd,
      cenaDo: cenaDo
    }

    return this.http.post(`${this.uri}/Nekretnina/traziNekretninu`,podaci);
  }
  kupi(opis,adresa,tip,sprat,kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo,kupac){
    const data = {
      
  opis:opis,
  adresa:adresa,
  tip:tip,
  sprat:sprat,
  kvadratura:kvadratura,
  sobe:sobe,
  namestenost:namestenost,
  izdavanje:izdavanje,
  galerija:galerija,
  cena:cena,
  vlasnik:vlasnik,
  id:id,
  promo:promo,
  kupac:kupac
    }

    return this.http.post(`${this.uri}/kupovinaNekretnina/kupi`, data);
  }
  ubaci(opis,adresa,tip,sprat,kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo){
    const data = {
      
  opis:opis,
  adresa:adresa,
  tip:tip,
  sprat:sprat,
  kvadratura:kvadratura,
  sobe:sobe,
  namestenost:namestenost,
  izdavanje:izdavanje,
  galerija:galerija,
  cena:cena,
  vlasnik:vlasnik,
  id:id,
  promo:promo
    }

    return this.http.post(`${this.uri}/novaNekretnina/ubaci`, data);
  }
  ubaciDirekt(opis,adresa,tip,sprat,kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo){
    const data = {
      
  opis:opis,
  adresa:adresa,
  tip:tip,
  sprat:sprat,
  kvadratura:kvadratura,
  sobe:sobe,
  namestenost:namestenost,
  izdavanje:izdavanje,
  galerija:galerija,
  cena:cena,
  vlasnik:vlasnik,
  id:id,
  promo:promo
    }

    return this.http.post(`${this.uri}/Nekretnina/ubaci`, data);
  }
  prihvatiUbacivanje(opis,adresa,tip,sprat,kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo){
    const data = {
      
  opis:opis,
  adresa:adresa,
  tip:tip,
  sprat:sprat,
  kvadratura:kvadratura,
  sobe:sobe,
  namestenost:namestenost,
  izdavanje:izdavanje,
  galerija:galerija,
  cena:cena,
  vlasnik:vlasnik,
  id:id,
  promo:promo
    }

    return this.http.post(`${this.uri}/Nekretnina/ubaci`, data);
  }
  obrisiNovuNekretninu (opis, adresa,tip, sprat, kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo){
    const data = {
      opis:opis,
    adresa:adresa,
    tip:tip,
    sprat:sprat,
    kvadratura:kvadratura,
    sobe:sobe,
    namestenost:namestenost,
    izdavanje:izdavanje,
    galerija:galerija,
    cena:cena,
    vlasnik:vlasnik,
    id:id,
    promo:promo
    }
    return this.http.post(`${this.uri}/novaNekretnina/obrisi`,data);
  }

  dohvatiIzdavanjePoId(id){
    const data = {
    id:id
    }
    return this.http.post(`${this.uri}/Nekretnina/dohvatiIzdavanjePoId`,data);
  }


  prihvatiKupovinu(opis,adresa,tip,sprat,kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo,kupac){
    const data = {
      
  opis:opis,
  adresa:adresa,
  tip:tip,
  sprat:sprat,
  kvadratura:kvadratura,
  sobe:sobe,
  namestenost:namestenost,
  izdavanje:izdavanje,
  galerija:galerija,
  cena:cena,
  vlasnik:vlasnik,
  id:id,
  promo:promo,
  kupac:kupac
    }

    return this.http.post(`${this.uri}/Nekretnina/obrisi`, data);
  }
  obrisiKupovinu (opis, adresa,tip, sprat, kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo,kupac){
    const data = {
      opis:opis,
    adresa:adresa,
    tip:tip,
    sprat:sprat,
    kvadratura:kvadratura,
    sobe:sobe,
    namestenost:namestenost,
    izdavanje:izdavanje,
    galerija:galerija,
    cena:cena,
    vlasnik:vlasnik,
    id:id,
    promo:promo,
    kupac:kupac
    }

    return this.http.post(`${this.uri}/kupovinaNekretnina/obrisiKupovinu`,data);
  }

  brojNekretninaUGradu(grad){    const data = {
      grad:grad
    }
    return this.http.post(`${this.uri}/Nekretnina/brojNekretninaUGradu`,data);
  }
  brojSvihNekretnina(){

    return this.http.get(`${this.uri}/Nekretnina/brojSvihNekretnina`);
  }
  brojNekretninaCena(cenaOd, cenaDo){
    const data={
      cenaOd:cenaOd,
      cenaDo: cenaDo
    }
    return this.http.post(`${this.uri}/Nekretnina/brojNekretninaCena`,data);
  }
  brojStanovaIzdavanje(){
    const data={
      tip:'stan',
      izdavanje: 'izdajeSe'
    }
    return this.http.post(`${this.uri}/Nekretnina/brojStanovaIzdavanje`,data);
  }
  brojStanovaProdaja(){
    const data={
      tip:'stan',
      izdavanje: 'prodajeSe'
    }
    return this.http.post(`${this.uri}/Nekretnina/brojStanovaIzdavanje`,data);
  }
  brojKucaIzdavanje(){
    const data={
      tip:'kuca',
      izdavanje: 'izdajeSe'
    }
    return this.http.post(`${this.uri}/Nekretnina/brojStanovaIzdavanje`,data);
  }
  brojKucaProdaja(){
    const data={
      tip:'kuca',
      izdavanje: 'prodajeSe'
    }
    return this.http.post(`${this.uri}/Nekretnina/brojStanovaIzdavanje`,data);
  }
  dohvatiImenaGradova(){
    return this.http.get(`${this.uri}/Nekretnina/dohvatiImenaGradova`);
  }
  azuriraj(sid, nopis,   nadresa, ntip,nsprat, nkvadratura, nsobe,nnamestenost,nizdavanje,ngalerija,ncena,nvlasnik,nid,npromo){
    const data = {
      sid:sid,
      opis: nopis,
      adresa: nadresa,
      tip: ntip,
      sprat: nsprat,
      kvadratura: nkvadratura,
      sobe: nsobe,
      namestenost: nnamestenost,
      izdavanje: nizdavanje,
      galerija: ngalerija,
      cena:ncena,
      vlasnik: nvlasnik,
      id: nid,
      promo:npromo
    }
    console.log(data);
    return this.http.post(`${this.uri}/Nekretnina/azuriraj`,data);
  }
  obrisiOstalePonude(opis, adresa,tip, sprat, kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo,kupac){
    const data = {
      opis:opis,
    adresa:adresa,
    tip:tip,
    sprat:sprat,
    kvadratura:kvadratura,
    sobe:sobe,
    namestenost:namestenost,
    izdavanje:izdavanje,
    galerija:galerija,
    cena:cena,
    vlasnik:vlasnik,
    id:id,
    promo:promo,
    kupac:kupac
    }

    return this.http.post(`${this.uri}/kupljenaNekretnina/obrisiOstalePonude`,data);
  }

dohvatiSveRealizovaneKupovine(){

 console.log('usao u servis');
  return this.http.get(`${this.uri}/kupljenaNekretnina/dohvatiSveRealizovaneKupovine`);
}

prihvatiKupovinu2(opis, adresa,tip, sprat, kvadratura,sobe,namestenost,izdavanje,galerija,cena,vlasnik,id,promo,kupac){
  const data = {
    opis:opis,
  adresa:adresa,
  tip:tip,
  sprat:sprat,
  kvadratura:kvadratura,
  sobe:sobe,
  namestenost:namestenost,
  izdavanje:izdavanje,
  galerija:galerija,
  cena:cena,
  vlasnik:vlasnik,
  id:id,
  promo:promo,
  kupac:kupac
  }

  return this.http.post(`${this.uri}/kupljenaNekretnina/prihvatiKupovinu`,data);
}

}
