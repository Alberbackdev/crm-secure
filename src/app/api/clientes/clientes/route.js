import { connectDB } from "@/src/lib/mongodb";
import ClientData from "@/src/models/ClientData";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) { 
    await connectDB()
    const clientes = await ClientData.find() //.populate('polize');
    return NextResponse.json( clientes, { status: 200 })
}

export async function POST(req, res) {
    await connectDB()
    try {
        const body = await req.json()
        const newClient = await ClientData.create(body)
        return NextResponse.json({newClient}, {status: 201})
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
