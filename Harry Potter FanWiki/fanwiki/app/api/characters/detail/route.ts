import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/session-management/mongoose';
import CharacterModel from '@/models/charactersModel';

export async function GET(req: NextRequest) {
    await connectToDatabase()
    const id = req.nextUrl.searchParams.get("id")
    try {
        const characterDetail = await CharacterModel.findById(id).select("-__v -createdAt -updatedAt")
        return NextResponse.json({
            characterDetail
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching character detail', error }, { status: 500 });
    }
}