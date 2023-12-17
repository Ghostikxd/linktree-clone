import Button from '@/components/Button'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginPage = () => {
	return (
		<div className=''>
			<div className='bg-gray-300 border rounded p-4 max-w-xs mx-auto flex flex-col items-center'>
				<h1 className='mb-4 text-4xl font-bold text-center'>Sign In</h1>
				<p className='mr-auto text-gray-600 mb-4'>
					Sign in to your account using one of the methods below:
				</p>
				<Button className='flex gap-2 justify-center items-center shadow-lg'>
					<FontAwesomeIcon icon={faGoogle} className='w-5 h-5' />
					<span>Sign In with Google</span>
				</Button>
			</div>
		</div>
	)
}

export default LoginPage
