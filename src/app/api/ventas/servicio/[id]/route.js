import { connectDB } from "@/src/lib/mongodb";
import ServicioData from "@/src/models/Ventas/DataServicio";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    await connectDB()
    const id = params.id
    try {
        const result = await ServicioData.findOne({difuntoId:id});
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
        const result = await ServicioData.findByIdAndDelete(id)
        console.log(result)
        if (!result) {
            return NextResponse.json({message: `Document with ID: ${id} not found.`}, {status:404}) 
        }
        return NextResponse.json({data: result},  {status: 200})
    } catch (error) {
        return NextResponse.json({ data: null}, { status: 500})
    }
}

export async function PATCH( request, {params}) {
    await connectDB()
    const id = params.id
    const body = await request.json()

    try {
        const result = await ServicioData.findByIdAndUpdate(id, {$set:{...body}}, {new: true})
        if (!result) {
            return NextResponse.json({ message: `Document with ID: ${id} not found.` }, { status: 404 })
        }
        return NextResponse.json({ data: result }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 })
    }
}