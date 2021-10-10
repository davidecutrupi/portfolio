import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export const Footer = ({ className }) => {
  return (
    <footer className={'w-full bg-accentColor flex flex-col text-white text-2xl ' + className}>

      <div className='flex items-center justify-between flex-col sm:flex-row'>

        <div className='flex flex-col items-center sm:items-start'>
          <span className='font-light'>For more information, contact me by email.</span>
          <span className='font-light mt-4'>Sustain me with a donation !</span>
          <span className='font-extralight select-text mt-4 inline sm:hidden'>business@davidecutrupi.com</span>
        </div>

        <div className='flex items-center mt-12 sm:mt-0'>
          <a href='https://www.fiverr.com'><div className='relative w-16 h-16'><Image alt='vercel-icon' src='/icons/fiverr.svg' layout='fill' /></div></a>
          <a href='https://www.dribbble.com/davidecutrupi'><FontAwesomeIcon icon={['fab', 'dribbble']} className='w-12 ml-6' /></a>
          <a href='https://www.github.com/davidecutrupi'><FontAwesomeIcon icon={['fab', 'github']} className='w-12 ml-6' /></a>
          <a href='https://www.twitter.com/davidecutrupii'><FontAwesomeIcon icon={['fab', 'twitter']} className='w-12 ml-6' /></a>
          <a href='https://www.instagram.com/davidecutrupii'><FontAwesomeIcon icon={['fab', 'instagram']} className='w-12 ml-6' /></a>
        </div>

      </div>

      <div className='flex items-center text-xl w-max mx-auto justify-between mt-12'>
        <span className='font-extralight'>© 2021 Davide Cutrupi</span>
		<div className='flex items-center ml-12 sm:mx-12 md:mx-24 lg:mx-48'>
			<div className='relative w-6 h-6 mr-2'><Image alt='construction-emoji' src='/emoji/construction.png' layout='fill' /></div>
	        <span className='font-extralight'>Website continuously updated</span>
			<div className='relative w-6 h-6 ml-2'><Image alt='construction-emoji' src='/emoji/construction.png' layout='fill' /></div>
		</div>
        <span className='font-extralight select-text hidden sm:inline'>business@davidecutrupi.com</span>
      </div>

    </footer>
  )
}