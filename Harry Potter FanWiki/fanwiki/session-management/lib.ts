import { SessionOptions } from "iron-session";

export interface SessionData {
    user_id?: string,
    wizard_name?: string,
    role?: "User" | "Admin"
    isLoggedIn: boolean
}

export const defaultSession: SessionData = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_PWD!,
    cookieName: "wizard",
    cookieOptions: {
        httpOnly: true
    }
}