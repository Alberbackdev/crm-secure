const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//Beneficiarios del cliente
const payeesSchema = new Schema({
    name_payee: { type: String, require: true },
    cidentified_payee: { type: String, require: true },
    dateofbirth: { type: String, require: true },
    age_payee: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
})
payeesSchema.plugin(mongoosePaginate)

export default models.Payees || model('Payees', payeesSchema);