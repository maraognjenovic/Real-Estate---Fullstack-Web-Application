import mongoose from 'mongoose'

const Schema = mongoose.Schema;

let Izdavanje = new Schema({
    vlasnik:{
        type:String
    },
    id:{
        type:String
    },
    datumOd:{
        type:String
    },
    datumDo:{
        type: String
    },
    stranka:{
        type: String
    }

})

export default mongoose.model('Izdavanje',Izdavanje, 'izdavanje');