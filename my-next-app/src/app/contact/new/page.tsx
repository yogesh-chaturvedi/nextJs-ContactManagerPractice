import ContactForm from '@/app/_component/ContactForm'
import { getSession } from '@/app/_lib/session'
import React from 'react'

const NewContact = async () => {

  const user = await getSession();


  return (
    <div className='text-white'>
      new conatct
      <ContactForm userId={user?.id} />
    </div>
  )
}

export default NewContact