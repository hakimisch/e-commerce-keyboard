import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductItem from '@/components/ProductItem';
import React from 'react';
import data from '../utils/data';
import Sidebar from '@/components/Sidebar';

export default function Products() {
    return (
        <div>
            <Hero heading='Keyboards' message='Main catalog page'/>
            <div className='flex row-span-2 pt-24'>
                <Sidebar/>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-[85%] pl-4'>
                {data.products.map((product) => (
                <ProductItem product={product} key={product.slug}></ProductItem>
                ))}   
                </div>
            </div>
            
        <Footer />
        </div>
    )
}