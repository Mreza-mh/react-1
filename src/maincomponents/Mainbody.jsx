import React, { useState } from 'react';

function Mainbody({ pitems }) {

    const lastThreeItems = pitems.slice(-3);
    
    const [openPost, setOpenPost] = useState(null);

    const togglePost = (name) => {
        setOpenPost(openPost === name ? null : name);
    };

    return (
        <>
            <div className='container mx-auto px-3  '>
            <h2 className="text-4xl font-bold text-center text-emerald-50 mb-8 py-10 font-serif  border-b-4 border-[#9b90a8] mt-8 ">	-	Last 3 posts -	</h2>
            <p className='text-[#d1a74b71] ml-5 mb-5  '> hover on images ... </p>
            <div className=' '>
            <div className='flex flex-wrap justify-around '>
            
                        {lastThreeItems.map((item, i) =>(

                        <div className=' flex flex-col w-full mx-20 my-8 xl:w-1/5 lg:w-1/4 md:w-1/3  sm:w-1/2 sm:m-10 ' key={i}>
                            <div>
                                <div className={`border-none shadow-inner shadow-[#372641a1] transition-transform transform origin-bottom 
                                p-3 bg-[#42364981] rounded-t-lg text-white text-center text-xl font-semibold
                                ${openPost === item.name ? 'scale-100 ' : 'scale-0 '}`} >{item.name} 
                                </div>
                            
                                <img src={item.image}
                                onMouseEnter={() => togglePost(item.name)}
                                onMouseLeave={() => togglePost(item.name)}   
                                className='  w-96 h-72 object-cover rounded-md' alt="image" />
                                <div className=' flex items-center justify-center'>                 
                                    <div className={`border-none shadow-inner  shadow-[#459aa546]  transition-transform transform origin-top
                                    rounded-b-lg  bg-[#37264181] text-white p-2 
                                    ${openPost === item.name ? 'scale-100' : 'scale-0'}`}>to show more goto Post page
                                    </div>
                                </div>
                            </div>
                        </div>

            ))}
                </div>

            </div>
            </div>

        </>
    );
}

export default Mainbody;

