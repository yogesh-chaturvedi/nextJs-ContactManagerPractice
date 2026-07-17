"use server"

import { cookies } from "next/headers"
import { UserInterface } from "../_types/userTypes"


// to set 
export const setSession = async (user: UserInterface) => {
    const cookieStore = await cookies();

    cookieStore.set("session", JSON.stringify(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
    })
}

// to get
export const getSession = async (): Promise<UserInterface | null> => {
    const cookieStore = await cookies();

    const session = cookieStore.get("session")?.value;

    if (!session) {
        return null;
    }

    const user = JSON.parse(session) as UserInterface;
    return user;
}

// to delete
export const deleteSession = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}