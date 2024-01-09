'use client'

import { grabUsername } from '@/actions/grabUsername'
import { ArrowRightCircleIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { SubmitButton } from '../buttons/SubmitButton'

interface UsernameFormProps {
	desiredUsername: string
}

const UsernameForm = ({ desiredUsername }: UsernameFormProps) => {
	const [taken, setTaken] = useState(false)

	async function handleSubmit(formData: FormData) {
		const result = await grabUsername(formData)

		setTaken(result === false)
		if (result) {
			redirect('/account?created=' + formData.get('username'))
		}
	}

	return (
		<form action={handleSubmit}>
			<h1 className='mt-10 mb-4 text-2xl font-bold text-center'>
				Grab your username
			</h1>
			<p className='mr-auto text-gray-900 mb-4 text-center'>
				Choose your username:
			</p>
			<div className='max-w-xs mx-auto'>
				<input
					name='username'
					type='text'
					placeholder='username'
					defaultValue={desiredUsername}
					className='text-center p-2 w-full font-medium outline-indigo-500 rounded-md border mx-auto '
					autoComplete='off'
				/>
				{taken && (
					<div className='text-center bg-red-200 border border-red-500 p-2 rounded-md'>
						This username is taken
					</div>
				)}
				<SubmitButton>
					<span>Claim your username</span>
					<ArrowRightCircleIcon />
				</SubmitButton>
			</div>
		</form>
	)
}

export default UsernameForm
