import clsx from 'clsx'
import { ReactNode } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	className?: string
}

const ModalSignIn = ({ isOpen, onClose, children, className }: ModalProps) => {
	const modalClasses = clsx(
		' flex flex-col justify-center items-center gap-3 mb-5',
		className
	)

	return (
		<>
			{isOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50'
					onClick={onClose}
				/>
			)}
			<dialog
				open={isOpen}
				className=' inset-0 bg-white px-8 py-4 rounded-md max-w-md mx-auto my-auto'
			>
				<div className={modalClasses}>
					<div className='text-right'>
						<button
							className='absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-500'
							onClick={onClose}
						>
							&times;
						</button>
					</div>
					{children}
				</div>
			</dialog>
		</>
	)
}

export default ModalSignIn
