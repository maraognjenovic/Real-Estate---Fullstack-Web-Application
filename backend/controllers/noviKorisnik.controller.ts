import express from 'express';
import Korisnik from '../models/korisnik';
import noviKorisnik from '../models/noviKorisnik';
//import Korisnik from '../models/korisnik';

export class NoviKorisnikController {
    dohvatiSveNoveKorisnike = (req: express.Request, res: express.Response)=>{
        noviKorisnik.find({}, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
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
                            let user = new noviKorisnik(req.body);
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

}