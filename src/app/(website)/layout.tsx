import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NetLink',
	description: 'LinkTree clone',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main>
					<Header />
					<div className='p-6 max-w-4xl mx-auto'>{children}</div>
				</main>
			</body>
		</html>
	)
}
