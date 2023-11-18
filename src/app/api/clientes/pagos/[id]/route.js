import { connectDB } from "@/src/lib/mongodb";
import { DataPago } from "@/src/models/PagoData";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request, {params}) {
    await connectDB()
    const id = params.id
    try {
        const pagos = await DataPago.find({clientId: id});
        return NextResponse.json({pagos: pagos[pagos.length - 1]}, {status: 200})
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
