const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//data polize-secure

const polizeSchema = new Schema({
    codigoPoliza: { type: String, require: true },
    type_polize: { type: String, require: true },
    seller: { type: String, require: true },
    dateofcontract: { type: String, require: true },
    city_contract: { type: String, require: true },
    clientId:{
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
}, {
    timestamps: true,
    versionKey: false
})

polizeSchema.plugin(mongoosePaginate)

export default models.Polize || model('Polize', polizeSchema);