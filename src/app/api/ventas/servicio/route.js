import { connectDB } from "@/src/lib/mongodb";
import DataServicio from "@/src/models/Ventas/DataServicio";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await connectDB();
  const listaServicios = await DataServicio.find();
  return NextResponse.json(listaServicios, { status: 200 });
}

export async function POST(req, res) {
  await connectDB();
  try {
    const body = await req.json();
    const newServicio = await DataServicio.create(body);
    console.log(newServicio);
    return NextResponse.json({ data: newServicio }, { status: 201 });
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
