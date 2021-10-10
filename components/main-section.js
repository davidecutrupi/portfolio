import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainSection = ({ className }) => {

	const copyEmail = () => { navigator.clipboard.writeText('business@davidecutrupi.com') }

	return (	
		<div className={'flex justify-around ' + className}>

			<div className='flex flex-col'>

				<span className='text-7xl lg:text-8xl font-black'>Make it better,</span>

				<div className='mt-4 lg:mt-8 flex items-end'>
					<span className='text-7xl lg:text-8xl font-black'>make it in <span className='text-8xl lg:text-9xl text-3d rainbow'>3D</span></span>
					<div className='relative w-20 lg:w-32 h-20 lg:h-32 ml-8'><Image alt='rocket-emoji' src='/emoji/rocket.png' layout='fill' /></div>
				</div>

				<span className='font-light text-xl mt-12'>Why? Because only 0.1% of websites have 3D parts. <br className='block lg:hidden' />Make your site more engaging!</span>

				<div className='flex items-center mt-6 text-xl'>
					<span className='font-light'>Write me an email</span>
					<div className='relative w-6 h-6 ml-2'><Image alt='writingHand-emoji' src='/emoji/writingHand.png' layout='fill' /></div>
					<div onClick={() => copyEmail()} className='flex items-center ml-8 shadow-xl p-2 rounded-xl border-2 border-black cursor-pointer'>
						<span>business@davidecutrupi.com</span>
						<FontAwesomeIcon icon={['far', 'copy']} className='w-4 ml-2' />
					</div>
				</div>

			</div>

			<div className='radial-bg w-80 lg:w-96 h-80 lg:h-96 relative hidden sm:block'>
				<Image src='/landing.png' layout='fill' alt='photo' />
			</div>
			
		</div>
	)
}