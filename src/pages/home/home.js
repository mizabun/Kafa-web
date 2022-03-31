import React from 'react'
import Header from '../../components/header/header';
import Layanan from '../../components/Layanan/layanan';
import SubHeader from '../../components/subHeader/subHeader';

export default function Home() {
    return (
        <>
            <div className='px-24 bg-green-600 h-screen'>
                <Header />
                <SubHeader />
            </div>
            <div className='px-24 h-screen'>
                <Layanan />
            </div>
        </>
    )
}
