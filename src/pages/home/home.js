import React from 'react'
import Header from '../../components/header/header'
import Layanan from '../../components/Layanan/layanan'
import SubHeader from '../../components/subHeader/subHeader'
import Ellipse1 from '../../asset/Ellipse1.png'
import Ellipse2 from '../../asset/Ellipse2.png'
import Rectangle1 from '../../asset/Rectangle1.png'
import Dot from '../../asset/Dot.png'
import Rectangle2 from '../../asset/Rectangle2.png'
import Rectangle3 from '../../asset/Rectangle3.png'
import Navbar from '../../components/nav/nav'
import Harga from '../../components/harga/harga'
import Footer from '../../components/footer/footer'

export default function Home() {
    return (
        <>
            <section id='header'>
                <div className='relative min-h-screen'>
                    <div className='bg-violet-50 h-screen absolute w-full pb-20 px-6 -z-50'>
                        <img src={Ellipse1} alt='' className='absolute top-0 left-0' />
                        <img src={Rectangle1} alt='' className='hidden md:block absolute top-44 left-96' />
                        <img src={Dot} alt='' className='hidden md:block absolute mt-96 right-64' />
                    </div>
                    <Header />
                    <SubHeader />
                </div>
            </section>
            <section id='layanan'>
                <div className='relative px-6 md:px-36 pb-6'>
                    <img src={Rectangle2} alt='' className='hidden md:block absolute translate-y-1/4 right-0 -z-40' />
                    <img src={Rectangle3} alt='' className='hidden md:block absolute mt-64 -z-40' />
                    <Layanan />
                </div>
            </section>


            <section id='harga'>
                <div className='relative px-6 min-h-screen'>
                    <img src={Dot} alt='' className='hidden md:block absolute -mt-72 left-48 -z-40' />
                    <img src={Ellipse2} alt='' className='hidden md:block absolute -mt-28 -left-3 -z-40' />
                    <Harga />
                </div>
            </section>

            <section id='footer'>
                <Footer />
            </section>
            <Navbar />
        </>
    )
}
