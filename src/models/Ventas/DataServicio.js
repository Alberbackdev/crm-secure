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
    tipodecambio: {
      type: String,
    },
    preciobsataud: {
      type: String,
      //required: [true, "La cedula de identidad es requerido"],
      unique: [true, "El Numero de cedula ya existe"],
    },
    preciodolarataud: {
      type: String,
    },
    abonopagoataud: {
      type: String,
    },
    restapagoataud: {
      type: String,
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
    difuntoId: {
      type: Schema.Types.ObjectId,
      ref: "Difunto",
    },
    responsableId: {
      type: Schema.Types.ObjectId,
      ref: "Responsable",
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
