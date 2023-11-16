const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema, model, models } = require("mongoose");

//Data of client-contract
const difuntoSchema = new Schema({
    nroservicio: {
        type: String,
        //required: [true, "El Numero de servicio es requerido"],
        unique: [true, "El Numero de servicio ya existe"],
    },
    fullname: {
        type: String,
        //required: [true, "El nombre completo es requerido"],
    },
    cidentified: {
        type: String,
        //required: [true, "La cedula de identidad es requerido"],
        unique: [true, "El Numero de cedula ya existe"],
    },
    edad: {
        type: String,
        //required: [true, "La Edad es requerida"],
    },
    nrohijos: {
        type: String,
        //required: [true, "Debe ingresar el numero de hijos"],
    },
    dateofbirth: {
        type: String,
        //required: [true, "La Fecha de Nacimiento es requerido"],
    },
    direccion: {
        type: String,
        //required: [true, "La dirección es requerido"],
    },
    lugarfallecimiento: {
        type: String,
        //required: [true, "La dirección es requerido"],
    },
    nameconyugue: {
        type: String,
        //required: [true, "El telefono es requerido"],
    }
}, {
    timestamps: true,
    versionKey: false
})

/* ventasSchema.plugin(mongoosePaginate) */

//esto elimina el error overwrite model
export const Difunto = models.Difunto || model('Difunto', difuntoSchema);
