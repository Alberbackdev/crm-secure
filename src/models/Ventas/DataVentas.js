const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema, model, models } = require("mongoose");

//Data of client-contract
const ventasSchema = new Schema({
    nroservicio: {
        type: String,
        //required: [true, "El Numero de servicio es requerido"],
        unique: true,
    },
    fullname: {
        type: String,
        //required: [true, "El nombre completo es requerido"],
    },
    cidentified: {
        type: String,
        //required: [true, "La cedula de identidad es requerido"],
        unique: true,
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
    addres: {
        type: String,
        //required: [true, "La dirección es requerido"],
    },
    dielocation: {
        type: String,
        //required: [true, "La dirección es requerido"],
    },
    phone: {
        type: String,
        //required: [true, "El telefono es requerido"],
    }
}, {
    timestamps: true,
    versionKey: false
})

/* ventasSchema.plugin(mongoosePaginate) */

//esto elimina el error overwrite model
export const Venta = models.Venta || model('Venta', ventasSchema);
