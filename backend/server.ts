import express from 'express';
import cors from 'cors';
import multer from 'multer'
import fajl from './models/fajl';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.router';
import noviKorisnikRouter from './routes/noviKorisnik.routes';
import nekretninaRouter from './routes/nekretnina.routes';
import novaNekretninaRouter from './routes/novaNekretnina.router';
import Korisnik from './models/korisnik';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/projekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Uspesno povezivanje sa bazom')
});

const router = express.Router();

// var store = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '.' + file.originalname);
//     }
// })
// router.route('/upload').post((req, res)=>{
//     upload(req, res, function (err) {
//         if (err) console.log(err);
//         else {
//             let fajl_za_bazu = new fajl({
//                 korime: req.body.korime,
//                 // id: req.body.id,
//                 ime_fajla_original: req.file.originalname,
//                 ime_fajla_upload: req.file.filename,
//                 velicina: req.body.velicina,
//                 tip_fajla: req.body.tip_fajla
//             })
//             fajl_za_bazu.save().then(succ=>{
//                 res.json(req.file.filename);
//             }).catch(err=>{
//                 res.json({ "poruka": "NIJE OK" })
//             });
//         }
//     });
// })
// var upload = multer({ storage: store }).single('file');
// router.route('/dodajFajlUKorisnika').post((req, res)=>{
//     let slika = {
//         korime:req.body.korime,
//         ime_fajla_upload:req.body.korime,
//         tip_fajla:req.body.tip_fajla,
//         ime_fajla_original:req.body.ime_fajla_original,
//         velicina:req.body.velicina
//     }
//     Korisnik.collection.updateOne({"korime":req.body.korime}, {$push:{"slika":slika}
//     })
// })
// router.route('/dohvatiFajlSaImenom').post((req, res)=>{
//     fajl.findOne({"korime":req.body.korime},(err, f)=>{
//         if(err) console.log(err);
//         else {
//             console.log(f);
//             res.json(f);
//         }
//     })
// })
router.use('/korisnik', korisnikRouter)
router.use('/noviKorisnik', noviKorisnikRouter)
router.use('/nekretnina', nekretninaRouter)
router.use('/kupovinaNekretnina', nekretninaRouter)
router.use('/kupljenaNekretnina', nekretninaRouter)
router.use('/izdavanje', nekretninaRouter)//??????????????????????????????????????????????????
router.use('/novaNekretnina', novaNekretninaRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));