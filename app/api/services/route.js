import connectMongoDB from "@/lib/mongodb";
import Service from "@/models/user";
import { NextResponse } from "next/server";

// export async function POST(request) {
//   const { name, password, oid } = await request.json();
//   await connectMongoDB();
//   await User.create({ name, password, oid });
//   return NextResponse.json({ message: "User Created" }, { status: 201 });
// }

export async function GET() {
  await connectMongoDB();
  const service = await Service.find();
  return NextResponse.json({ service }); 
}