const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

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
paySchema.plugin(mongoosePaginate)

//esto elimina el error overwrite model
export const DataPago = models.DataPay || model('Pays', paySchema);