import Link from 'next/link'
import React from 'react'
import AuthButton from './AuthButton'
import { getSession } from '../_lib/session';
import { logoutAction } from '../actions/Auth';

const Navbar = async () => {

    const session = await getSession();

    return (
        <nav className="flex items-center justify-between bg-gray-900 px-6 py-4">

            <Link href="/" className="text-white text-lg font-semibold">
                Next JS Navbar
            </Link>

            <div className='flex items-center space-x-5'>
                {session ? (
                    <div className='flex gap-5'>
                        <Link href="/contact" className="text-white rounded-lg p-2 bg-blue-400 text-lg font-semibold">
                            Contact
                        </Link>
                        <AuthButton onClick={logoutAction} text="Log Out" type="button" />
                    </div>
                ) : (
                    <div className='flex gap-5'>
                        <Link href="/login" className="text-white rounded-lg p-2 bg-blue-600 text-lg font-semibold">
                            Login
                        </Link>
                        <Link href="/register" className="text-white rounded-lg p-2 bg-red-500 text-lg font-semibold">
                            Register
                        </Link>
                    </div>
                )}
                <div className="flex items-center gap-4">
                </div>
            </div>
        </nav>
    )
}

export default Navbar
