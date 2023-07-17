/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { getError } from '@/utils/error';
import axios from 'axios';

export default function register() {
    const { data: session } = useSession();
    const router = useRouter();
    const {redirect} = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/');
        }
    },[router,session,redirect]);

    const {
        handleSubmit,
        register,
        getValues,
        formState: {errors},
    } = useForm();

    const submitHandler = async ({name, email, password}) => {
        try {
            await axios.post('api/auth/signup', {
                name, 
                email, 
                password,
            });
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if (result.error) {
                toast.error(result.error);
            }
        } catch(err) {
            toast.error(getError(err));
        }
    };
  return (
    <div>
        <Hero heading='Register Page' message=''/>
        <div>
        <ToastContainer position='bottom-center' limit={1}/>
        <div className='bg-white justify-center flex items-center min-h-screen'>
            <div className=' bg-gray-100 flex min-h-screen backdrop:rounded-2xl shadow-lg w-[70%] p-5 rounded-3xl my-16'>
                <div className='w-[95%]'>
                    <h2 className='font-bold text-3xl text-black border-b py-4 border-gray-800 w-[95%]'>Login</h2>

                    <form action="" className='flex flex-col w-[95%] gap-4' onSubmit={handleSubmit(submitHandler)}>
                        
                        <input className='p-2 mt-8 rounded-xl border' type="text"
                        {...register('name', {required: 'Please enter name', 
                        message: 'Please enter name',
                        })} 
                        name='name' id="name" placeholder='Your Name'/>
                        {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}

                        <input className='p-2 rounded-xl border' type="email"
                        {...register('email', {required: 'Please enter email', 
                        pattern: {value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+.[a-zA-Z0-9-.]+$/i,
                        message: 'Please enter valid email',
                        }})} 
                        name='email' id="email" placeholder='Email'/>
                        {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}

                        <input className='p-2 rounded-xl border w-full' type="password"
                        {...register('password', {
                            required: 'Please enter password',
                            minLength: {value: 6, message: 'password is more than 5 chars'},
                        })}
                        name='password' id='password' placeholder='Password' />
                        {errors.password && (
                            <div className='text-red-500'>{errors.password.message}</div>
                        )}

                        <input className='p-2 rounded-xl border w-full' type="password"
                        {...register('confirmPassword', {
                            required: 'Please enter confirm password',
                            validate: (value) => value === getValues('password'),
                            minLength: {value: 6, message: 'password is more than 5 chars'},
                        })}
                        name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' />
                        {errors.confirmPassword && (
                            <div className='text-red-500'>{errors.confirmPassword.message}</div>
                        )}
                        {errors.confirmPassword && 
                          errors.confirmPassword.type === 'validate' && (
                            <div className='text-red-500'>Password do not match</div>
                          )
                        }

                        <button className='bg-purple-600 rounded-xl text-white py-3 hover:scale-105 duration-300 my-2'>Register</button>
                    </form>
                </div>
                <div className='md:block hidden w-1/2 custom-img2 rounded-3xl'>               
                </div>
            </div>
        </div>  
    </div>

        <Footer />
    </div>
  )
}
