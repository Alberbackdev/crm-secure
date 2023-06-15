import clientPromise from "../../../lib/mongodb";
import { mongooseConnect } from "../../../lib/mongoose";
import Payees from "../../../models/Payees";



mongooseConnect(clientPromise);

export default async function handler(req, res) {

    const { method, body, clientId } = req
    console.log(req)

    const payee = await Payees.find(clientId);

    switch (method) {
        case 'GET':
            try {
                const Payees = await Payees.find();

                return res.status(200).json(Payees);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'POST':
            try {
                const newPayees = new Payees(body);

                const savePayees = await newPayees.save()
                return res.status(201).json(savePayees);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }

}
