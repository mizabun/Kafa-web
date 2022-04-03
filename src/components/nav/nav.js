import React, { useState } from 'react'
import home from '../../asset/home.png'
import layanan from '../../asset/layanan.png'

export default function Navbar() {
    const [activeNav, setActiveNav] = useState('#')
    const [show, setShow] = useState(true)
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <nav>
                {
                    show ?
                        <div className='block left-2/4 -translate-x-2/4 fixed bottom-4'>
                            <div className='bg-indigo-900 bg-opacity-30 rounded-full p-2 space-x-5 flex items-center'>
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
                        : null
                }
            </nav >
            <button onClick={() => setShow(false)} className={show === false ? 'hidden' : 'block right-10 rotate-90  fixed bottom-28'}>Hide Navbar</button>
            <button onClick={() => setShow(true)} className={show === true ? 'hidden' : 'block right-9 rotate-90 fixed bottom-28'}>Show Navbar</button>
        </>
    )
}
