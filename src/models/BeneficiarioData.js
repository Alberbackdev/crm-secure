const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//Beneficiarios del cliente
const payeesSchema = new Schema({
    name_payee: { type: String, require: true },
    cidentified_payee: { type: String, require: true },
    dateofbirth: { type: String, require: true },
    age_payee: { type: String, require: true },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Client', 

    },
    poliza: {
        type: Schema.Types.ObjectId,
        ref: 'Polize',
    },
}, {
    timestamps: true,
    versionKey: false
})
payeesSchema.plugin(mongoosePaginate)

export default models.Beneficiario || model('Beneficiario', payeesSchema);