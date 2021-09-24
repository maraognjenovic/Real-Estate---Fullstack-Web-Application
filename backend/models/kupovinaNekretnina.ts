import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let kupovinaNekretnina = new Schema({
    opis:{
        type:String
    },
    adresa:{
        type:String
    },
    tip:{
        type:String
    },
    sprat:{
        type: String
    },
    kvadratura:{
        type: String
    },
    sobe:{
        type:String
    },
    namestenost:{
        type:String
    },
    izdavanje:{
        type:String
    },
    galerija:{
        type:Array<String>()
    },
    // cena:{
    //     type:String
    // },
     cena:{
         type:Number
     },
    vlasnik:{
        type: String
    },
    id:{
        type:String
    },
    promo:{
        type:Boolean
    },
    kupac:{
        type:String
    }

})
//export default mongoose.model('Korisnik',Korisnik, 'zahteviZaRegistraciju');
export default mongoose.model('kupovinaNekretnina',kupovinaNekretnina, 'kupovinaNekretnina');