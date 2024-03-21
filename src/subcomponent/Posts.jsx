import React from 'react';

export default function Posts({ pitems }) {
    return (
        <>
                <h2 className=" text-4xl font-bold text-center text-emerald-50 mb-8 py-10 font-serif  border-b-4 mt-8">		POST S  	</h2>


                <div className='p-20 mx-12  flex flex-wrap justify-around '>
            
                {pitems.map((item, i) =>(
                    <div key={i} className="bg-white m-5 w-70 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                        <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover">
                            <img src={item.image}  className=' h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover'  />
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 p-1">
                            <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
                                {item.name}
                            </h1>
                            <p className="text-gray-500 text-sm sm:text-base line-clamp-6">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
        </>
    )
}