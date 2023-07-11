import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-slate-950 mt-12 ">
            <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className='w-full text-3xl font-bold text-[cyan]'>Misch</h1>
                <p className="py-4">Contact us on these platforms (real)</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
        <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
            </ul>
        </div>
            </div>

        </div>
        </div>
    )
}

export default Footer