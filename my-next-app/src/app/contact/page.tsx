import Link from "next/link";
import { getSession } from "../_lib/session"
import { createContacts, getContacts } from "../api/contacts"
import ContactCard from "../_component/ContactCard";
import ContactList from "../_component/ContactList";


const contactPage = async () => {

    const user = await getSession();
    console.log(user)
    if (!user) {
        return <div className="flex text-white flex-col justify-center items-center gap-5">
            <Link href={"/login"}>Please login</Link>
        </div>
    }

    const userContacts = await getContacts()
    console.log("userContacts", userContacts)



    return (
        <div className="text-white flex flex-col gap-5 items-center justify-center">

            <h1 className="font-bold text-2xl ">Contact Page</h1>

            <Link href={"/contact/new"} className="bg-gray-700 border-2 border-gray-700 rounded-2xl p-2">Add contact +</Link>

            <div className="border-2 border-gray-700 rounded-2xl grid grid-cols-6 gap-5 p-5">
                <ContactList />
            </div>
        </div>
    )
}

export default contactPage
