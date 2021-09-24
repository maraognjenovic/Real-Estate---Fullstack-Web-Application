import express from 'express';
import noviKorisnik from '../models/noviKorisnik';
import Korisnik from '../models/korisnik';
import { NoviKorisnikController } from './noviKorisnik.controller';
import Nekretnina from '../models/nekretnina';
import kupovinaNekretnina from '../models/kupovinaNekretnina';
import novaNekretnina from '../models/novaNekretnina';

export class KorisnikController {
    prijava = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let lozinka = req.body.lozinka;
        let tip = req.body.tip;

        Korisnik.findOne({ 'korime': korime, 'lozinka': lozinka, 'tip': tip },
            (err, korisnik)=>{
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }
    dohvatiSveKorisnike = (req: express.Request, res: express.Response)=>{
        Korisnik.find({}, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
    dohvatiSebe = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;
        let lozinka = req.body.lozinka;
        let tip = req.body.tip;

        Korisnik.findOne({ 'korime': korime, 'lozinka': lozinka, 'tip': tip },
            (err, korisnik)=>{
                if (err) console.log(err);
                else res.json(korisnik);
            })
    }
    // registracija = (req: express.Request, res: express.Response)=>{

    //     let user = new Korisnik(req.body);
    //     user.save().then((user)=>{
    //         res.status(200).json({ 'message': 'Novi korisnik je uspesno dodat' });
    //     }).catch((err)=>{
    //         res.status(400).json({ 'message': err });
    //     })


    // }
    registracija = (req: express.Request, res: express.Response)=>{
        Korisnik.findOne({ 'korime': req.body.korime }, (err, user1)=>{
            if (err) {
                console.log(err);
            } else 
                if (user1) {
                    res.json({ 'message': 'Korisnicko ime vec postoji' });
                } else {
                    Korisnik.findOne({ 'mejl': req.body.mejl }, (err, user2)=>{
                        if (err) {
                            console.log(err);
                        } else if (user2) {
                            res.json({ 'message': 'Mejl vec postoji' });
                        } else {
                            let user = new Korisnik(req.body);
                            user.save().then((user)=>{
                                res.status(200).json({ 'message': 'Zahtev za registraciju je uspesno poslat' });
                            }).catch((err)=>{
                                res.status(400).json({ 'message': err });
                            }
                            )
                        }
                    })
                }
            
        })
    }

    obrisi = (req: express.Request, res: express.Response)=>{
        let kime = req.body.korime;

        noviKorisnik.collection.deleteOne({ 'korime': kime }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }
    obrisiKorisnika = (req: express.Request, res: express.Response)=>{
        let kime = req.body.korime;

        Korisnik.collection.deleteOne({ 'korime': kime }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }
    izmeniKorIme= (req: express.Request, res: express.Response)=>{

        let novoKorIme = req.body.novoKorIme;
        let korime = req.body.korime;

        Korisnik.findOne({ 'korime': novoKorIme }, (err, user1)=>{
            if (err) {
                console.log(err);
            } else 
                if (user1) {
                    res.json({ 'message': 'Korisnicko ime vec postoji' });
                } else {
                kupovinaNekretnina.collection.updateMany({ 'vlasnik': korime }, { $set: { 'vlasnik': novoKorIme } });
                kupovinaNekretnina.collection.updateMany({ 'kupac': korime }, { $set: { 'kupac': novoKorIme } } );
                novaNekretnina.collection.updateMany({ 'vlasnik': korime }, { $set: { 'vlasnik': novoKorIme } });
                Nekretnina.collection.updateMany({ 'vlasnik': korime }, { $set: { 'vlasnik': novoKorIme } });
                Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'korime': novoKorIme } });
            }
            
        })
    }
    izmeniIme = (req: express.Request, res: express.Response)=>{

        let novoime = req.body.novoime;
        let korime = req.body.korime;


        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'ime': novoime } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }
    
    izmeniPrezime = (req: express.Request, res: express.Response)=>{

        let novoprezime = req.body.novoprezime;
        let korime = req.body.korime;


        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'prezime': novoprezime } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }
    izmeniLozinku = (req: express.Request, res: express.Response)=>{

        let novalozinka = req.body.novalozinka;
        let korime = req.body.korime;


        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'lozinka': novalozinka } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }
    izmeniGrad = (req: express.Request, res: express.Response)=>{

        let novigrad = req.body.novigrad;
        let korime = req.body.korime;

        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'grad': novigrad } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }

    izmeniDrzavu = (req: express.Request, res: express.Response)=>{

        let novadrzava = req.body.novadrzava;
        let korime = req.body.korime;

        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'drzava': novadrzava } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }

    izmeniTip = (req: express.Request, res: express.Response)=>{

        let novitip = req.body.novitip;
        let korime = req.body.korime;

        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'tip': novitip } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }
    izmeniMejl = (req: express.Request, res: express.Response)=>{

        let novimejl = req.body.novimejl;
        let korime = req.body.korime;

        Korisnik.findOne({ 'mejl': novimejl }, (err, user2)=>{
            if (err) {
                console.log(err);
            } else if (user2) {
                res.json({ 'message': 'Mejl vec postoji' });
            } else {
                Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'mejl': novimejl } }, (err, korisnik)=>{
                    if (err) console.log(err);
                    else res.json(korisnik);
                })
            }
        })
        // Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'mejl': novimejl } }, (err, korisnik)=>{
        //     if (err) console.log(err);
        //     else res.json(korisnik);
        // })
    }
    izmeniSliku = (req: express.Request, res: express.Response)=>{

        let novaslika = req.body.novaslika;
        let korime = req.body.korime;


        Korisnik.collection.updateOne({ 'korime': korime }, { $set: { 'slika': novaslika } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }

}