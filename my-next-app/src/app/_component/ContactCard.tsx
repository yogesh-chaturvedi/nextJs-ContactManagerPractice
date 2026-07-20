"use client"

import { deleteContacts } from "../api/contacts";
import Link from "next/link";
import { ContactInterface } from "../_types/contactTypes";
import { useRouter } from "next/navigation";



interface ContactCardProps {
    phone?: string;
    id: string
    contact: ContactInterface
}


const ContactCard = ({ phone, id, contact }: ContactCardProps) => {
    const router = useRouter();

    async function handleDelete(id: string) {
        await deleteContacts(id)
        confirm("do you really wnat to delete it")
        router.refresh();
    }

    return (
        <div className='w-50 text-white border-2 border-gray-700 px-2 py-1 rounded-xl cursor-pointer flex items-center justify-between'>
            <p className='font-bold'>{phone}</p>
            <button onClick={() => { handleDelete(id) }} className="cursor-pointer rounded-md text-sm p-1 border-2 text-white">del</button>
            <Link href={`/contact/${contact._id}/edit`}>
                Edit
            </Link>
        </div>
    )
}

export default ContactCard
