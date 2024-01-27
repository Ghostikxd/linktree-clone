import { Image, PaletteIcon } from 'lucide-react'

interface PageModel {
	_id: string
	uri: string
	owner: string
	createdAt: string
	updatedAt: string
	__v: number
}

const PageSettingsForm = ({ page }: { page: PageModel }) => {
	return (
		<div className='-m-4'>
			<form>
				<div className='bg-gray-400 h-32 flex justify-center items-center rounded-t-md'>
					<div className='radio-togglers shadow'>
						<label>
							<input type='radio' name='bgType' value='color' />
							<div>
								<PaletteIcon />
								<span>Color</span>
							</div>
						</label>
						<label>
							<input type='radio' name='bgType' value='image' />
							<div>
								<Image />
								<span>Image</span>
							</div>
						</label>
					</div>
				</div>
				<div>avatar</div>
			</form>
		</div>
	)
}

export default PageSettingsForm
