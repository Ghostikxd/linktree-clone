import AppSideBar from '@/components/layout/AppSideBar'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import Image from 'next/image'
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
	...rest
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
					<aside className='bg-gray-300 w-48 p-4 shadow'>
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
							<AppSideBar />
						</div>
					</aside>
					<div className='grow'>
						<div className='bg-gray-300 m-8 p-4 shadow '>{children}</div>
					</div>
				</main>
			</body>
		</html>
	)
}
