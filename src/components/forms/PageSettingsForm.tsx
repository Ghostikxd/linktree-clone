'use client'
import { savePageSettings } from '@/actions/pageActions'
import { faImage, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { SubmitButton } from '../buttons/SubmitButton'
import RadioTogglers from '../formItems/RadioTogglers'

interface PageModelProps {
	displayName: string
	location: string
	bio: string
	bgType: string
	bgColor: string
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
		if (result) {
			toast.success('Saved!')
		} else {
			toast.error('Failed to save.')
		}
	}
	return (
		<div className='-m-4'>
			<form action={saveBaseSettings}>
				<div
					className=' py-16 flex justify-center items-center rounded-t-md'
					style={{ backgroundColor: page.bgColor }}
				>
					<div>
						<RadioTogglers
							defaultValue={page.bgType}
							options={[
								{ value: 'color', icon: faPalette, label: 'Color' },
								{ value: 'image', icon: faImage, label: 'Image' },
							]}
						/>
						<div className='bg-gray-300 rounded shadow text-gray-700 mt-2	'>
							{page.bgType === 'color' && (
								<div className='mt-2 flex justify-center items-center gap-2'>
									<span>Background Color:</span>
									<input
										type='color'
										className='bg-gray-300'
										name='bgColor'
										defaultValue={page.bgColor}
									/>
								</div>
							)}
						</div>
					</div>
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
						className='settings-page'
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
						className='settings-page'
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
