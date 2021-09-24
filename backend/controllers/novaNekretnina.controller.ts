import express from 'express';
import Korisnik from '../models/korisnik';
import Nekretnina from '../models/nekretnina';
import novaNekretnina from '../models/novaNekretnina';


export class NovaNekretninaController {
    dohvatiSveNoveNekretnine = (req: express.Request, res: express.Response)=>{
        novaNekretnina.find({}, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
    ubaci = (req: express.Request, res: express.Response)=>{
        Nekretnina.findOne({ 'id': req.body.id }, (err, user1)=>{
            if (err) {
                console.log(err);
            } else {
                if (user1) {
                    res.json({ 'message': 'Id nekretnine vec postoji' });
                } else {

                    Korisnik.findOne({ 'korime': req.body.vlasnik }, (err, user2)=>{
                        if (user2) {
                            let user = new novaNekretnina(req.body);

                            user.save().then((user)=>{
                                res.status(200).json({ 'message': 'Nova nekretnina je uspesno dodata' });
                            }).catch((err)=>{
                                res.status(400).json({ 'message': err });
                            })
                        }
                        else {
                            if (req.body.vlasnik == 'agencija') {
                                let user = new novaNekretnina(req.body);

                                user.save().then((user)=>{
                                    res.status(200).json({ 'message': 'Nova nekretnina je uspesno dodata' });
                                }).catch((err)=>{
                                    res.status(400).json({ 'message': err });
                                })
                            }
                            else {
                                res.json({ 'message': 'Ne postoji takav registrovani vlasnik' });
                                console.log(err);
                            }
                        }
                    })
                }
            }
        })
    }
    obrisi = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        novaNekretnina.collection.deleteOne({ 'id': id }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }


}