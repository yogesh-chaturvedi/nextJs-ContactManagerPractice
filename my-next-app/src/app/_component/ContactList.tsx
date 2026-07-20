"use client"

import { useQuery } from '@tanstack/react-query'
import { getContacts } from '../api/contacts'
import ContactCard from './ContactCard'

const ContactList = () => {


    const { data: userContacts, isLoading, error } = useQuery({
        queryKey: ["contacts"],
        queryFn: getContacts
    })


    if (isLoading)
        return <p>Loading...</p>;

    if (error)
        return <p>Error...</p>;

    return (
        <>
            {userContacts?.map((c) => (
                <ContactCard
                    key={c._id}
                    phone={c.phoneNumber}
                    id={c._id}
                    contact={c}
                />
            ))}
        </>
    )
}

export default ContactList
