import express from 'express';
import { NekretninaController } from '../controllers/nekretnina.controller';
const nekretninaRouter = express.Router();

nekretninaRouter.route('/obrisi').post(
    (req, res)=>new NekretninaController().obrisi(req, res)
);
nekretninaRouter.route('/dohvatiSveNekretnine').get(
    (req, res)=>new NekretninaController().dohvatiSveNekretnine(req, res)
);
nekretninaRouter.route('/dohvatiMojeNekretnine').post(
    (req, res)=>new NekretninaController().dohvatiMojeNekretnine(req, res)
);

nekretninaRouter.route('/dohvatiSvePromoNekretnine').get(
    (req, res)=>new NekretninaController().dohvatiSvePromoNekretnine(req, res)
);
nekretninaRouter.route('/obrisiSveKorisnikoveNekretnine').post(
    (req, res)=>new NekretninaController().obrisiSveKorisnikoveNekretnine(req, res)
);

nekretninaRouter.route('/dohvatiPoId').post(
    (req, res)=>new NekretninaController().dohvatiPoId(req, res)
);
nekretninaRouter.route('/dohvatiIzdavanjePoId').post(
    (req, res)=>new NekretninaController().dohvatiPoId(req, res)
);
nekretninaRouter.route('/traziNekretninu').post(
    (req, res)=>new NekretninaController().traziNekretninu(req, res)
);
nekretninaRouter.route('/obrisiKupovinu').post(
    (req, res)=>new NekretninaController().obrisiKupovinu(req, res)
);
nekretninaRouter.route('/dohvatiImenaGradova').get(
    (req, res)=>new NekretninaController().dohvatiImenaGradova(req, res)
);
nekretninaRouter.route('/ubaci').post(
    (req, res)=>new NekretninaController().ubaci(req, res)
);
nekretninaRouter.route('/kupi').post(
    (req, res)=>new NekretninaController().kupi(req, res)
);
nekretninaRouter.route('/dohvatiSveKupovine').post(
    (req, res)=>new NekretninaController().dohvatiSveKupovine(req, res)
);
nekretninaRouter.route('/promovisiNekretninu').post(
    (req, res)=>new NekretninaController().promovisiNekretninu(req, res)
);
nekretninaRouter.route('/ukiniPromociju').post(
    (req, res)=>new NekretninaController().ukiniPromociju(req, res)
);
nekretninaRouter.route('/brojSvihNekretnina').get(
    (req, res)=>new NekretninaController().brojSvihNekretnina(req, res)
);
nekretninaRouter.route('/obrisiOstalePonude').post(
    (req, res)=>new NekretninaController().obrisiOstalePonude(req, res)
);
nekretninaRouter.route('/dohvatiSveRealizovaneKupovine').get(
    (req, res)=>new NekretninaController().dohvatiSveRealizovaneKupovine(req, res)
);
nekretninaRouter.route('/prihvatiKupovinu').post(
    (req, res)=>new NekretninaController().prihvatiKupovinu(req, res)
);

nekretninaRouter.route('/brojNekretninaCena').post(
    (req, res)=>new NekretninaController().brojNekretninaCena(req, res)
);
nekretninaRouter.route('/brojNekretninaUGradu').post(
    (req, res)=>new NekretninaController().brojNekretninaUGradu(req, res)
);
nekretninaRouter.route('/brojStanovaIzdavanje').post(
    (req, res)=>new NekretninaController().brojStanovaIzdavanje(req, res)
);
nekretninaRouter.route('/azuriraj').post(
    (req, res)=>new NekretninaController().azuriraj(req, res)
);

export default nekretninaRouter;