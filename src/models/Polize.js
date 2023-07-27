const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//data polize-secure
// falta validar campos y manejar los errores
const polizeSchema = new Schema({
    codigoPoliza: {
        type: String,
        required: [true, "El codigo de Poliza es requerido"],
        unique: true, },
    type_polize: { type: String, require: true },
    seller: { type: String, require: true },
    dateofcontract: { type: String, require: true },
    city_contract: { type: String, require: true },
    clientId:{
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
}, {
    timestamps: true,
    versionKey: false
})

polizeSchema.plugin(mongoosePaginate)

export const DataPoliza =  models.Polize || model('Polize', polizeSchema);

