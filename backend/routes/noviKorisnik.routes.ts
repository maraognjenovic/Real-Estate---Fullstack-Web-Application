import express from 'express';
import { NoviKorisnikController } from '../controllers/noviKorisnik.controller';
import { KorisnikController } from '../controllers/korisnik.controller';
const noviKorisnikRouter = express.Router();

noviKorisnikRouter.route('/dohvatiSveNoveKorisnike').get(
    (req, res)=>new NoviKorisnikController().dohvatiSveNoveKorisnike(req, res)
);
noviKorisnikRouter.route('/registracija').post(
    (req, res)=>new NoviKorisnikController().registracija(req, res)
);

export default noviKorisnikRouter;