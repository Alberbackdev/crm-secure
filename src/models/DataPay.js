const { Schema, model, models } = require("mongoose");
//Pagos
const paySchema = new Schema({
    type_pay: { type: String, require: true },
    number_pay: { type: String, require: true },
    date_pay: { type: String, require: true },
    type_of_change: { type: String, require: true },
    month_pay: [{ type: String, require: true }],
    status_pay: { type: String, require: true },
    full_payment_bs: { type: String, require: true },
    full_payment_dollar: { type: String, require: true },
    client:{
        type: Schema.Types.ObjectId,
        ref: "Clients"
    }
}, {
    timestamps: true,
    versionKey: false
}
)

//esto elimina el error overwrite model
export default models.DataPay || model('Pays', paySchema);