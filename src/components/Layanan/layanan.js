import React from 'react'
import dashboard from '../../asset/dashboard.png'
import QRCode from '../../asset/QRCode.png'
import web from '../../asset/web.png'
import analisis from '../../asset/analisis.png'
export default function Layanan() {
    return (
        <>
            <div className='xl:flex md:justify-between'>
                <div className='w-full xl:w-1/3 text-center xl:text-left py-8 xl:translate-y-1/3 space-y-3'>
                    <h2 className='text-3xl font-extrabold'>Apa yang anda dapat dengan Kahfa</h2>
                    <p className='w-full xl:w-8/12'>kami akan membantu anda untuk mengelola usaha anda</p>
                </div>
                <div className='h-fit'>
                    <div className=' md:flex justify-center md:relative md:mt-10'>
                        <div className='border border-slate-100 rounded-3xl bg-white shadow-lg mb-6 md:mt-16 md:mr-7 py-10 px-6 h-fit md:w-72 text-center space-y-6 '>
                            <img src={dashboard} alt='' className='bg-violet-100 rounded-2xl p-4 mx-auto' />
                            <h3 className='text-2xl font-extrabold px-4'>Aplikasi Kasir Penjualan</h3>
                            <p className='text-gray-400 font-normal'>Pantau penjualan toko dengan aplikasi kasir dari kahfa</p>
                        </div>
                        <div className='border border-slate-100 rounded-3xl bg-white shadow-lg mb-6 py-10 px-6 h-fit md:w-72 text-center space-y-6 '>
                            <img src={QRCode} alt='' className='bg-orange-100 rounded-2xl p-4 mx-auto' />
                            <h3 className='text-2xl font-extrabold px-4'>Apikasi Kasir Penjualan</h3>
                            <p className='text-gray-400 font-normal'>Pantau penjualan dengan aplikasi kasir dari kahfa</p>
                        </div>
                    </div>
                    <div className='md:flex justify-center md:relative md:mt-7'>
                        <div className='border border-slate-100 rounded-3xl bg-white shadow-lg mb-6 md:mr-7 py-10 px-6 h-fit md:w-72 text-center space-y-6 '>
                            <img src={web} alt='' className='bg-pink-200 rounded-2xl p-4 mx-auto' />
                            <h3 className='text-2xl font-extrabold px-4'>Buat website untuk toko anda</h3>
                            <p className='text-gray-400 font-normal'>bangun brand toko anda dan perluas jangkauan pemasaran</p>
                        </div>
                        <div className='border border-slate-100 rounded-3xl bg-white shadow-lg md:-mt-16 py-10 px-6 h-fit md:w-72 text-center space-y-6 '>
                            <img src={analisis} alt='' className='bg-green-100 rounded-2xl p-4 mx-auto' />
                            <h3 className='text-2xl font-extrabold px-4'>Analisa kemajuan Toko</h3>
                            <p className='text-gray-400 font-normal px'>dapatkan analisa kemajuan toko dengan laporan harian</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
