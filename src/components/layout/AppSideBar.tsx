'use client'
import { ArrowLeftToLineIcon, LineChartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from '../buttons/LogoutButton'

const AppSideBar = () => {
	const path = usePathname()

	return (
		<nav className='inline-flex flex-col text-center mt-10 gap-6	'>
			<Link
				className={
					'hover:underline hover:scale-105 duration-500 flex gap-2 ' +
					(path === '/account' ? 'text-indigo-600 font-semibold' : '')
				}
				href={'/account'}
			>
				<UserIcon />
				<span>My Page</span>
			</Link>
			<Link
				className={
					'hover:underline hover:scale-105 duration-500 flex gap-2  ' +
					(path === '/analytics' ? 'text-indigo-600 font-semibold' : '')
				}
				href={'/analytics'}
			>
				<LineChartIcon />
				<span>Analytics</span>
			</Link>
			<LogoutButton
				className={'flex  gap-2 hover:underline hover:scale-105 duration-500 '}
				iconLeft={true}
				iconClasses=''
			/>
			<Link
				href={'/'}
				className='hover:underline  duration-500 flex gap-2 items-center text-sm border-t text-gray-700 pt-2 border-gray-900   '
			>
				<ArrowLeftToLineIcon className='h-5 w-5' />
				<span>Go Back</span>
			</Link>
		</nav>
	)
}

export default AppSideBar
