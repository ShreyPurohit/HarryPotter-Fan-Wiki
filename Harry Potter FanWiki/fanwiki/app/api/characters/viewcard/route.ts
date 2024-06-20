import CharacterModel from "@/models/charactersModel";
import connectToDatabase from "@/session-management/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await connectToDatabase()
    const name = req.nextUrl.searchParams.get("name")

    try {
        const character = await CharacterModel.find({ name }).select("name image")
        return NextResponse.json({
            character
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching character card', error }, { status: 500 });
    }
}