import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des produits" },
      { status: 500 }
    );
  }
}
