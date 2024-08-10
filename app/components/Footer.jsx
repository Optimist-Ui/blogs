import { assets } from '@/public/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row py-5 bg-black items-center'>
        <Image src={assets.logo_light} alt='Not Available' width={120}/>
        <p className='text-sm text-white'>ALl right reserved. Copyright @blogger</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='Not Available' width={40} className='cursor-pointer' />
            <Image src={assets.googleplus_icon} alt='Not Available' width={40} className='cursor-pointer' />
            <Image src={assets.twitter_icon} alt='Not Available' width={40} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer
