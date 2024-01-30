'use client'
import { savePageSettings } from '@/actions/pageActions'
import { faImage, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { SubmitButton } from '../buttons/SubmitButton'
import RadioTogglers from '../formItems/RadioTogglers'

interface PageModelProps {
	displayName: string
	location: string
	bio: string
	_id: string
	uri: string
	owner: string
	createdAt: string
	updatedAt: string
	__v: number
}

interface UserProps {
	email?: string | null | undefined
	image?: string | null | undefined
	name?: string | null | undefined
}

interface PageSettingsFormProps {
	page: PageModelProps
	user?: UserProps
}

const PageSettingsForm = ({ page, user }: PageSettingsFormProps) => {
	async function saveBaseSettings(formData: FormData) {
		const result = await savePageSettings(formData)
		console.log(result)
	}
	return (
		<div className='-m-4'>
			<form action={saveBaseSettings}>
				<div className='bg-gray-400 py-16 flex justify-center items-center rounded-t-md'>
					<RadioTogglers
						options={[
							{ value: 'color', icon: faPalette, label: 'Color' },
							{ value: 'image', icon: faImage, label: 'Image' },
						]}
					/>
				</div>
				<div className='flex justify-center -mb-12'>
					<Image
						src={user?.image || ''}
						height={128}
						width={128}
						alt='avatar'
						className='rounded-full relative -top-8 border-4 border-gray-200 shadow-lg shadow-black/50'
					/>
				</div>
				<div className='p-4'>
					<label className='input-label' htmlFor='nameIn'>
						Display name
					</label>
					<input
						type='text'
						id='nameIn'
						name='displayName'
						defaultValue={page.displayName}
						placeholder='Your name'
						autoComplete='off'
					/>
					<label className='input-label' htmlFor='locationIn'>
						Location
					</label>
					<input
						type='text'
						id='locationIn'
						name='location'
						defaultValue={page.location}
						placeholder='Somewhere in the world...'
						autoComplete='off'
					/>
					<label className='input-label' htmlFor='bioIn'>
						Bio
					</label>
					<textarea
						name='bio'
						defaultValue={page.bio}
						id='bioIn'
						placeholder='Your bio goes here...'
						autoComplete='off'
					/>
					<div className='max-w-[200px] mx-auto '>
						<SubmitButton className='items-stretch'>
							<FontAwesomeIcon icon={faSave} className='h-5 w-5' />
							<span>Save</span>
						</SubmitButton>
					</div>
				</div>
			</form>
		</div>
	)
}

export default PageSettingsForm
