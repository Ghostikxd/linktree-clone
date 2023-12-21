import { authOptions } from '@/app/utils/authOptions'
import { LinkIcon } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import LogoutButton from './buttons/LogoutButton'

const Header = async () => {
	const session = await getServerSession(authOptions)

	return (
		<header className=' bg-gray-300 border-b border-gray-500  py-4'>
			<div className='max-w-4xl flex justify-between mx-auto px-6'>
				<div className='flex gap-6 items-baseline '>
					<Link
						href={'/'}
						className='text-lg hover:scale-105 duration-500 flex justify-center items-baseline gap-1'
					>
						<LinkIcon className='h-4 w-4 text-indigo-600' />
						<span className='font-semibold'>NetLink</span>
					</Link>
					<nav className='flex  gap-4 text-gray-700 '>
						<Link href={'/about'} className='hover:scale-105 duration-500'>
							About
						</Link>
						<Link href={'/pricing'} className='hover:scale-105 duration-500'>
							Pricing
						</Link>
						<Link href={'/contact'} className='hover:scale-105 duration-500'>
							Contact
						</Link>
					</nav>
				</div>

				<nav className='flex items-center gap-4 	'>
					{!!session && (
						<>
							<Link
								href={'/profile'}
								className='hover:underline hover:scale-105 duration-500'
							>
								Profile
							</Link>
							<LogoutButton></LogoutButton>
						</>
					)}
					{!session && (
						<>
							<Link href={'/login'} className='hover:scale-105 duration-500'>
								Sign In
							</Link>
							<Link href={'/sing-up'} className='hover:scale-105 duration-500'>
								Sing Up
							</Link>
						</>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Header
