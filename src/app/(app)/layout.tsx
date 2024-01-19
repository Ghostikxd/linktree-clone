import { LineChartIcon, LogOutIcon, SettingsIcon } from 'lucide-react'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import '../globals.css'
import { authOptions } from '../utils/authOptions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NetLink',
	description: 'LinkTree clone',
}

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(authOptions)
	if (!session) {
		return redirect('/')
	}

	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex min-h-screen'>
					<aside className='bg-gray-300 w-48 p-4'>
						<div className='rounded-full overflow-hidden w-24 mx-auto'>
							<Image
								src={session.user?.image || ''}
								width={256}
								height={256}
								alt='avatar'
								priority
							></Image>
						</div>
						<div className='text-center'>
							<nav className='inline-flex flex-col text-center mt-8 gap-4'>
								<Link
									className='hover:underline hover:scale-105 duration-500 flex gap-2 '
									href={'/account'}
								>
									<SettingsIcon />
									<span>Settings</span>
								</Link>
								<Link
									className='hover:underline hover:scale-105 duration-500 flex gap-2  '
									href={'/analytics'}
								>
									<LineChartIcon />
									<span>Analytics</span>
								</Link>
								<button className='flex  gap-2 hover:underline hover:scale-105 duration-500'>
									<LogOutIcon />
									<span>Logout</span>
								</button>
							</nav>
						</div>
					</aside>
					<div className='p-6 max-w-4xl mx-auto'>{children}</div>
				</main>
			</body>
		</html>
	)
}
