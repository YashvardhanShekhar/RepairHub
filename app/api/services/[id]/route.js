import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/service";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = await params;
    console.log(id)
    await connectMongoDB();
    const service = await Service.findById(id);
    return NextResponse.json({ service }, { status: 200 });
  }