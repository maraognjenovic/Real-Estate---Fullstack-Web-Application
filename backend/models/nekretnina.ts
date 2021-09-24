import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Nekretnina = new Schema({
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
        type: Array<String>()
    },
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
    }

})

export default mongoose.model('Nekretnina',Nekretnina, 'nekretnina');