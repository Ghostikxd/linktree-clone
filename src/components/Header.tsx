import Link from 'next/link'

const Header = () => {
	return (
		<header className=' bg-gray-300 border-b border-gray-500  py-4'>
			<div className='max-w-4xl flex justify-between mx-auto px-6'>
				<div className='flex gap-6 items-baseline '>
					<Link href={'/'} className='text-lg'>
						NetLink
					</Link>
					<nav className='flex  gap-4 text-gray-700'>
						<Link href={'/about'}>About</Link>
						<Link href={'/pricing'}>Pricing</Link>
						<Link href={'/contact'}>Contact</Link>
					</nav>
				</div>

				<nav className='flex items-center gap-4 text-gray-700'>
					<Link href={'/login'}>Sign In</Link>
					<Link href={'/sing-up'}>Sing Up</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
