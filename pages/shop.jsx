import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const shop = () => {
  return (
    <div>
        <Hero heading='Main Catalog' message='Main catalog page'/>
        <div className='flex row-span-2 pt-24'>
          <Sidebar />
        </div>
        <Footer />
    </div>
  )
}

export default shop