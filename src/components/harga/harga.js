import React from 'react'

export default function Harga() {
    return (
        <>
            <h2 className='font-bold text-3xl text-center py-8'>Harga & Layanan</h2>
            <div className='md:flex md:justify-center'>
                <div className='border border-slate-100 rounded-3xl shadow-lg bg-violet-50 mt-6 md:mt-16 py-10 h-fit md:w-72 text-center space-y-6 '>
                    <h3 className='text-2xl font-extrabold text-indigo-900'>Standar</h3>
                    <p className='text-5xl font-bold text-indigo-900'>Gratis</p>
                    <div className=''>
                        <p className='text-gray-400 font-normal'>Aplikasi kasir</p>
                        <p className='text-gray-400 font-normal'>Laporan harian</p>
                        <p className='text-gray-400 font-normal'>1 user + 1 admin</p>
                    </div>
                    <button className='py-2 px-4 bg-indigo-900 rounded-full text-white'>Daftar Sekarang</button>
                </div>

                <div className='border border-slate-100 rounded-3xl shadow-lg bg-indigo-900 mt-6 md:mt-16 py-10 h-fit md:w-72 text-center space-y-6 md:mx-6'>
                    <h3 className='text-2xl font-extrabold text-white'>Standar</h3>
                    <p className='text-5xl font-bold text-white'>50<span className='text-3xl'>k<sub className='text-sm'>/Bulan</sub></span></p>
                    <div className=''>
                        <p className='text-gray-200 font-normal'>Aplikasi kasir</p>
                        <p className='text-gray-200 font-normal'>Laporan harian</p>
                        <p className='text-gray-200 font-normal'>3 user + 1 admin</p>
                    </div>
                    <button className='py-2 px-4 bg-violet-50 rounded-full text-indigo-900'>Daftar Sekarang</button>
                </div>

                <div className='border border-slate-100 rounded-3xl shadow-lg bg-violet-50 mt-6 md:mt-16 py-10 h-fit md:w-72 text-center space-y-6 '>
                    <h3 className='text-2xl font-extrabold text-indigo-900'>Standar</h3>
                    <p className='text-5xl font-bold text-indigo-900'>75<span className='text-3xl'>k<sub className='text-sm'>/Bulan</sub></span></p>
                    <div className=''>
                        <p className='text-gray-400 font-normal'>Aplikasi kasir</p>
                        <p className='text-gray-400 font-normal'>Laporan harian</p>
                        <p className='text-gray-400 font-normal'>unlimited user + 1 admin</p>
                    </div>
                    <button className='py-2 px-4 bg-indigo-900 rounded-full text-white'>Daftar Sekarang</button>
                </div>
            </div>
        </>
    )
}
