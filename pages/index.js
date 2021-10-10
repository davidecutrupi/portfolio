import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

import { Header } from '../components/header'
import { MainSection } from '../components/main-section'
import { AboutMe } from '../components/about-me'
import { Examples } from '../components/examples'
import { Footer } from '../components/footer'
import { SupportMe } from '../components/support-me'

import { init } from '../utils/furniture'



export default function Home() {

  useEffect(() => {
    init(document.querySelector('canvas.webgl'))
  })

  return (
    <div className='overflow-x-hidden flex flex-col items-center'>
      <Head><title>Davide Cutrupi | Portfolio</title></Head>

			<Header className='mt-4' />

			<MainSection className='w-full mt-20 sm:mt-36' />

			{ /* Waves */ }
			<div className='relative mt-12 w-full'>

				{ /* Top Wave */ }
				<svg viewBox="0 0 1440 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
						<stop stopColor="rgba(19.849, 120.349, 189.4, 1)" offset="0%" />
						<stop stopColor="rgba(7, 154, 255, 1)" offset="100%" />
					</linearGradient></defs>
					<path style={{ transform: 'translate(0, 0px)', opacity: '1' }} fill="url(#sw-gradient-0)"
						d="M0,22L26.7,40.3C53.3,59,107,95,160,99C213.3,103,267,73,320,73.3C373.3,73,427,103,480,102.7C533.3,103,587,73,640,69.7C693.3,66,747,88,800,84.3C853.3,81,907,51,960,51.3C1013.3,51,1067,81,1120,77C1173.3,73,1227,37,1280,22C1333.3,7,1387,15,1440,22C1493.3,29,1547,37,1600,55C1653.3,73,1707,103,1760,117.3C1813.3,132,1867,132,1920,135.7C1973.3,139,2027,147,2080,150.3C2133.3,154,2187,154,2240,157.7C2293.3,161,2347,169,2400,165C2453.3,161,2507,147,2560,139.3C2613.3,132,2667,132,2720,128.3C2773.3,125,2827,117,2880,113.7C2933.3,110,2987,110,3040,121C3093.3,132,3147,154,3200,154C3253.3,154,3307,132,3360,102.7C3413.3,73,3467,37,3520,25.7C3573.3,15,3627,29,3680,40.3C3733.3,51,3787,59,3813,62.3L3840,66L3840,220L3813.3,220C3786.7,220,3733,220,3680,220C3626.7,220,3573,220,3520,220C3466.7,220,3413,220,3360,220C3306.7,220,3253,220,3200,220C3146.7,220,3093,220,3040,220C2986.7,220,2933,220,2880,220C2826.7,220,2773,220,2720,220C2666.7,220,2613,220,2560,220C2506.7,220,2453,220,2400,220C2346.7,220,2293,220,2240,220C2186.7,220,2133,220,2080,220C2026.7,220,1973,220,1920,220C1866.7,220,1813,220,1760,220C1706.7,220,1653,220,1600,220C1546.7,220,1493,220,1440,220C1386.7,220,1333,220,1280,220C1226.7,220,1173,220,1120,220C1066.7,220,1013,220,960,220C906.7,220,853,220,800,220C746.7,220,693,220,640,220C586.7,220,533,220,480,220C426.7,220,373,220,320,220C266.7,220,213,220,160,220C106.7,220,53,220,27,220L0,220Z" />
				</svg>

				{ /* About Me text */ }
				<div style={{ top: '35%' }} className='absolute flex flex-col items-center w-full z-10'>
					<span className='font-black text-white text-2xl sm:text-4xl md:text-5xl tracking-wider'>ABOUT ME</span>
					<div className='flex items-center mt-4 sm:mt-8 md:mt-12'>
						<div className='relative w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
						<div className='relative w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
						<div className='relative w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 ml-2'><Image alt='downArrow-emoji' src='/emoji/downArrow.png' layout='fill' /></div>
					</div>
				</div>
				
				{ /* Bottom Wave */ }
				<svg style={{ transform: 'rotate(180deg)' }} viewBox="0 0 1440 220" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
						<stop stopColor="rgba(19.849, 120.349, 189.4, 1)" offset="0%" />
						<stop stopColor="rgba(7, 154, 255, 1)" offset="100%" />
					</linearGradient></defs>
					<path style={{ transform: 'translate(0, 0px)', opacity: '1' }} fill="url(#sw-gradient-0)"
						d="M0,22L26.7,40.3C53.3,59,107,95,160,99C213.3,103,267,73,320,73.3C373.3,73,427,103,480,102.7C533.3,103,587,73,640,69.7C693.3,66,747,88,800,84.3C853.3,81,907,51,960,51.3C1013.3,51,1067,81,1120,77C1173.3,73,1227,37,1280,22C1333.3,7,1387,15,1440,22C1493.3,29,1547,37,1600,55C1653.3,73,1707,103,1760,117.3C1813.3,132,1867,132,1920,135.7C1973.3,139,2027,147,2080,150.3C2133.3,154,2187,154,2240,157.7C2293.3,161,2347,169,2400,165C2453.3,161,2507,147,2560,139.3C2613.3,132,2667,132,2720,128.3C2773.3,125,2827,117,2880,113.7C2933.3,110,2987,110,3040,121C3093.3,132,3147,154,3200,154C3253.3,154,3307,132,3360,102.7C3413.3,73,3467,37,3520,25.7C3573.3,15,3627,29,3680,40.3C3733.3,51,3787,59,3813,62.3L3840,66L3840,220L3813.3,220C3786.7,220,3733,220,3680,220C3626.7,220,3573,220,3520,220C3466.7,220,3413,220,3360,220C3306.7,220,3253,220,3200,220C3146.7,220,3093,220,3040,220C2986.7,220,2933,220,2880,220C2826.7,220,2773,220,2720,220C2666.7,220,2613,220,2560,220C2506.7,220,2453,220,2400,220C2346.7,220,2293,220,2240,220C2186.7,220,2133,220,2080,220C2026.7,220,1973,220,1920,220C1866.7,220,1813,220,1760,220C1706.7,220,1653,220,1600,220C1546.7,220,1493,220,1440,220C1386.7,220,1333,220,1280,220C1226.7,220,1173,220,1120,220C1066.7,220,1013,220,960,220C906.7,220,853,220,800,220C746.7,220,693,220,640,220C586.7,220,533,220,480,220C426.7,220,373,220,320,220C266.7,220,213,220,160,220C106.7,220,53,220,27,220L0,220Z" />
				</svg>

			</div>

			<AboutMe className='mt-24' />

      <Examples className='mt-24 py-24' />

      { /* Support me */ }
      <SupportMe className='px-12 md:px-24 lg:px-48 my-24 md:my-48' />

      { /* Footer */ }
      <Footer className='px-12 md:px-24 lg:px-48 pt-12 sm:pt-24 pb-12' />

    </div>
  )
}
