const { default: mongoose, mongo } = require("mongoose");

//Vendedores/Cobradores
const sellerSchema = new mongoose.Schema({
    name_seller: String,
    cidentified_seller: String,
    role: String,
    phone_seller: String,
    create_at: Date.now,
    update_at: Date.now
})