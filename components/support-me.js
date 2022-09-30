import Image from 'next/image'
import { useState } from "react"
import { PayPal } from "components/paypal"

export const SupportMe = ({ className }) => {

  const [donation, setDonation] = useState(1)

  return (
    <div className={'flex flex-col w-full ' + className}>
      <span className='text-xl text-red-600 font-black'>SUPPORT MY WORK</span>
      <span className='text-5xl sm:text-6xl font-black mt-8'>Do you like the website?</span>

			<div className='flex items-center mt-4'>
				<span className='text-5xl sm:text-6xl font-black'>Support me with a coffee</span>
				<div className='relative w-12 sm:w-16 h-12 sm:h-16 ml-2'><Image alt='hotBeverage-emoji' src='/emoji/hotBeverage.png' layout='fill' /></div>
			</div>

      <div className='flex items-center mt-8 text-xl'>

        <span>Amount:</span>
        
        <select className='ml-4' onChange={(a) => setDonation(a.target.value)} name="donationValue" >
          <option value="1">1$</option>
          <option value="2">2$</option>
          <option value="5">5$</option>
          <option value="10">10$</option>
          <option value="20">20$</option>
        </select>

        <PayPal className='ml-8 flex items-center' donation={donation} />

      </div>

    </div>
  )
}