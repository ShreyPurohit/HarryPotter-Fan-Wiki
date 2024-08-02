"use server"
import { SessionData, defaultSession, sessionOptions } from "./lib"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import connectToDatabase from "./mongoose"
import UserModel from "@/models/userModel"

export const getSession = async () => {
    await connectToDatabase()
    const session = await getIronSession<SessionData>(cookies(), sessionOptions)
    if (!session.isLoggedIn) { session.isLoggedIn = defaultSession.isLoggedIn }
    const username = session.wizard_name
    // CHECK THE USER IN THE DB
    try {
        const user = await UserModel.findOne({ username: username })
        if (user) {
            session.user_id = user._id;
            session.wizard_name = user.username;
            session.role = user.role
            session.isLoggedIn = true
        }
    } catch (error) {
        console.error(error);
    }
    return session
}

export const login = async (prevState: { error: undefined | string }, formData: FormData) => {
    await connectToDatabase().then(() => console.log("Connected To Login"))
    const session = await getSession()
    const formUsername = formData.get("login-name") as string
    const formPassword = formData.get("login-password") as string
    // CHECK USER IN THE DB
    try {
        const user = await UserModel.findOne({ username: formUsername })
        if (!user) {
            return { error: "User Not Found" }
        }
        if (user.password !== formPassword) {
            return { error: "Invalid Credentials" }
        }
        session.user_id = user._id;
        session.wizard_name = formUsername;
        session.role = user.role
        session.isLoggedIn = true
        await session.save()
    } catch (error) {
        console.error(error);
    }
    redirect("/")
}

export const signup = async (prevState: { error: undefined | string }, formData: FormData) => {
    await connectToDatabase().then(() => console.log("Connected To SignUp"))
    const username = formData.get("signup-name") as string
    const password = formData.get("signup-password") as string
    const email = formData.get("signup-email") as string
    const user = await UserModel.create({
        username, password, email
    })
    console.log(user, "Created Successfully");
    redirect("/")
}

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
}

export const getCharacters = async (page = 1, limit = 10) => {
    try {
        const result = await fetch(`http://localhost:3000/api/characters?page=${page}&limit=${limit}`);
        if (!result.ok) {
            throw new Error('Failed to fetch characters');
        }
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return { characters: [], totalPages: 0, currentPage: 1 };
    }
};

export const getCharacterNames = async (name: string) => {
    try {
        const result = await fetch(`http://localhost:3000/api/characters/name?name=${name}`);
        if (!result.ok) {
            throw new Error('Failed to fetch character names');
        }
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getCharacterCard = async (formData: FormData) => {
    const name = formData.get("searchbarname") as string

    try {
        const result = await fetch(`http://localhost:3000/api/characters/viewcard?name=${name}`)
        if (!result.ok) {
            throw new Error('Failed to fetch character card');
        }
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const addToFavouriates = async (_id: string) => {
    const session = await getSession()
    const reqBody = {
        _id,
        user_id: session.user_id
    }
    try {
        const result = await fetch(`http://localhost:3000/api/characters/addtofav`, { method: "POST", body: JSON.stringify(reqBody) })
        if (!result.ok) {
            throw new Error('Failed to fetch character');
        }
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const viewDetails = async (_id: string) => {
    try {
        const result = await fetch(`http://localhost:3000/api/characters/detail?id=${_id}`, { method: "GET" })
        if (!result.ok) {
            throw new Error('Failed to fetch character');
        }
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const myFavouriates = async () => {
    const session = await getSession()
    try {
        const result = await fetch(`http://localhost:3000/api/characters/myfavs/${session.user_id?.toString()}`, { cache: 'reload' })
        if (!result.ok) {
            throw new Error('Failed to fetch favs');
        }
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
} 