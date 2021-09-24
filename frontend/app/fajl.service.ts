import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FajlService {
  uri = 'http://localhost:4000';

  constructor(private httpClient:HttpClient) { }

  dohvatiFajlSaImenom(korime){
    return this.httpClient.post(`${this.uri}/dohvatiFajlSaImenom`,{"korime":korime});
  }
  dodajFajl(korime, ime_fajla_upload, tip_fajla, ime_fajla_original, velicina){
    console.log("dodaj fajl fajl servis");
    return this.httpClient.post(`${this.uri}/dodajFajlUKorisnika`,{
      "korime":korime,
      "ime_fajla_upload":ime_fajla_upload,
      "tip_fajla":tip_fajla,
      "ime_fajla_original":ime_fajla_original,
      "velicina":velicina

    });
  }
}
