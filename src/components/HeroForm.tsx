import Button from './Button'

const HeroForm = () => {
	return (
		<form className='flex mt-4 items-center  '>
			<div className=' rounded overflow-hidden flex items-center shadow-xl focus-within:outline-4 focus-within:ring-2 focus-within:ring-indigo-500 '>
				<span className='bg-white py-2 pl-2 text-gray-500'>netlink.co/</span>
				<input
					type='text'
					placeholder='yourname'
					className='py-2  text-gray-500 outline-none'
				/>
			</div>

			<Button className='ml-2 hover:scale-105 duration-500'>
				Join for free
			</Button>
		</form>
	)
}

export default HeroForm
