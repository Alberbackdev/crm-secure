const { default: mongoose, mongo } = require("mongoose");

//Beneficiarios del cliente
const payeesSchema = new mongoose.Schema({
    name_payee: String,
    cidentified_payee: String,
    dateofbirth: String,
    age_payee: String,
    create_at: Date.now,
    update_at: Date.now
})