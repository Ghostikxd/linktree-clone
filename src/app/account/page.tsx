import Button from '@/components/buttons/Button'
import { ArrowRightCircleIcon } from 'lucide-react'
import { NextApiRequest } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../utils/authOptions'

interface CustomRequest extends NextApiRequest {
	searchParams?: {
		desiredUsername?: string
	}
}

const AccountPage = async (req: CustomRequest) => {
	const session = await getServerSession(authOptions)
	const desiredUsername = req.searchParams?.desiredUsername

	if (!session) {
		redirect('/')
	}

	return (
		<div>
			<form>
				<h1 className='mb-4 text-2xl font-bold text-center'>
					Grab your username
				</h1>
				<p className='mr-auto text-gray-900 mb-4 text-center'>
					Choose your username:
				</p>
				<div className='max-w-xs mx-auto'>
					<input
						type='text'
						placeholder='username'
						defaultValue={desiredUsername}
						className='text-center p-2 w-full font-medium outline-indigo-500 rounded-md border mx-auto block '
					/>
					<Button
						type='submit'
						className='mx-auto  mt-3 w-full flex items-center justify-center gap-2'
					>
						<span>Claim your username</span>
						<ArrowRightCircleIcon />
					</Button>
				</div>
			</form>
		</div>
	)
}

export default AccountPage
