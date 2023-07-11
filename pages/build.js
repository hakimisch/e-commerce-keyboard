import { Store } from '@/utils/Store';
import React, { useContext } from 'react';
import Hero from "@/components/Hero";
import Link from 'next/link';
import Image from 'next/image';
import {XCircleIcon} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { toast } from 'react-toastify';

function CartScreen() {
    const router = useRouter();
    const {state,dispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } = state;
    const removeItemHandler = (item) => {
        dispatch({type: 'CART_REMOVE_ITEM', payload: item});
    };
    const updateCartHandler = async (item, qty) => {
        const quantity = Number(qty);
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            return toast.error('Sorry. Product is out of stock');
        }
        dispatch({type: 'CART_ADD_ITEM', payload:{...item, quantity}});
        toast.success('Product updated in the cart');
    };


  return (
    <div>
        <Hero heading="Your Build"/>
        <h1 className='mb-4 text-xl ml-10 font-semibold'>Shopping Cart</h1>
        {
            cartItems.length === 0 ?
            ( <div className='ml-10'>
                Cart is empty. <Link href='/products'>Pick parts</Link>
              </div>
              ) : (
                <div className='grid md:grid-cols-4 md:gap-5 ml-10'>
                    <div className='overflow-x-auto md:col-span-3'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <th className='px-5 text-left'>Item</th>
                                    <th className='p-5 text-right'>Quantity</th>
                                    <th className='p-5 text-right'>Price</th>
                                    <th className='p-5'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.slug} className='border-b'>
                                        <td>
                                            <Link href={`/products/${item.slug}`}>
                                                    <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={80}
                                                    height={80}
                                                    ></Image>
                                                    &nbsp;
                                                    {item.name}
                                            </Link>
                                        </td>
                                        <td className='p-5 text-right'>
                                            <select value={item.quantity} onChange={(e) => updateCartHandler(item, e.target.value)}>
                                                {[...Array(item.countInStock).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                            
                                        </td>
                                        <td className='p-5 text-right'>RM{item.price}</td>
                                        <td className='p-5 text-center'>
                                            <button onClick={() => removeItemHandler(item)}>
                                                <XCircleIcon className='h-5 w-5'></XCircleIcon>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='card p-5 mr-6'>
                        <ul>
                            <li>
                                <div className='pb-3 text-xl'>
                                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)})
                                    {''}
                                    : RM
                                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                </div>
                            </li>
                            <li>
                                <button
                                onClick={() => router.push('/products')}
                                className='primary-button w-full mb-3'>Add Item</button>
                            </li>
                            <li>
                                <button
                                onClick={() => router.push('account?redirect=/shipping')}
                                className='primary-button w-full'>Checkout</button>
                            </li>
                        </ul>
                    </div>
                </div>
              )
        }
    </div>
    
  )
}

export default dynamic(()=> Promise.resolve(CartScreen), {ssr:false})