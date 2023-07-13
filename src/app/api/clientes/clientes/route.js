import { connectDB } from "@/src/lib/mongodb";
import ClientData from "@/src/secure/models/ClientData";
import { NextResponse } from "next/server";


export async function GET(request) { 
    await connectDB()
    const clientes = await ClientData.find();

    return NextResponse.json(
        clientes,
        { status: 200 }
    )

}