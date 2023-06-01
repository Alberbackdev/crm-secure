import clientPromise from "../../../lib/mongodb";
import { mongooseConnect } from "../../../lib/mongoose";
import ClientData from "../../../models/ClientData";
import Polize from "../../../models/Polize";
ClientData

mongooseConnect(clientPromise);

export default async function handler(req, res) {

    const { method, body, clientId } = req
    console.log(req)

    const client = await ClientData.find(clientId);
    
    switch (method) {
        case 'GET':
            try {
                const polize = await Polize.find();
                
                return res.status(200).json(polize);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'POST':
            try {
                const newPolize = new Polize(body);

                const savePolize = await newPolize.save()
                return res.status(201).json(savePolize);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }

}
