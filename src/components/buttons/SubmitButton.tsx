import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import Button from './Button'

export const SubmitButton = ({
	children,
	className = '',
}: {
	children: ReactNode
	className?: string
}) => {
	const { pending } = useFormStatus()
	return (
		<Button
			type='submit'
			disabled={pending}
			className={
				'mx-auto  mt-3 w-full flex items-center justify-center gap-2 disabled:bg-indigo-400 disabled:text-gray-200 ' +
				className
			}
		>
			{pending ? 'Saving...' : children}
		</Button>
	)
}
