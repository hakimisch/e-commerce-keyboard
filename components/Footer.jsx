import React from "react";
import {
    AiOutlineMail,
    AiOutlinePhone
} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="w-full bg-slate-950 mt-12 ">
            <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className='w-full text-3xl font-bold text-[cyan]'>Misch</h1>
                <p className="py-4">Contact us on these platforms</p>
                <div className="flex mx-6 md:mx-0 justify-between md:w-[75%] my-6">
                    <AiOutlineMail size={30}/>
                    <p>hakimizaimi@gmail.com</p>
                </div>
                <div className="flex mx-6 md:mx-0 justify-between md:w-[75%] my-6">
                    <AiOutlinePhone size={30} />
                    <p>018-2456387</p>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Footer