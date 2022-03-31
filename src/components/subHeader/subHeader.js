import React from 'react'
import Ellipse1 from '../../asset/Ellipse1.png'

export default function SubHeader() {
    return (
        <div className='mt-20'>
            <img src={Ellipse1} alt='' className='absolute top-0 left-0' />
            <h2 className='text-5xl font-black text-center text-slate-50'>Order Hanya Dengan</h2>
            <h2 className='text-5xl font-black text-center text-slate-50 py-4'>QR Code</h2>
            <p className='text-lg text-center text-slate-800'>mudahkan pelanggan anda untuk memilih menu,</p>
            <p className='text-lg text-center text-slate-800'>cukup dengan Scan QR Code</p>
            <form className='flex justify-center mt-8'>
                <button className='border-2 hover:bg-slate-100 py-2 px-4 rounded-full text-slate-100 hover:text-green-600 font-bold mr-3 shadow-lg' type='submit'>coba gratis</button>
                <button className='bg-slate-100 hover:bg-transparent border-2 py-2 px-4 rounded-full text-green-600 hover:text-slate-100 font-bold shadow-lg' type='submit'>daftar sekarang</button>
            </form>
        </div>
    )
}
