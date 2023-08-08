import { connectDB } from "@/src/lib/mongodb";
import BeneficiarioData from "@/src/models/BeneficiarioData";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await connectDB()
    const beneficiarios = await BeneficiarioData.find({}).populate('cliente');
    return NextResponse.json(beneficiarios, { status: 200 })
}

export async function POST(req, res) {
    await connectDB()
    try {
        const body = await req.json()
        const newDataBeneficiario = await BeneficiarioData.create(body)
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
