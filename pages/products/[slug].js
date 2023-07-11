import Footer from '@/components/Footer';
import Hero from '@/components/Hero'
import Product from '@/models/Product';
import { Store } from '@/utils/Store';
import db from '@/utils/db';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import { useContext } from 'react';
import { toast } from 'react-toastify';

export default function ProductScreen(props) {
    const { product } = props;
    const {state,dispatch} = useContext(Store);
    const router = useRouter();
    if(!product){
        return <div>
            <Hero heading="Product not found" />
            Product Not Found</div>
    }

    const addToCartHandler = async() => {
        const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);

        if (data.countInStock < quantity) {
            return toast.error('Sorry. Product is out of stock');
        }

        dispatch({ type: 'CART_ADD_ITEM', payload: {...product,quantity}});
        router.push('/build');
    };

  return (
    <div>
        <Hero heading={product.name}/>
        <div className='py-2 mb-10'>
            <Link className='px-4 py-2 text-xl rounded-xl border-2 ml-6 hover:bg-purple-700 hover:text-white duration-200' href="/products">Back to products</Link>
        </div>
        <div className='grid md:grid-cols-4 md:gap-3'>
            <div className='md:col-span-2 ml-6'>
                <Image 
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                ></Image>
            </div>
            <div>
                <ul>
                    <li>
                        <h1 className='text-2xl font-bold'>{product.name}</h1>
                    </li>
                    <li>
                        Category: {product.category}
                    </li>
                    <li>
                        Brand: {product.brand}
                    </li>
                    <li>
                        {product.rating} of {product.numReviews} reviews
                    </li>
                    <li>
                        Description: {product.description}
                    </li>
                </ul>
            </div>
            <div>
                <div className='card p-5 mr-6 ml-4'>
                    <div className='mb-2 flex justify-between'>
                        <div>Price</div>
                        <div>RM{product.price}</div>
                    </div>
                    <div className='mb-2 flex justify-between'>
                        <div>Status</div>
                        <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
                    </div>
                    <button className='primary-button w-full' onClick={addToCartHandler}>Add to cart</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
    
  )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;

    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    await db.disconnect();
    return {
        props: {
            product: product ? db.convertDocToObj(product) : null,
        },
    };
}
