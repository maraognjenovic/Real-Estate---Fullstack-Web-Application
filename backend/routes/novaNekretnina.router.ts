import express from 'express';
import { NovaNekretninaController } from '../controllers/novaNekretnina.controller';

const novaNekretninaRouter = express.Router();

novaNekretninaRouter.route('/dohvatiSveNoveNekretnine').get(
    (req, res)=>new NovaNekretninaController().dohvatiSveNoveNekretnine(req, res)
);
novaNekretninaRouter.route('/ubaci').post(
    (req, res)=>new NovaNekretninaController().ubaci(req, res)
);
novaNekretninaRouter.route('/obrisi').post(
    (req, res)=>new NovaNekretninaController().obrisi(req, res)
);

export default novaNekretninaRouter;