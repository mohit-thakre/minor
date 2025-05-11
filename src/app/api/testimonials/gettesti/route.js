import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDb } from "@/dbconfig/dbConfig";
import Testimonial from "../../../../models/testimonial.model.js";
// Connect to MongoDB
connectDb();
// Define a Mongoose schema and model

export async function GET() {
  try {
    const testimonials = await Testimonial.find();
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
