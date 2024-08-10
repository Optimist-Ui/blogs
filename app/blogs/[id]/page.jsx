// Replace the contents of page.jsx with this
import Footer from '@/app/components/Footer';
import { assets, blog_data } from '@/public/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';

// Server-side function to fetch data
async function getData(id) {
  return blog_data.find(item => item.id == id) || null;
}

// Server Component
export default async function ComponentPage({ params }) {
  let data = await getData(params.Id);
  
  

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <>
      <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Link href={`/`}>
            <Image src={assets.logo} alt="Not Available" priority={true} className='w-[130px] sm:w-auto' />
          </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
            Get Started <Image src={assets.arrow} alt='Not Available'/>
          </button>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <Image src={data.author_img} alt="Not Available" width={60} height={60} className='mx-auto mt-6 border border-white rounded-full' />
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} alt="Not Available" priority={true} width={1280} height={720} className='border-4 border-white'/>
        {/* Other content */}
        <h3 className='my-5 text-[18px] font-semibold'>Conclusion:</h3>
        <p className='my-3'>Managing your lifestyle is a journey that requires dedication and self-reflection...</p>
        <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and Goal Setting</h3>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>
          <p className='my-3'>Before you manage your lifestyle, you must have a clear understanding of what you want to achieve. By start reflecting on your values, aspirations, and long-term goals.</p>          
          <h3 className='my-5 text-[18px] font-semibold'>Conclusion:</h3>
          <p className='my-3'>Managing your lifestyle is journey that requires Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae inventore odit in consequatur alias repudiandae praesentium. Amet accusamus iure deleniti voluptates aliquam, neque reprehenderit, a praesentium blanditiis id, cum qui!</p>
        <div className='my-24'>
          <p className='text-black font-semibold my-4'>Share this article on Social Media</p>
          <div className='flex'>
            <Image src={assets.facebook_icon} alt="Facebook icon" width={40} />
            <Image src={assets.googleplus_icon} alt="Google Plus icon" width={40} />
            <Image src={assets.twitter_icon} alt="Twitter icon" width={40} />
          </div>
        </div>
      </div>
      <Footer />  
    </>
  );
}