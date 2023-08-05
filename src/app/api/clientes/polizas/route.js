import { connectDB } from "@/src/lib/mongodb";
import { DataPoliza } from "@/src/models/Polize";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    await connectDB()
    const polizes = await DataPoliza.find();
    return NextResponse.json( polizes, { status: 200 })
}

export async function POST(req, res) {
    await connectDB()
    try {
        const body = await req.json()
        const newPolize = await DataPoliza.create(body)
        return NextResponse.json({ data: newPolize }, { status: 201 })
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
