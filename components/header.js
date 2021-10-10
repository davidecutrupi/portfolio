import Link from 'next/link'
import Image from 'next/image'

export const Header = ({ className }) => {
	return (
		<header className={'flex justify-between w-4/5 md:w-3/5 mx-auto ' + className}> 

			<div className='w-28 h-28 relative'>
				<Image src='/logo.svg' layout='fill' alt='logo' />
			</div>

			<div className='flex items-center'>
				<a href='https://mail.google.com/mail/?view=cm&fs=1&to=business@davidecutrupi.com' className='text-2xl font-medium'>Contact me</a>
				<Link href='/#about-me'><a className='text-2xl font-medium ml-12 hidden sm:inline'>About me</a></Link>
				<Link href='/#examples'><a className='ml-12 text-2xl font-medium'>Examples</a></Link>
				<a href='https://www.fiverr.com' className='ml-12 text-2xl font-medium'>Fiverr</a>
			</div>

		</header>
	)
}