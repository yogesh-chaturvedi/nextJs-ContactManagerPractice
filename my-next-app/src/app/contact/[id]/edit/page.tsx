import EditContactForm from '@/app/_component/EditContactForm';
import { getSession } from '@/app/_lib/session';
import { ContactInterface } from '@/app/_types/contactTypes';
import { fetchSingleContacts } from '@/app/api/contacts';
import React from 'react'

type Props = {
    params: Promise<{
        id: string;
    }>;
};


const editContactPage = async ({ params }: Props) => {

    const { id } = await params;
    const user = await getSession();


    console.log("id edit ", id);

    const contact = await fetchSingleContacts(id)
    console.log("bsdsinkjsd", contact)
    return (
        <div className='text-white'>

            <h1 className='text-2xl text-blue-600 font-bold'>Contact Edit Page</h1>
            <div className='flex flex-col gap-5'>
                {/* user details */}

                <div className='border-red-400 border-2 p-5 text-white'>
                    <p className='text-2xl font-bold'>{user?.userName}</p>
                    <p className='text-2xl font-bold'>{user?.email}</p>
                </div>

                {/* contact */}
                <div className='border-red-400 border-2 p-5 text-white'>
                    {contact?.phoneNumber}
                </div>

                <EditContactForm contact={contact?.phoneNumber} id={id} />
            </div>
        </div>
    )
}

export default editContactPage
