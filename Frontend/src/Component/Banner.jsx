import React from 'react'
import Benner from '../../public/BookBanner.jpg'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container md:px-20 px-4 flex flex-col md:flex-row'>
                <div className='w-full order-2 md:order-1  md:w-1/2 mt-12  md:mt-36'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Hello, Welcome to here to something <span className='text-pink-500'>New Everyday!!!</span></h1>
                        <p className='text-xl'>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."Your attitude, not your aptitude, will determine your altitude."</p>
                        <div className='space-y-6'>
                            <label className="input input-bordered flex items-center gap-2 bg-white p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 ">
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow bg-transparent outline-none" placeholder="Email" />
                            </label>
                            <button className="btn btn-active btn-secondary">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='w-full order-1 md:w-1/2 mt-12 md:mt-24 ml-52'>
                    <img src={Benner} className=' h-3/6 w-full border rounded-md' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner