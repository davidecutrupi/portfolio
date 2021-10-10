import Image from 'next/image'

export const Examples = ({ className }) => {
	return (
		<div id='examples' className={'bg-black flex flex-col items-center w-full ' + className}>

			<span className='text-white font-black text-5xl sm:text-6xl'>A couple of examples</span>

			<div className='my-12 flex items-center'>
				<span className='text-accentColor font-black text-4xl'>What can I do with 3D</span>
				<div className='relative w-10 h-10 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
			</div>

			{ /* Furniture Example */ }
			<div className='relative w-3/4 w-h/3 overflow-hidden'>
				<canvas className='webgl cursor-move rounded-lg' />
				<div className='loading-bar' />

				{ /* Clickable points */ }
				<div className='cursor-pointer point behind point-1'><span className='label py-2 px-4'>Open left drawer</span></div>
				<div className='cursor-pointer point behind point-2'><span className='label py-2 px-4'>Open right drawer</span></div>

			</div>

			<div className='flex items-center my-12'>
				<span className='text-accentColor font-black text-4xl'>And</span>
				<div className='relative w-10 h-10 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
			</div>

			{ /* Dribbble */ }
			<a className='mb-12 font-black text-4xl text-accentColor p-4 bg-white rounded-lg text-center' href='https://www.dribbble.com/davidecutrupi'>
				See some of my Landing Pages <br className='block sm:hidden' />on Dribbble
				<div className='relative w-10 h-10 ml-2 inline-block'><Image alt='link-emoji' src='/emoji/link.png' layout='fill' /></div>
			</a>

		</div>
	)
}