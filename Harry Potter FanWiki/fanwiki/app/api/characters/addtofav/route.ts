import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/session-management/mongoose';
import UserModel from '@/models/userModel';
import CharacterModel from '@/models/charactersModel';


export async function POST(req: NextRequest) {
    await connectToDatabase();
    const { _id, user_id } = await req.json();
    try {
        const matchingCharacter = await CharacterModel.findById(_id).select('_id');
        if (!matchingCharacter) { return NextResponse.json({ message: 'Could Not Find The Character' }, { status: 404 }) }

        const updatedUser = await UserModel.findByIdAndUpdate(
            user_id,
            { $addToSet: { favs: matchingCharacter._id } },
            { new: true }
        );
        if (!updatedUser) { return NextResponse.json({ message: 'User Not Found' }, { status: 404 }) }

        return NextResponse.json({ message: 'Added To Favs' }, { status: 200 });
    } catch (error) {
        console.error('Error Adding To Favs:', error);
        return NextResponse.json({ message: 'Error Adding To Favs' })
    }
}