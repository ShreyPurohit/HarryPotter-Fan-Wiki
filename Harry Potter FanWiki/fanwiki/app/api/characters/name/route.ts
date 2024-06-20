import CharacterModel from "@/models/charactersModel";
import connectToDatabase from "@/session-management/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectToDatabase()
    const name = req.nextUrl.searchParams.get("name")

    try {
        const characterNames = await CharacterModel.find({ name: { $regex: name, $options: 'i' } }).select('name')
        return NextResponse.json({
            characterNames
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching character names', error }, { status: 500 });
    }
}