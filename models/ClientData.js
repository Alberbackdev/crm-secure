const { default: mongoose, mongo } = require("mongoose");

//Data of client-contract
const clientSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    cidentified: { type: String, require: true, unique },
    addres: { type: String, require: true },
    phone: { type: String, require: true },
    dateofbirth: { type: String, require: true },
    create_at: { type: Date, default: Date.now, require: true },
    update_at: { type: Date, default: Date.now }
})

const Client = mongoose.model('Client', clientSchema);