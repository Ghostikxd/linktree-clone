'use client'

import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signIn } from 'next-auth/react'
import Button from '../Button'

const LoginWithGoogle = () => {
	const handleSignIn = () => {
		signIn('google')
	}

	return (
		<Button
			type='submit'
			onClick={handleSignIn}
			className='flex gap-2 justify-center items-center shadow-lg hover:scale-105 duration-700'
		>
			<FontAwesomeIcon icon={faGoogle} className='w-5 h-5' />
			<span>Sign In with Google</span>
		</Button>
	)
}

export default LoginWithGoogle
