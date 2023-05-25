//this file is for read, update and delete an client registered

import clientPromise from "/src/lib/mongodb";
import { mongooseConnect } from "/src/lib/mongoose";
import ClientData from "/src/models/ClientData";

mongooseConnect(clientPromise);

export default async (req, res) => {
    const { method, body, query: { id } } = req

    console.log(req.query)

    const msg = "Client not found";

    switch (method) {
        case 'GET':
            try {
                const client = await ClientData.findById(id);
                if (!client) return res.status(404).json({ msg });
                return res.status(200).json(client);
            } catch (error) {
                return res.status(404).json({ msg: error.message })
            }

        case 'PUT':
            try {
                const updateClient = await ClientData.findByIdAndUpdate(id, body, { new: true });
                if (!updateClient) return res.status(404).json({ msg }); 
                return res.status(200).json(updateClient);
            } catch (error) {
                return res.status(404).json({ msg: error.message })
            }
        case 'DELETE':
            try {
                const deleteClient = await ClientData.findByIdAndDelete(id);
                if (!deleteClient) return res.status(404).json({ msg });
                return res.status(204).json();
            } catch (error) {
                return res.status(404).json({ msg: error.message })
            }

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }
}