import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface RadioTogglersProps {
	options: {
		value: string
		icon: IconProp
		label: string
	}[]
}

const RadioTogglers = ({ options }: RadioTogglersProps) => {
	return (
		<div className='radio-togglers shadow'>
			{options.map(option => (
				<label key={option.value}>
					<input type='radio' name='bgType' value={option.value} />
					<div>
						<FontAwesomeIcon icon={option.icon} className='h-5 w-5' />
						<span>{option.label}</span>
					</div>
				</label>
			))}
		</div>
	)
}

export default RadioTogglers
