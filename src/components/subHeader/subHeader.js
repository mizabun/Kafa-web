import React from 'react'

export default function SubHeader() {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-black text-center text-indigo-900'>Order Hanya Dengan</h2>
            <h2 className='text-5xl font-black text-center text-indigo-900 py-4'>QR Code</h2>
            <p className='text-lg text-center text-slate-800'>mudahkan pelanggan anda untuk memilih menu,</p>
            <p className='text-lg text-center text-slate-800'>cukup dengan Scan QR Code</p>
            <form className='flex justify-center mt-8'>
                <button className='border-2 hover:bg-indigo-900 py-2 px-4 rounded-full text-indigo-900 hover:text-white font-bold mr-3 shadow-lg' type='submit'>Coba Sekarang</button>
                <button className='bg-indigo-900 hover:bg-transparent border-2 py-2 px-4 rounded-full text-white hover:text-indigo-900 font-bold shadow-lg' type='submit'>Daftar Gratis</button>
            </form>
        </div>
    )
}
