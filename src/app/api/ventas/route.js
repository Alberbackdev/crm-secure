import { connectDB } from "@/src/lib/mongodb";
import DataDifunto from "@/src/models/Ventas/DataDifunto";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connectDB();
  const listaDifuntos = await DataDifunto.find();
  return NextResponse.json(listaDifuntos, { status: 200 });
}

export async function POST(req, res) {
  await connectDB();
  try {
    const body = await req.json();
    const newVenta = await DataDifunto.create(body);
    console.log(newVenta);
    return NextResponse.json({ data: newVenta }, { status: 201 });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
