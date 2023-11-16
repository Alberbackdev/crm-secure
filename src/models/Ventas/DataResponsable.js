const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema, model, models } = require("mongoose");

//Data of client-contract
const responsableSchema = new Schema(
  {
    fullname: {
      type: String,
      //required: [true, "El nombre completo es requerido"],
    },
    cidentified: {
      type: String,
      //required: [true, "La cedula de identidad es requerido"],
      unique: [true, "El Numero de cedula ya existe"],
    },
    parentesco: {
      type: String,
      //required: [true, "La Edad es requerida"],
    },
    dateofbirth: {
      type: String,
      //required: [true, "La Fecha de Nacimiento es requerido"],
    },
    direccion: {
      type: String,
      //required: [true, "La dirección es requerido"],
    },
    telefono: {
      type: String,
      //required: [true, "La dirección es requerido"],
    },
    segurodifunto: {
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
export const Responsable = models.Responsable || model("Responsable", responsableSchema);
