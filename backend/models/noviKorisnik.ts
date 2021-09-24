import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let noviKorisnik = new Schema({
    korime:{
        type:String
    },
    lozinka:{
        type:String
    },
    ime:{
        type:String
    },
    prezime:{
        type: String
    },
    mejl:{
        type: String
    },
    tip:{
        type:String
    },
    grad:{
        type:String
    },
    drzava:{
        type:String
    },
    slika:{
        type:String
    }

})

export default mongoose.model('noviKorisnik',noviKorisnik, 'zahteviZaRegistraciju');