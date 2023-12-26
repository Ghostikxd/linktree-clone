'use client'

import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import ModalSignIn from './ModalSignIn'
import Button from './buttons/Button'
import LoginWithGitHub from './buttons/LoginWithGitHub'
import LoginWithGoogle from './buttons/LoginWithGoogle'

const HeroForm = () => {
	const [username, setUsername] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState(false)
	useEffect(() => {
		if (
			'localStorage' in window &&
			window.localStorage.getItem('desiredUsername')
		) {
			const username = window.localStorage.getItem('desiredUsername')
			window.localStorage.removeItem('desiredUsername')
			redirect('/account?desiredUsername=' + username)
		}
	}, [])

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!username.trim() && formSubmitted) {
			setFormSubmitted(true)
			setTimeout(() => {
				setFormSubmitted(false)
			}, 3000)
			return
		}

		if (username.length > 0) {
			window.localStorage.setItem('desiredUsername', username)
			setIsModalOpen(true)
		} else {
			setFormSubmitted(true)
			setTimeout(() => {
				setFormSubmitted(false)
			}, 3000)
		}
	}

	return (
		<div className='max-w-md'>
			<form
				onSubmit={handleSubmit}
				className='flex mt-4 items-center justify-center'
			>
				<div
					className={` rounded overflow-hidden flex items-center shadow-xl focus-within:outline-4 focus-within:ring-2 focus-within:ring-indigo-500 ${
						!username.trim() && formSubmitted ? 'ring-2 ring-red-500' : ''
					}`}
				>
					<span className='bg-white py-2 pl-2 text-gray-500'>netlink.co/</span>
					<input
						value={username}
						onChange={e => setUsername(e.target.value)}
						type='text'
						placeholder='yourname'
						maxLength={20}
						className='py-2  text-gray-500 outline-none '
					/>
				</div>
				<Button
					type='submit'
					className='ml-2 hover:scale-105 duration-500 whitespace-nowrap'
				>
					Join for free
				</Button>
			</form>
			<ModalSignIn isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<h1 className='font-semibold text-center'>
					Your link: <br />{' '}
					<span className='underline'>netlink.co/{username}</span>
				</h1>
				<p className='font-semibold '>Choose provider to continue:</p>
				<LoginWithGoogle
					onClose={() => setIsModalOpen(false)}
				></LoginWithGoogle>
				<LoginWithGitHub
					onClose={() => setIsModalOpen(false)}
					className=''
				></LoginWithGitHub>
			</ModalSignIn>
		</div>
	)
}

export default HeroForm
