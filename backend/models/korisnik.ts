import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Korisnik = new Schema({
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
//export default mongoose.model('Korisnik',Korisnik, 'zahteviZaRegistraciju');
export default mongoose.model('Korisnik',Korisnik, 'korisnik');