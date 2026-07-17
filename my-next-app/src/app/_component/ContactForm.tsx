"use client"

import { useForm } from "react-hook-form"
import Input from "./Input"
import { createContacts } from "../api/contacts"
import { useRouter } from "next/navigation"

export interface ContactInputs {
    number: string | undefined
}

interface ContactFormInterface {
    userId: string | undefined
}


const ContactForm = ({ userId }: ContactFormInterface) => {

    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInputs>()

    const onSubmit = async (data: ContactInputs) => {
        await createContacts(userId, data)
        router.replace('/contact')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-500 p-5 bg-gray-900 rounded-xl">

            <Input
                type="text"
                label="Number"
                placeholder="Enter email"
                errors={errors.number}
                register={register("number", {
                    required: "Number is required",
                    maxLength: { value: 10, message: "it should be 10 digits only" },
                    minLength: { value: 10, message: "it should be 10 digits only" },
                })}
            />

            <button type="submit" className="bg-blue-700 border-2 rounded-2xl p-2">submit</button>

        </form>
    )
}

export default ContactForm;