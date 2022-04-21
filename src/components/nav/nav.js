import React, { useState } from 'react'
import home from '../../asset/home.png'
import layanan from '../../asset/layanan.png'

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('#')
    const [show, setShow] = useState(true)
    return (
        <>
            <nav>
                <div className={`${show ? '' : 'transform translate-y-14'} block left-2/4 -translate-x-2/4 fixed bottom-4 transition-transform duration-1000`}>
                    <div className=' rounded-full bg-indigo-900 bg-opacity-30 '>
                        <div className='flex justify-center' onClick={() => setShow(!show)}>
                            <div className={`${show ? '' : 'rotate-180 translate-y-2/3 '} flex justify-center pt-2 transition duration-1000`}>
                                <div className='h-1 w-4 rounded-md bg-slate-700 rotate-45'></div>
                                <div className='h-1 w-4 rounded-md bg-slate-700 -rotate-45 -ml-2'></div>
                            </div>
                        </div>
                        <div className='flex items-center space-x-5 p-2'>
                            <a href='#header' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'bg-black bg-opacity-20 rounded-full p-1' : ''}>
                                <img src={home} alt='' className='mix-blend-color-burn' />
                            </a>
                            <a href='#layanan' onClick={() => setActiveNav('#layanan')} className={activeNav === '#layanan' ? 'bg-black bg-opacity-20 rounded-full p-1' : ''}>
                                <img src={layanan} alt='' className='mix-blend-color-burn' />
                            </a>
                            <a href='#harga' onClick={() => setActiveNav('#harga')} className={activeNav === '#harga' ? 'bg-black bg-opacity-20 rounded-full p-1' : ''}>
                                <img src={layanan} alt='' className='mix-blend-color-burn' />
                            </a>
                            <a href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'bg-black bg-opacity-20 rounded-full p-1' : ''}>
                                <img src={home} alt='' className='mix-blend-color-burn' />
                            </a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
