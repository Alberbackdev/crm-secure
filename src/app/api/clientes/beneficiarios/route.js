import { connectDB } from "@/src/lib/mongodb";
import { DataBeneficiario } from "@/src/models/Payees";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await connectDB()
    const beneficiarios = await DataBeneficiario.paginate({}, { limit: 2 });
    return NextResponse.json(beneficiarios, { status: 200 })
}

export async function POST(req, res) {
    await connectDB()
    try {
        const body = await req.json()
        const newDataBeneficiario = await DataBeneficiario.create(body)
        return NextResponse.json({ data: newDataBeneficiario }, { status: 201 })
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
