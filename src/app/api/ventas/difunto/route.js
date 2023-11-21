import { connectDB } from "@/src/lib/mongodb";
import DataDifunto from "@/src/models/Ventas/DataDifunto";

import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req, res) {
  await connectDB()
  const difuntos = await DataDifunto.find() //.populate('polize');
  return NextResponse.json(difuntos, { status: 200 })
}

export async function POST(req, res) {
  await connectDB()
  try {
    const body = await req.json()
    const newDifunto = await DataDifunto.create(body)
    return NextResponse.json(newDifunto , { status: 201 })
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
