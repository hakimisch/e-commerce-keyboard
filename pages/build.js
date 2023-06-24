import { Store } from '@/utils/Store';
import React, { useContext } from 'react';
import Hero from "@/components/Hero";
import Link from 'next/link';
import Image from 'next/image';
import {XCircleIcon} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function CartScreen() {
    const router = useRouter();
    const {state,dispatch} = useContext(Store);
    const {
        cart: {cartItems},
    } = state;
    const removeItemHandler = (item) => {
        dispatch({type: 'CART_REMOVE_ITEM', payload: item});
    }


  return (
    <div>
        <Hero heading="Your Build"/>
        <h1 className='mb-4 text-xl'>Shopping Cart</h1>
        {
            cartItems.length === 0 ?
            ( <div>
                Cart is empty. <Link href='/products'>Pick parts</Link>
              </div>
              ) : (
                <div className='grid md:grid-cols-4 md:gap-5'>
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
                                        <td className='p-5 text-right'>{item.quantity}</td>
                                        <td className='p-5 text-right'>${item.price}</td>
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
                    <div className='card p-5'>
                        <ul>
                            <li>
                                <div className='pb-3 text-xl'>
                                    Subtotal ({cartItems.reduce((a,c) => a + c.quantity, 0)})
                                    {''}
                                    : $
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
                                onClick={() => router.push('/shipping')}
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
