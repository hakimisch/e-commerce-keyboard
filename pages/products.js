import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductItem from '@/components/ProductItem';
import React, { useContext } from 'react';
import Sidebar from '@/components/Sidebar';
import db from '@/utils/db';
import Product from '@/models/Product';
import { Store } from '@/utils/Store';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Products({products}) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    const addToCartHandler = async(product) => {
        const existItem = cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);

        if (data.countInStock < quantity) {
            return toast.error('Sorry. Product is out of stock');
        }

        dispatch({ type: 'CART_ADD_ITEM', payload: {...product,quantity}});
        toast.success('Product added to the cart');
    };

    return (
        <div>
            <Hero heading='Keyboards' message='Main catalog page'/>
            <div className='flex row-span-2 pt-24'>
                <Sidebar/>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-[85%] pl-4'>
                {products.map((product) => (
                <ProductItem 
                product={product} 
                key={product.slug}
                addToCartHandler={addToCartHandler}></ProductItem>
                ))}   
                </div>
            </div>
            
        <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    await db.connect();
    const products = await Product.find().lean();
    return {
        props: {
            products: products.map(db.convertDocToObj),
        },
    };
}