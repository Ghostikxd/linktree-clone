import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
	return (
		<button
			type='button'
			role='button'
			className={clsx([
				'shadow-xl px-4 py-2 rounded-full text-white bg-indigo-600 duration-700 hover:bg-indigo-500 hover:scale-105  active:bg-indigo-700',
				className,
			])}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
