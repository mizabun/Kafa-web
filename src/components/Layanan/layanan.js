import React from 'react'
import { Link } from "react-router-dom";

export default function Layanan() {
    return (
        <div>
            <h2 id='layanan' className='py-6 text-center text-3xl font-black'>Apa yang anda dapat dengan Kahfa</h2>
            <div className='flex mt-14'>
                <div className='w-2/4'>

                </div>
                <div className='flex-col pl-28 w-2/4'>
                    <div className='hover:bg-green-600 transition-all duration-500 hover:text-white rounded-lg py-5 px-5'>
                        <h3 className='font-extrabold text-2xl'>Aplikasi Kasir untuk toko Offline</h3>
                        <p className='text-slate-600 font-medium py-3'>pantau toko anda dengan aplikasi kasir dari kahfa yang dilengkapi dengan laporan harian</p>
                        <Link to='/kasir'>Pelajari Selengkapnya</Link>
                    </div>
                    <div className='hover:bg-green-600 transition-all duration-500 hover:text-white rounded-lg py-5 px-5'>
                        <h3 className='font-extrabold text-2xl'>Aplikasi Kasir untuk toko Offline</h3>
                        <p className='text-slate-600 font-medium py-3'>pantau toko anda dengan aplikasi kasir dari kahfa yang dilengkapi dengan laporan harian</p>
                    </div>
                    <div className='hover:bg-green-600 transition-all duration-500 hover:text-white rounded-lg py-5 px-5'>
                        <h3 className='font-extrabold text-2xl'>Aplikasi Kasir untuk toko Offline</h3>
                        <p className='text-slate-600 font-medium py-3'>pantau toko anda dengan aplikasi kasir dari kahfa yang dilengkapi dengan laporan harian</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
