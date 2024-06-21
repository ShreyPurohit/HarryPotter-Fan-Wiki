import UserModel from "@/models/userModel";
import CharacterModel from "@/models/charactersModel";
import connectToDatabase from "@/session-management/mongoose";
import { NextRequest, NextResponse } from "next/server";
import { ICard } from "@/components/HarryPotterCard";

interface IUserFav {
    _id: string,
    favs: string[]
}

export async function GET(req: NextRequest, { params }: { params: { user_id: string } }) {
    await connectToDatabase()
    const user_id = params.user_id
    try {
        const UserFavs = await UserModel.findById(user_id).select("favs") as IUserFav
        if (UserFavs.favs.length < 1) {
            return NextResponse.json({ message: "You Don't Have Any favouriates" }, { status: 200 })
        }

        const characterArr: ICard[] = []
        for (let i = 0; i < UserFavs.favs.length; i++) {
            const FavCharacters = await CharacterModel.findById(UserFavs.favs[i].toString()).select("name image")
            characterArr.push(FavCharacters)
        }
        
        return NextResponse.json({
            characterArr
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching Favs', error }, { status: 500 });
    }
} 