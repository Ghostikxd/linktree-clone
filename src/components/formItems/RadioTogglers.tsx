import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface RadioTogglersProps {
	options: {
		value: string
		icon: IconProp
		label: string
	}[]
	defaultValue: string
}

const RadioTogglers = ({ options, defaultValue }: RadioTogglersProps) => {
	return (
		<div className='radio-togglers shadow'>
			{options.map(option => (
				<label key={option.value}>
					<input
						type='radio'
						name='bgType'
						value={option.value}
						defaultChecked={defaultValue === option.value}
					/>
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
