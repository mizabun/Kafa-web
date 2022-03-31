import React from 'react'
import Header from '../../components/header/header';
import Layanan from '../../components/Layanan/layanan';
import SubHeader from '../../components/subHeader/subHeader';
import Ellipse1 from '../../asset/Ellipse1.png'
import Rectangle1 from '../../asset/Rectangle1.png'
import Dot from '../../asset/Dot.png'

export default function Home() {
    return (
        <>
            <div className='relative min-h-screen'>
                <img src={Ellipse1} alt='' className='absolute top-0 left-0 -z-40' />
                <img src={Rectangle1} alt='' className='absolute top-44 left-96 -z-40' />
                <img src={Dot} alt='' className='absolute mt-96 right-64 -z-40' />
                <div className='bg-violet-50 h-screen w-screen absolute -z-50' />
                <Header />
                <SubHeader />
            </div>

            <div className='px-24 h-screen'>
                <Layanan />
            </div>
        </>
    )
}
