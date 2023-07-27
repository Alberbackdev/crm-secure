const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema, model, models } = require("mongoose");

//Data of client-contract
const clientSchema = new Schema({
    name: { 
        type: String, 
        required: [true, "El nombre es requerido"], 
    },
    lastname: { 
        type: String, 
        required: [true, "El apellido es requerido"], 
    },
    cidentified: { 
        type: String, 
        required: [true, "La cedula de identidad es requerido"], 
        unique: true,
    },
    addres: { 
        type: String, 
        required: [true, "La dirección es requerido"], 
    },
    phone: { 
        type: String, 
        required: [true, "El telefono es requerido"], 
    },
    dateofbirth: { 
        type: String, 
        required: [true, "La Fecha de Nacimiento es requerido"],
    },
    polize: {
        type: Schema.Types.String,
        ref: "Polize"
    },
    payees: [{
        type: Schema.Types.ObjectId,
    }],
    datapay: [{
        type: Schema.Types.ObjectId,
        ref: "Datapay"
    }],
    seller: [{
        type: Schema.Types.ObjectId,
        ref: "Seller"
    }]
}, {
    timestamps: true,
    versionKey: false
})

clientSchema.plugin(mongoosePaginate)

//esto elimina el error overwrite model
export const Cliente = models.Client || model('Client', clientSchema);
