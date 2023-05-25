const { Schema, model, models } = require("mongoose");

//Vendedores/Cobradores
const sellerSchema = new Schema({
    name_seller: { type: String, require: true },
    cidentified_seller: { type: String, require: true },
    role: { type: String, require: true },
    phone_seller: { type: String, require: true },
    clients:[{
        type: Schema.Types.ObjectId,
        ref: "Client"
    }]
}, {
    timestamps: true,
    versionKey: false
})

export default models.Seller || model('Seller', sellerSchema);