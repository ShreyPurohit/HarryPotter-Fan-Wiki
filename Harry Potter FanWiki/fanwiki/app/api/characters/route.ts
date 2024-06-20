import CharacterModel from "@/models/charactersModel";
import connectToDatabase from "@/session-management/mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    await connectToDatabase()
    const page = req.nextUrl.searchParams.get("page")
    const limit = req.nextUrl.searchParams.get("limit")
    const pageNumber = Number(page)
    const limitNumber = Number(limit)

    try {
        const characters = await CharacterModel.find().skip((pageNumber - 1) * limitNumber).limit(limitNumber).select("name image actor")
        const totalCharacters = await CharacterModel.countDocuments();
        return NextResponse.json({
            characters,
            totalPages: Math.ceil(totalCharacters / limitNumber),
            currentPage: pageNumber,
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching characters', error }, { status: 500 });
    }
}