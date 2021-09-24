import express from 'express';
import { NoviKorisnikController } from '../controllers/noviKorisnik.controller';
import { KorisnikController } from '../controllers/korisnik.controller';
const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res)=>new KorisnikController().prijava(req, res)
);
korisnikRouter.route('/registracija').post(
    (req, res)=>new KorisnikController().registracija(req, res)
);

korisnikRouter.route('/obrisi').post(
    (req, res)=>new KorisnikController().obrisi(req, res)
);
korisnikRouter.route('/dohvatiSveKorisnike').get(
    (req, res)=>new KorisnikController().dohvatiSveKorisnike(req, res)
);
korisnikRouter.route('/obrisiKorisnika').post(
    (req, res)=>new KorisnikController().obrisiKorisnika(req, res)
);

korisnikRouter.route('/izmeniKorIme').post(
    (req, res)=>new KorisnikController().izmeniKorIme(req, res)
);
korisnikRouter.route('/izmeniIme').post(
    (req, res)=>new KorisnikController().izmeniIme(req, res)
);
korisnikRouter.route('/izmeniPrezime').post(
    (req, res)=>new KorisnikController().izmeniPrezime(req, res)
);
korisnikRouter.route('/izmeniLozinku').post(
    (req, res)=>new KorisnikController().izmeniLozinku(req, res)
);
korisnikRouter.route('/izmeniGrad').post(
    (req, res)=>new KorisnikController().izmeniGrad(req, res)
);
korisnikRouter.route('/izmeniDrzavu').post(
    (req, res)=>new KorisnikController().izmeniDrzavu(req, res)
);
korisnikRouter.route('/izmeniTip').post(
    (req, res)=>new KorisnikController().izmeniTip(req, res)
);
korisnikRouter.route('/izmeniMejl').post(
    (req, res)=>new KorisnikController().izmeniMejl(req, res)
);
korisnikRouter.route('/izmeniSliku').post(
    (req, res)=>new KorisnikController().izmeniSliku(req, res)
);
korisnikRouter.route('/dohvatiSebe').get(
    (req, res)=>new KorisnikController().dohvatiSebe(req, res)
);


export default korisnikRouter;