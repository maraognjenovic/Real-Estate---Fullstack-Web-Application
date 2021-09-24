import express from 'express';
import Nekretnina from '../models/nekretnina';
import Korisnik from '../models/korisnik';
import Izdavanje from '../models/izdavanje';
import kupovinaNekretnina from '../models/kupovinaNekretnina';
import novaNekretnina from '../models/novaNekretnina';
import kupljenaNekretnina from '../models/kupljenaNekretnina';
export class NekretninaController {

    obrisi = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        Nekretnina.collection.deleteOne({ 'id': id }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }
    obrisiSveKorisnikoveNekretnine = (req: express.Request, res: express.Response)=>{
        let korime = req.body.korime;

        Nekretnina.collection.deleteMany({ 'vlasnik': korime }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
        novaNekretnina.collection.deleteMany({ 'vlasnik': korime }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }
    obrisiKupovinu = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        let kupac = req.body.kupac;

        kupovinaNekretnina.collection.deleteOne({ 'id': id, 'kupac': kupac }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }
    dohvatiSveNekretnine = (req: express.Request, res: express.Response)=>{
        Nekretnina.find({}, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
    dohvatiMojeNekretnine = (req: express.Request, res: express.Response)=>{
        let vlasnik = req.body.vlasnik;

        Nekretnina.find({ 'vlasnik': vlasnik }, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
    dohvatiSvePromoNekretnine = (req: express.Request, res: express.Response)=>{
        Nekretnina.find({ 'promo': true }, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
    dohvatiSveKupovine = (req: express.Request, res: express.Response)=>{
        let vlasnik = req.body.vlasnik;

        kupovinaNekretnina.find({ 'vlasnik': vlasnik }, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }
    dohvatiSveRealizovaneKupovine = (req: express.Request, res: express.Response)=>{
        kupljenaNekretnina.find({}, (err, kor)=>{
            if (err) console.log(err);
            else {
                res.json(kor);
            }
        })
    }

    dohvatiPoId = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;

        Nekretnina.collection.findOne({ 'id': id }, (err, korisnik)=>{
            if (err) console.log(err);
            else {
                res.json(korisnik);
            }
        })
    }
    promovisiNekretninu = (req: express.Request, res: express.Response)=>{

        let id = req.body.id;


        Nekretnina.collection.updateOne({ 'id': id }, { $set: { 'promo': true } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }
    ukiniPromociju = (req: express.Request, res: express.Response)=>{

        let id = req.body.id;


        Nekretnina.collection.updateOne({ 'id': id }, { $set: { 'promo': false } }, (err, korisnik)=>{
            if (err) console.log(err);
            else res.json(korisnik);
        })
    }
    dohvatiZahteveZaKupovinu = (req: express.Request, res: express.Response)=>{
        let vlasnik = req.body.vlasnik;

        kupovinaNekretnina.collection.findOne({ 'vlasnik': vlasnik }, (err, korisnik)=>{
            if (err) console.log(err);
            else {
                res.json(korisnik);
            }
        })
    }
    traziNekretninu = (req: express.Request, res: express.Response)=>{
        let pretraga = req.body.pretraga;
        let cenaOd = <Number>(req.body.cenaOd);
        let cenaDo = <Number>req.body.cenaDo;

        if (cenaDo == null) cenaDo = 10000000;
        if (cenaOd == null) cenaOd = 0;
        if (pretraga == null) {
            Nekretnina.find({ 'cena': { $gte: cenaOd, $lte: cenaDo } },
                (err, kafe)=>{
                    if (err) console.log(err);
                    else {
                        res.json(kafe);
                    }
                })
        }
        else {
            Nekretnina.find({ 'adresa': { $regex: pretraga }, 'cena': { $gte: cenaOd, $lte: cenaDo } },
                (err, kafe)=>{
                    if (err) console.log(err);
                    else {
                        res.json(kafe);
                    }
                })
        }
    }
    traziNekretninuCena = (req: express.Request, res: express.Response)=>{
        let cenaOd = <Number>(req.body.cenaOd);
        let cenaDo = <Number>req.body.cenaDo;
        Nekretnina.find({ 'cena': { $gte: cenaOd, $lte: cenaDo } },
            (err, kafe)=>{
                if (err) console.log(err);
                else {
                    res.json(kafe);
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
                            let user = new Nekretnina(req.body);

                            user.save().then((user)=>{
                                res.status(200).json({ 'message': 'Nova nekretnina je uspesno dodata' });
                            }).catch((err)=>{
                                res.status(400).json({ 'message': err });
                            })
                        }
                        else {
                            if (req.body.vlasnik == 'agencija') {
                                let user = new Nekretnina(req.body);

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
    kupi = (req: express.Request, res: express.Response)=>{
        let user = new kupovinaNekretnina(req.body);
        user.save().then((user)=>{
            res.status(200).json({ 'message': 'Nova nekretnina je uspesno dodata u korpu' });
        }).catch((err)=>{
            res.status(400).json({ 'message': err });
        })
    }
    prihvatiKupovinu = (req: express.Request, res: express.Response)=>{
        let user = new kupljenaNekretnina(req.body);
        user.save().then((user)=>{
            res.status(200).json({ 'message': 'Nekretnina je uspesno kupljena' });
        }).catch((err)=>{
            res.status(400).json({ 'message': err });
        })
    }
    obrisiOstalePonude = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        kupovinaNekretnina.collection.deleteMany({ 'id': id }, (err, kor)=>{
            if (err) console.log(err);
            else res.json(kor)
        })
    }
    dohvatiIzdavanjePoId = (req: express.Request, res: express.Response)=>{
        let id = req.body.id;
        Izdavanje.collection.findOne({ 'id': id }, (err, korisnik)=>{
            if (err) console.log(err);
            else {
                res.json(korisnik);
            }
        })
    }
    brojNekretninaUGradu = (req: express.Request, res: express.Response)=>{
        let grad = req.body.grad;
        Nekretnina.countDocuments({ 'adresa': { $regex: grad } }, function (err, count) {
            if (err) {
                console.log(err)
            } else {
                res.json(count);
            }
        });
    }
    brojSvihNekretnina = (req: express.Request, res: express.Response)=>{
        Nekretnina.countDocuments({}, function (err, count) {
            if (err) {
                console.log(err)
            } else {
                res.json(count);
            }
        });
    }
    brojNekretninaCena = (req: express.Request, res: express.Response)=>{
        let cenaOd = <Number>(req.body.cenaOd);
        let cenaDo = <Number>req.body.cenaDo;
        Nekretnina.countDocuments({ 'cena': { $gte: cenaOd, $lte: cenaDo } }, function (err, count) {
            if (err) {
                console.log(err)
            } else {
                res.json(count);
            }
        });
    }
    brojStanovaIzdavanje = (req: express.Request, res: express.Response)=>{
        Nekretnina.countDocuments({ 'tip': req.body.tip, 'izdavanje': req.body.izdavanje }, function (err, count) {
            if (err) {
                console.log(err)
            } else {
                res.json(count);
            }
        });
    }
    azuriraj = (req: express.Request, res: express.Response)=>{
        Nekretnina.findOne({ 'id': req.body.sid }, (err, user)=>{
            if (err) {
                console.log(err);
            } else {
                if (user) {

                    if (req.body.opis != null || req.body.opis != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'opis': req.body.opis } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'opis': req.body.opis } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'opis': req.body.opis } });
                    }
                    if (req.body.cena != null || req.body.cena != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'cena': req.body.cena } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'cena': req.body.cena } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: {'cena': req.body.cena } });
                    }
                    if (req.body.sprat != null || req.body.sprat != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'sprat': req.body.sprat } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'sprat': req.body.sprat  } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'sprat': req.body.sprat  } });
                    }
                    if (req.body.galerija != null || req.body.galerija != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'galerija': req.body.galerija } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'galerija': req.body.galerija } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: {'galerija': req.body.galerija } });
                    }
                    if (req.body.kvadratura != null|| req.body.kvadratura != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'kvadratura': req.body.kvadratura } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'kvadratura': req.body.kvadratura } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: {'kvadratura': req.body.kvadratura } });
                    }
                    if (req.body.namestenost != null || req.body.namestenost != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'namestenost': req.body.namestenost } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: {  'namestenost': req.body.namestenost } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'namestenost': req.body.namestenost } });
                    }
                    if (req.body.adresa != null || req.body.adresa != undefined) {
                        console.log('usao je u if u kontroleru');
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'adresa': req.body.adresa } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'adresa': req.body.adresa } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'adresa': req.body.adresa } });
                    }
                    if (req.body.sobe != null || req.body.sobe != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'sobe': req.body.sobe } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'sobe': req.body.sobe } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'sobe': req.body.sobe } });
                    }
                    if (req.body.promo != null || req.body.promo != undefined ) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'promo': req.body.promo } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'promo': req.body.promo } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'promo': req.body.promo } });
                    }
                    if (req.body.izdavanje != null|| req.body.izdavanje != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'izdavanje': req.body.izdavanje } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'izdavanje': req.body.izdavanje } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'izdavanje': req.body.izdavanje } });
                    }
                    if (req.body.tip != null || req.body.tip != undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'tip': req.body.tip } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'tip': req.body.tip } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'tip': req.body.tip } });
                    }
                    if (req.body.id != null || req.body.id != undefined) {
                        Nekretnina.findOne({ 'id': req.body.sid }, (err, user)=>{
                            if (err) {
                                console.log(err);
                            } else {
                                if (user) {
                                    res.json({ 'message': 'Takav id vec postoji u nekretninama' });
                                }
                                else {
                                    novaNekretnina.findOne({ 'id': req.body.sid }, (err2, user2)=>{
                                        if (err2) {
                                            console.log(err2);
                                        } else {
                                            if (user2) {
                                                res.json({ 'message': 'Takav id vec postoji u zahtevima za nekretnine' });
                                            }
                                            else {
                                                Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'id': req.body.id } });

                                                kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'id': req.body.id } });

                                                kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'id': req.body.id } });

                                            }
                                        }
                                    })
                                }
                            }
                        })
                        // Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'id': req.body.id } });
                    }
                    if (req.body.vlasnik != null || req.body.vlasnik!= undefined) {
                        Nekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'vlasnik': req.body.vlasnik } });
                        kupljenaNekretnina.collection.updateOne({ 'id': req.body.sid }, { $set: { 'vlasnik': req.body.vlasnik } });
                        kupovinaNekretnina.collection.updateMany({ 'id': req.body.sid }, { $set: { 'vlasnik': req.body.vlasnik } });
                    }
                    res.json({ 'message': 'Nekretnina je azurirana' });

                } else {
                    res.json({ 'message': 'Nesto je poslo po zlu kod azuriranja nekretnine' });
                }
            }
        })
    }
    dohvatiImenaGradova = (req: express.Request, res: express.Response)=>{
        Nekretnina.find({}, 'adresa',
            (err, grad)=>{
                if (err) console.log(err);
                else {
                    res.json(grad);
                }
            })
    }
}