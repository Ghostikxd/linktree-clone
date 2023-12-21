import LoginWithGoogle from '@/components/buttons/LoginWithGoogle'

const LoginPage = () => {
	return (
		<div className=''>
			<div className='bg-gray-300 border rounded p-4 max-w-xs mx-auto flex flex-col items-center'>
				<h1 className='mb-4 text-4xl font-bold text-center'>Sign In</h1>
				<p className='mr-auto text-gray-600 mb-4'>
					Sign in to your account using one of the methods below:
				</p>
				<LoginWithGoogle />
			</div>
		</div>
	)
}

export default LoginPage
