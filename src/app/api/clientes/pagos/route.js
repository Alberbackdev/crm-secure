import { connectDB } from "@/src/lib/mongodb";
import { DataPago } from "@/src/models/PagoData";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await connectDB()
    const pagos = await DataPago.paginate({});
    return NextResponse.json(pagos, { status: 200 })
}

export async function POST(req, res) {
    await connectDB()
    try {
        const body = await req.json()
        const newDataPago = await DataPago.create(body)
        return NextResponse.json({ data: newDataPago }, { status: 201 })
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
