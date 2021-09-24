import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Fajl = new Schema({

    korime:{
        type:String
    },
    // id:{
    //     type:String
    // },
    ime_fajla_original:{
        type:String
    },
    ime_fajla_upload:{
        type:String
    },
    tip_fajla:{
        type:String
    },
    velicina:{
        type:String
    }
})

export default mongoose.model('Fajl',Fajl, 'fajlovi');

