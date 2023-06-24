import React from 'react';
import PostsImg from './PostsImg';
import PostImg1 from '../public/Sidebar.jpg';


const Posts = () => {
  return (
    <div>
        <div id='posts' className="w-full py-[7rem] px-4 bg-white justify-center">
        <h1 className='text-4xl font-bold text-center p-4'>Build Guides</h1>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg1}/>
                    <h2 className="text-2xl font-bold text-center py-8" >What type of keyboard case material?</h2>
                    <p className="text-center text-4xl font-bold" ></p>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg1}/>
                    <h2 className="text-2xl font-bold text-center py-8" >What mods is for you?</h2>
                    <p className="text-center text-4xl font-bold" ></p>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg1}/>
                    <h2 className="text-2xl font-bold text-center py-8" >Linear vs Tactile switches</h2>
                    <p className="text-center text-4xl font-bold" ></p>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg duration-300">
                    <PostsImg socialImg={PostImg1}/>
                    <h2 className="text-2xl font-bold text-center py-8" >What keycap profile for typing?</h2>
                    <p className="text-center text-4xl font-bold" ></p>
                    <div className="text-center font-medium" >
                        <p className="py-2 border-b mx-8 mt-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                        <p className="py-2 border-b mx-8"></p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8"></div>   
        </div>
      </div>
  )
}

export default Posts