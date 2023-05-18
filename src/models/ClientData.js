const { Schema, model, models } = require("mongoose");


//Data of client-contract
const clientSchema = new Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    cidentified: { type: String, require: true, unique:true },
    addres: { type: String, require: true },
    phone: { type: String, require: true },
    dateofbirth: { type: String, require: true },
}, {
    timestamps: true,
    versionKey: false
}

)

//esto elimina el error overwrite model
export default models.Client || model('Client', clientSchema);
