const { default: mongoose, mongo } = require("mongoose");

//data polize-secure

const polizeSchema = new mongoose.Schema({
    type_polize: String,
    seller: String,
    dateofcontract: Date.now,
    city_contract: String,
    create_at: Date.now,
    update_at: Date.now
})