import React from 'react';

export default function Posts({ pitems }) {
    return (
        <>
                <h2 className="container mx-auto px-2
                text-4xl font-bold text-center text-emerald-50 mb-8 py-10 font-serif  border-b-4 border-[#8cb1b4] mt-8">		POST S ... 	</h2>


                <div className=' flex flex-wrap justify-center '>
            
                {pitems.map((item, i) =>(
                    <div key={i} className=" m-5 w-70 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl border-double border-4 border-black shadow-inner shadow-black  flex flex-col sm:flex-row gap-5 select-none bg-gradient-to-r from-[#5D4157]  to-[#A8CABA]">
                        <div className="h-52 sm:h-full sm:w-72 rounded-xl  bg-center bg-cover ">
                            <img src={item.image}  className=' h-52  w-full sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover'  />
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 p-1">
                            <h1 className=" sm:text-xl font-semibold  text-black border-b-2 pb-1 border-gray-600 ">
                                {item.name}
                            </h1>
                            <p className=" text-sm sm:text-base line-clamp-6 text-black italic mt-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
        </>
    )
}