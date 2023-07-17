/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PostsImg from './PostsImg';
import PostImg1 from '../public/Case.jpg';
import PostImg2 from '../public/Mod.jpg';
import PostImg3 from '../public/Switches.jpg';
import PostImg4 from '../public/Keycap.jpg';

const Posts = () => {
  return (
    <div>
        <div id='posts' className="w-full py-[7rem] px-4 bg-white justify-center">
        <h1 className='text-4xl font-bold text-center p-4'>Build Guides</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg1}/>
                    <h2 className="text-2xl font-bold text-center py-8" >What type of keyboard case material?</h2>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8">
                            Keyboard cases are made from different types of material, and each type offers certain benefits over the others. Some common types include plastic, aluminum, wood, and acrylic, where aluminum and plastic are most commonly produced because they are cheaper. However, wood and acrylic go on the expensive side, but they are perfect for those who enjoy a more inclination towards aesthetics in a workplace.
                        </p>
                        <p className="py-2 border-b mx-8">
                        The designs that they offer are another characteristic of distinctive keyboard cases. Various businesses and artists have created their designs for keyboard cases to provide keyboard fanatics with a sense of aesthetic individuality. Additionally, there are several odd-looking keyboard cases on the market. 
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg2}/>
                    <h2 className="text-2xl font-bold text-center py-8" >What mods is for you?</h2>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8">
                        Choosing the right keyboard modifications (keyboard mods) depends on your specific needs, preferences, and typing style. Consider keycap replacements for enhanced aesthetics and tactile feel, lubing switches for smoother keystrokes, switch swapping to find switches that suit your preferences, sound dampening for a quieter typing experience, stabilizer modifications for improved stability, programmability to customize key functions and macros, and case modifications like RGB lighting or custom logos for personalization.
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg3}/>
                    <h2 className="text-2xl font-bold text-center py-8" >Type of switches</h2>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8">
                        Mechanical switches are widely used and offer a satisfying tactile and auditory feedback. They come in different variants: linear switches provide a smooth keystroke without any tactile bump or click sound (e.g., Cherry MX Red, Gateron Yellow, Kailh Box Red); tactile switches have a noticeable bump in the keystroke, providing tactile feedback (e.g., Cherry MX Brown, Gateron Brown, Kailh Box Brown); clicky switches have both a tactile bump and an audible click sound, providing a more pronounced feedback (e.g., Cherry MX Blue, Gateron Blue, Kailh Box White).
                        </p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg4}/>
                    <h2 className="text-2xl font-bold text-center py-8" >What keycap profile is for you?</h2>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8">
                        Determining the right keycap profile for you depends on your personal preference, typing style, and ergonomic considerations. Common keycap profiles include OEM, which offers a slightly curved top surface and a tall profile; Cherry profile, which is similar to OEM but with shorter key walls and a more sculpted shape; SA profile, known for its tall, spherical shape and retro aesthetic; DSA profile, featuring a uniform spherical shape and a low profile; XDA profile, similar to DSA but with a larger surface area on top; and KAT profile, combining aspects of Cherry, OEM, and XDA profiles. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8"></div>   
        </div>
      </div>
  )
}

export default Posts