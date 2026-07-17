"use server"

// server action must be an async fucntion

import axios from "axios"
import { formDataInterface, UserInterface } from "../_types/userTypes";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_KEY = process.env.API_URL;

export interface ApiResponseInterface {
    success: boolean;
    message: string;
    user: UserInterface
}

export const LoginAction = async (data: formDataInterface) => {
    try {
        const response = await axios<ApiResponseInterface>({
            method: "post",
            url: `${API_KEY}/api/auth/login`,
            data,
        });

        await setSession(response.data.user) // it will set cookie
    }
    catch (error) {
        console.error(error)
        return { error: "network error" }
    }

    redirect("/contact");
}


export const logoutAction = async () => {
    try {
        await deleteSession();
    }
    catch (error) {
        console.error("logout error", error)
        return;
    }
    redirect('/login')
}