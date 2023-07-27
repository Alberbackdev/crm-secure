const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//Pagos
const paySchema = new Schema({
    type_pay: {
        type: String,
        required: [true, "El tipo de pago es requerido"],
    },
    number_pay: { 
        type: String, 
        required: [true, "El numero de pago es requerido"],
        unique: true,
    },
    date_pay: { 
        type: String, 
        required: [true, "El fecha de pago es requerido"],
    },
    type_of_change: { 
        type: String, 
        required: [true, "El tipo de cambio es requerido"],
    },
    month_pay: [{ type: String, require: true }],
    status_pay: { 
        type: String, 
        required: [true, "El status del cliente es requerido"],
    },
    full_payment_bs: { 
        type: String, 
        required: [true, "El total del pago en bs es requerido"],
    },
    full_payment_dollar: { 
        type: String, 
        required: [true, "El total del pago en USD es requerido"],
    }
}, {
    timestamps: true,
    versionKey: false
}
)
paySchema.plugin(mongoosePaginate)

//esto elimina el error overwrite model
export const DataPago = models.Pays || model('Pays', paySchema);