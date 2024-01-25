'use client'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

const LogoutButton = ({
	className = 'flex items-center justify-center gap-1 hover:underline hover:scale-105 duration-500',
	iconLeft = false,
	iconClasses = 'h-4 w-4',
}) => {
	return (
		<button className={className} onClick={() => signOut()}>
			{iconLeft && <LogOutIcon className={iconClasses} />}
			<span>Logout</span>
			{!iconLeft && <LogOutIcon className={iconClasses} />}
		</button>
	)
}

export default LogoutButton
