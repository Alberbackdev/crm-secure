const { default: mongoose, mongo } = require("mongoose");
//Pagos
const paySchema = new mongoose.Schema({
    type_pay: String,
    code_pay: String,
    date_pay: String,
    type_of_change: String,
    month_pay: String,
    status_pay: String,
    full_payment_bs: String,
    full_payment_dollar: String,
    create_at: Date.now
})