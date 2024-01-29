import { authOptions } from '@/app/utils/authOptions'
import { faImage, faPalette } from '@fortawesome/free-solid-svg-icons'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import RadioTogglers from '../formItems/RadioTogglers'

interface PageModel {
	_id: string
	uri: string
	owner: string
	createdAt: string
	updatedAt: string
	__v: number
}

const PageSettingsForm = async ({ page }: { page: PageModel }) => {
	const session = await getServerSession(authOptions)
	return (
		<div className='-m-4'>
			<form>
				<div className='bg-gray-400 py-16 flex justify-center items-center rounded-t-md'>
					<RadioTogglers
						options={[
							{ value: 'color', icon: faPalette, label: 'Color' },
							{ value: 'image', icon: faImage, label: 'Image' },
						]}
					/>
				</div>
				<div className='flex justify-center'>
					<Image
						src={session?.user?.image || ''}
						height={128}
						width={128}
						alt='avatar'
						priority
						className='rounded-full relative -top-8 border-4 border-gray-200 shadow-lg shadow-black/50'
					/>
				</div>
				<div>
					<input type='text' placeholder='Display name' />
					<input type='text' placeholder='Location' />
					<textarea name='' placeholder='Bio'></textarea>
				</div>
			</form>
		</div>
	)
}

export default PageSettingsForm
