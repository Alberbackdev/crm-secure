import clientPromise from "../../../lib/mongodb";
import { mongooseConnect } from "../../../lib/mongoose";
import DataPay from "../../../models/DataPay";




mongooseConnect(clientPromise);

export default async function handler(req, res) {

    const { method, body } = req
    console.log(req)

    switch (method) {
        case 'GET':
            try {
                const Pago = await DataPay.find();

                return res.status(200).json(Pago);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'POST':
            try {
                const newPago = new DataPay(body);

                const savePago = await newPago.save()
                return res.status(201).json(savePago);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }

}
