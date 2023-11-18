const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema, model, models } = require("mongoose");

//Data of client-contract
const servicioSchema = new Schema(
  {
    nroservicio: {
      type: String,
      //required: [true, "El Numero de servicio es requerido"],
      unique: [true, "El Numero de servicio ya existe"],
    },
    tipodeataud: {
      type: String,
      //required: [true, "El nombre completo es requerido"],
    },
    preciobsataud: {
      type: String,
      //required: [true, "La cedula de identidad es requerido"],
      unique: [true, "El Numero de cedula ya existe"],
    },
    preciodolarataud: {
      type: String,
      //required: [true, "La cedula de identidad es requerido"],
      unique: [true, "El Numero de cedula ya existe"],
    },
    pagoataud: {
      type: String,
      //required: [true, "La Edad es requerida"],
    },
    formatodepago: {
      type: String,
      //required: [true, "La Fecha de Nacimiento es requerido"],
    },
    fecha: {
      type: String,
      //required: [true, "La dirección es requerido"],
    },
    comentarioadd: {
      type: String,
      //required: [true, "La dirección es requerido"],
    },
    ubicacionventa: {
      type: String,
      //required: [true, "El telefono es requerido"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/* ventasSchema.plugin(mongoosePaginate) */

//esto elimina el error overwrite model
export const Servicio = models.Servicio || model("Servicio", servicioSchema);
