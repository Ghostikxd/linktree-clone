'use client'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { signIn } from 'next-auth/react'
import { HTMLAttributes } from 'react'
import Button from '../Button'

interface LoginWithGitHubProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string
}

const LoginWithGitHub = ({ className }: LoginWithGitHubProps) => {
	const handleSignIn = () => {
		signIn('github')
	}

	const buttonClasses = clsx(
		'flex gap-2 justify-center items-center shadow-lg hover:scale-105 duration-700 bg-gray-950 hover:bg-gray-800',
		className
	)

	return (
		<Button type='submit' onClick={handleSignIn} className={buttonClasses}>
			<FontAwesomeIcon icon={faGithub} className='w-6 h-6' />
			<span>Sign In with GitHub</span>
		</Button>
	)
}

export default LoginWithGitHub
