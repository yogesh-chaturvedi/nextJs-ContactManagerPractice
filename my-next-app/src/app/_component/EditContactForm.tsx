"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import Input from './Input'
import { ContactInputs, ContactSchema } from "../schemas/contactSchema";
import { editContacts } from "../api/contacts";
import { useRouter } from "next/navigation";


interface EditContactFormProps {
    contact: string;
    id: string;

}

const EditContactForm = ({ contact, id }: EditContactFormProps) => {


    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactInputs>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            number: contact,
        },
    })

    const onSubmit = async (data: ContactInputs) => {
        await editContacts(id, data.number)
        router.refresh()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-500 p-5 bg-gray-900 rounded-xl">

            <Input
                type="text"
                label="Number"
                placeholder="Enter email"
                errors={errors.number}
                register={register("number")}
            />

            <button type="submit" className="bg-blue-700 border-2 rounded-2xl p-2">submit</button>

        </form>
    )
}

export default EditContactForm
