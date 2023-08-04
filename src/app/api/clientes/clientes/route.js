import { connectDB } from "@/src/lib/mongodb";
import { Cliente } from "@/src/models/ClientData";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) { 
    await connectDB()
    const clientes = await Cliente.paginate({}, { limit: 10 });
    return NextResponse.json( clientes , { status: 200 })
}

export async function POST(req, res) {
    await connectDB()
    try {
        const body = await req.json()
        const newClient = await Cliente.create(body)
        return NextResponse.json({data:newClient}, {status: 201})
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
