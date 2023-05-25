const { Schema, model, models } = require("mongoose");

//Beneficiarios del cliente
const payeesSchema = new Schema({
    name_payee: { type: String, require: true },
    cidentified_payee: { type: String, require: true },
    dateofbirth: { type: String, require: true },
    age_payee: { type: String, require: true },
    client: [{
        type: Schema.Types.ObjectId,
        ref: "Client" 
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default models.Payees || model('Payees', payeesSchema);