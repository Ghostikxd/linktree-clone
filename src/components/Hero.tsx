import { authOptions } from '@/app/utils/authOptions'
import { getServerSession } from 'next-auth'
import HeroForm from './forms/HeroForm'

const Hero = async () => {
	const session = await getServerSession(authOptions)
	return (
		<section className='pt-32'>
			<div className='max-w-md'>
				<h1 className='text-6xl font-bold'>
					Your one link
					<br /> for everything
				</h1>
				<h2 className='text-gray-700 text-xl mt-6'>
					Share your links, social profiles, contact info and more on one page
				</h2>
			</div>
			<HeroForm user={!!session?.user} />
		</section>
	)
}

export default Hero
