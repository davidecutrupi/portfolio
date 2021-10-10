import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export const AboutMe = ({ className }) => {
	return (
		<div id='about-me' className={'flex flex-col items-center ' + className}>

			{ /* Presentation */ }
			<span className='text-4xl sm:text-6xl font-black text-center'>Hi, I'm Davide Cutrupi, a self-taught developer</span>

			{ /* Frontend */ }
			<div className='my-12 flex items-center'>
				<span className='text-4xl font-black text-accentColor'>Frontend knowledge</span>
				<div className='relative w-10 h-10 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
			</div>

			{ /* Frontend | First row */ }
			<div className='flex items-center text-2xl font-light'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'html5']} className='w-4' />
					<span className='ml-2'>HTML</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'css3-alt']} className='w-4' />
					<span className='ml-2'>CSS</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'sass']} className='w-4' />
					<span className='ml-2'>Scss / Sass</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'bootstrap']} className='w-4' />
					<span className='ml-2'>Bootstrap</span>
				</div>
			</div>

			{ /* Frontend | Second row */ }
			<div className='flex items-center text-2xl font-light mt-6'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'wordpress']} className='w-4' />
					<span className='ml-2'>Wordpress</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='tailwindcss-icon' src='/icons/tailwindcss.svg' layout='fill' /></div>
					<span className='ml-2'>TailwindCss</span>
				</div>
			</div>

			{ /* Frontend | Third row */ }
			<div className='flex items-center text-2xl font-light mt-6'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'js-square']} className='w-4' />
					<span className='ml-2'>Javascript</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='jquery-icon' src='/icons/jquery.svg' layout='fill' /></div>
					<span className='ml-2'>JQuery</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'npm']} className='w-4' />
					<span className='ml-2'>Npm</span>
				</div>
			</div>

			{ /* Frontend | Fourth row */ }
			<div className='flex items-center text-2xl font-light mt-6'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'angular']} className='w-4' />
					<span className='ml-2'>Angular</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'react']} className='w-4' />
					<span className='ml-2'>React</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='nextJs-icon' src='/icons/nextJs.svg' layout='fill' /></div>
					<span className='ml-2'>Next Js</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='threeJs-icon' src='/icons/threeJs.svg' layout='fill' /></div>
					<span className='ml-2'>Three Js</span>
				</div>
			</div>

			{ /* Backend */ }
			<div className='my-12 flex items-center'>
				<span className='text-4xl font-black text-accentColor'>Backend knowledge</span>
				<div className='relative w-10 h-10 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
			</div>

			{ /* Backend | First row */ }
			<div className='flex items-center text-2xl font-light'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'node-js']} className='w-4' />
					<span className='ml-2'>NodeJs</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='mongoDB-icon' src='/icons/mongoDB.svg' layout='fill' /></div>
					<span className='ml-2'>MongoDB</span>
				</div>
			</div>

			{ /* Backend | Second row */ }
			<div className='flex items-center text-2xl font-light mt-6'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fas', 'code-branch']} className='w-4' />
					<span className='ml-2'>Git</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'github']} className='w-4' />
					<span className='ml-2'>GitHub</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'docker']} className='w-4' />
					<span className='ml-2'>Docker</span>
				</div>
			</div>

			{ /* Others */ }
			<div className='my-12 flex items-center'>
				<span className='text-4xl font-black text-accentColor'>Others knowledge</span>
				<div className='relative w-10 h-10 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
			</div>

			{ /* Others | First row */ }
			<div className='flex items-center text-2xl font-light'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'android']} className='w-4' />
					<span className='ml-2'>Android App</span>
				</div>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fab', 'figma']} className='w-4' />
					<span className='ml-2'>Figma</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='vercel-icon' src='/icons/vercel.svg' layout='fill' /></div>
					<span className='ml-2'>Vercel</span>
				</div>
			</div>

			{ /* Others | Second row */ }
			<div className='flex items-center text-2xl font-light mt-6'>
				<div className='ml-12 flex items-center'>
					<FontAwesomeIcon icon={['fas', 'ruler-combined']} className='w-4' />
					<span className='ml-2'>Landing Pages</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='finalCut-icon' src='/icons/finalCut.svg' layout='fill' /></div>
					<span className='ml-2'>Final Cut</span>
				</div>
				<div className='ml-12 flex items-center'>
					<div className='relative w-4 h-4'><Image alt='blender-icon' src='/icons/blender.svg' layout='fill' /></div>
					<span className='ml-2'>Blender</span>
				</div>
			</div>

			{ /* And so on */ }
			<div className='mt-12 flex items-center'>
				<span className='text-4xl font-black text-accentColor'>And so on</span>
				<div className='relative w-10 h-10 ml-2'><Image alt='fire-emoji' src='/emoji/fire.png' layout='fill' /></div>
			</div>

		</div>
	)
}