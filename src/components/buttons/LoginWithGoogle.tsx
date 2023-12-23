'use client'

import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { signIn } from 'next-auth/react'
import { HTMLAttributes } from 'react'
import Button from './Button'

interface LoginWithGoogleProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string
	onClose?: () => void
}

const LoginWithGoogle = ({ className, onClose }: LoginWithGoogleProps) => {
	const handleSignIn = () => {
		signIn('google')
		if (onClose) {
			onClose()
		}
	}

	const buttonClasses = clsx(
		'flex gap-2 justify-center items-center shadow-lg hover:scale-105 duration-700',
		className
	)

	return (
		<Button type='submit' onClick={handleSignIn} className={buttonClasses}>
			<FontAwesomeIcon icon={faGoogle} className='w-5 h-5' />
			<span>Sign In with Google</span>
		</Button>
	)
}

export default LoginWithGoogle
