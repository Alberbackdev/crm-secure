import { connectDB } from "@/src/lib/mongodb";
import DataResponsable from "@/src/models/Ventas/DataResponsable";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
  await connectDB()
  const responsable = await DataResponsable.find() //.populate('polize');
  return NextResponse.json(responsable, { status: 200 })
}

export async function POST(req, res) {
  await connectDB()
  try {
    const body = await req.json()
    const newResponsable = await DataResponsable.create(body)
    return NextResponse.json({ newResponsable }, { status: 201 })
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
