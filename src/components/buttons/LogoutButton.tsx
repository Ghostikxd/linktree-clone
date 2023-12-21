'use client'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
	return (
		<button
			className='flex items-center justify-center gap-1 hover:underline hover:scale-105 duration-500 '
			onClick={() => signOut()}
		>
			<span>Logout</span>
			<LogOutIcon />
		</button>
	)
}

export default LogoutButton
