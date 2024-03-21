import React from 'react'

function Mainbody({ pitems }) {

    const lastThreeItems = pitems.slice(-3);
    
    return (
        
    <>
    <div className=''>
        
        <h2 className=" text-4xl font-bold text-center text-emerald-50 mb-8 py-10 font-serif  border-b-2 border-opacity-5 mt-8 ">	-	Last 3 posts -	</h2>
        
            <div className='p-20 mx-12  flex flex-wrap justify-around'>
                
                {lastThreeItems.map((item, i) =>(
                    <div key={i} className="bg-gradient-to-r from-gray-500 via-[#50858bb4] to-gray-600  m-5 w-80 max-w-md sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-md flex flex-col sm:flex-row gap-5 select-none  border border-gray-100  shadow-white ">
                        <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover">
                            <img src={item.image}   className=' h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover'  />
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2 p-1 items-center justify-center ">
                            <h1 className="text-lg sm:text-xl font-semibold  border rounded-xl border-gray-100 text-white px-4 py-2">
                                {item.name}
                            </h1>             
                        </div> 
                    </div>
                    ))}
            </div>
    </div>
    </>

    )
}

export default Mainbody


