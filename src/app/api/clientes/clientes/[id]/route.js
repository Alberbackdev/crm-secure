import { connectDB } from "@/src/lib/mongodb";
import BeneficiarioData from "@/src/models/BeneficiarioData";
import ClientData from "@/src/models/ClientData";
import { DataPago } from "@/src/models/PagoData";
import Polize from "@/src/models/Polize";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    await connectDB()
    console.log(params)
    const id = params.id
    try {
        const result = await ClientData.findById(id).populate('polize');
        return NextResponse.json({data: result}, {status: 200});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 400
                }
            )
        }
        return NextResponse.error()
    }
}

export async function DELETE(request, { params }) {
    await connectDB()
    const id = params.id
    try {
        const resultCliente = await ClientData.findByIdAndDelete(id)
        //console.log(resultCliente)
        const resultPoliza = await Polize.deleteMany({ clientId: id });
        const resultBeneficiarios = await BeneficiarioData.deleteMany({ clientId: id });
        const resultPago = await DataPago.deleteMany({ clientId: id });
       // console.log("Cliente Eliminado", resultCliente);
       // console.log("Poliza Eliminado", resultPoliza);
       // console.log("Beneficiarios Eliminado", resultBeneficiarios);
       // console.log("Pagos Eliminado", resultPago);
        if (!resultCliente) {
            return NextResponse.json({message: `Document with ID: ${id} not found.`}, {status:404}) 
        }
        return NextResponse.json({"Cliente Eliminado correctamente": resultCliente},  {status: 200})
    } catch (error) {
        return NextResponse.json({ data: null}, { status: 500})
    }
}

export async function PATCH( request, {params}) {
    await connectDB()
    const id = params.id
    const body = await request.json()

    try {
        const result = await ClientData.findByIdAndUpdate(id, {$set:{...body}}, {new: true})
        if (!result) {
            return NextResponse.json({ message: `Document with ID: ${id} not found.` }, { status: 404 })
        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}