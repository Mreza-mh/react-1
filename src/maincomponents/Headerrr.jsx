import React, { useState } from 'react'
import { Link , useLocation } from 'react-router-dom';

function Headerrr() {
  
  const navheader = [
    { name : "About"  ,         link : "/about" ,   },
    { name : "Posts"  ,         link : "/post" ,   },
    // { name : "Contact",         link : "" ,   },
  ]

  const subhomeitems = [
    { name : " Alaki 1", link :"http://google.com"},
    { name : " Alaki 2", link :"http://google.com"},
    { name : " Alaki 3", link :"http://google.com"},
    { name : " Alaki 4", link :"http://google.com"},
    { name : " Alaki 5", link :"http://google.com"},
  ]

  const [issubmenuopen , setissubmenuopen] = useState(false) ;
  const opensubmenu = () =>{
    setissubmenuopen(true);
  }
  const closesubmenu = () =>{
    setissubmenuopen(false);
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  


  const location = useLocation();

    return (
      <>
      <nav>
        <div className='relative flex tems-center justify-center font-serif  '>
        <div className=" divide-y gap-y-1 divide-solid divide-transparent  bg-opacity-45 mt-8 w-11/12 min-h-24  border-solid  ">                            {/* // diveded */}


        
              <div className=' flex  space-x-32 items-center lg:justify-between px-10 bg-sky-800  border-solid rounded-t-xl rounded-r-xl '>                        {/* // up */}
                <div className=''>
                  <svg className='py-1 hover:fill-emerald-700 ' enableBackground="new 0 0 40 40" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xmlspacexml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><rect fill="none" height="50" width="50"/><path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z"/></svg>
                </div> 
                  <div className='hidden sm:block'>
                  <div className=" flex rounded-md ...  border-zinc-200 bg-gray-200 w-1/5 max-h-20 px-1 space-x-5   ">
                  <svg  className='pt-0.5'  height="22" viewBox="0 0 48 48" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
                  <input type='text' placeholder=" Search... " className=' hidden sm:block bg-gray-200 hover:placeholder-black hover:placeholder-bold  ' ></input>
                  </div> 
                  </div>
                  <div className='hidden lg:block'>
                      <div className='flex  space-x-16 mr-10 ml-10   '>
                    <svg className='hover:fill-emerald-700' enableBackground="new 0 0 55 55" height="60px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="60px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M28.857,25.485L26,20.723V14c0-5.177-3.954-9.446-9-9.949V3c0-0.552-0.448-1-1-1s-1,0.448-1,1v2c0,0.552,0.448,1,1,1  c4.411,0,8,3.589,8,8v7c0,0.182,0.049,0.359,0.143,0.515L26.233,25H5.766l2.091-3.485C7.951,21.359,8,21.182,8,21v-7  c0-3.079,1.8-5.92,4.585-7.238c0.499-0.236,0.712-0.832,0.476-1.332c-0.236-0.499-0.832-0.712-1.332-0.476  C8.249,6.601,6,10.151,6,14v6.723l-2.857,4.763c-0.186,0.309-0.19,0.693-0.013,1.008C3.307,26.807,3.64,27,4,27h8.142  c0.447,1.721,2,3,3.858,3c1.859,0,3.411-1.279,3.858-3H28c0.36,0,0.692-0.193,0.87-0.507C29.048,26.179,29.043,25.794,28.857,25.485  z M16,28c-0.737,0-1.375-0.405-1.722-1h3.443C17.375,27.595,16.737,28,16,28z"/></svg>
                    <svg className='hover:fill-emerald-700 ' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title/><g data-name="Layer 61" id="Layer_61"><path className="cls-1" d="M10,20a1,1,0,0,1-1-.8L6.66,7.41A3,3,0,0,0,3.72,5H2A1,1,0,0,1,2,3H3.72a5,5,0,0,1,4.9,4L11,18.8A1,1,0,0,1,10.2,20Z"/><path className="cls-1" d="M11,27H9.14a4.14,4.14,0,0,1-.38-8.26l18.41-1.67L28.78,9H8A1,1,0,0,1,8,7H30a1,1,0,0,1,.77.37A1,1,0,0,1,31,8.2l-2,10a1,1,0,0,1-.89.8L8.94,20.74A2.13,2.13,0,0,0,9.14,25H11a1,1,0,0,1,0,2Z"/><path className="cls-1" d="M26,30a4,4,0,1,1,4-4A4,4,0,0,1,26,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,26,24Z"/><path className="cls-1" d="M14,30a4,4,0,1,1,4-4A4,4,0,0,1,14,30Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,14,24Z"/><path className="cls-1" d="M23,27H17a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"/></g></svg>
                    </div>
                  </div>
              </div>

 {/* //------------------------------------------------------------------------------------------------------------------------------         */}

              <div className=''>
              <div className='bg-gradient-to-r from-emerald-500 via-[#02180d] to-gray-800 border-l items-center justify-center p-2 rounded-bl-lg ' >                       {/* // down */}
                <div className='flex pl-3 '>
                  <div id='home' 
                  className={`relative bg-gray-500 px-5 w-24 py-0.5 ${location.pathname === '/' ? ' font-bold border-b-4 border-double bg-gray-800' : ''}`}
                  onMouseEnter={opensubmenu} onMouseLeave={closesubmenu} >
                    <Link to='/'  
                    className=' text-white text-center hover:text-pink-500 '
                    >Home</Link>
                  </div>
                  {issubmenuopen && (
                    <div className=''>
                      <ul className= "submenu absolute border border-gray-200 bg-gray-800 bg-opacity-90 text-white items-cente r " onMouseEnter={opensubmenu} onMouseLeave={closesubmenu} >
                        {subhomeitems.map((items,index) =>(
                          <a key={index} href={items.link}>
                            <li className='p-3 min-w-fit  hover:text-emerald-700' >
                              {items.name}
                            </li>
                          </a>)
                        )}
                      </ul>
                    </div>
                  )}
                  <div className=''>
                  <div id='else' className='flex pl-36 space-x-20 items-center'>
                  {navheader.map((nav,index) =>
                          <li key={index} className={`hover:text-pink-200 text-yellow-50 hidden sm:block ${location.pathname === nav.link ? 'font-bold  border-b-4 border-yellow-50 border-double ' : ''}`}>
                            <Link to={nav.link} >
                              {nav.name}</Link>
                          </li>
                    )}
                  </div>
                  </div>
                </div>
              </div>
              </div>

 {/* //------------------------------------------------------------------------------------------------------------------------------         */}

                
        </div>
        <div className="absolute  flex lg:hidden justify-around ">
                <button
                  onClick={toggleMobileMenu}
                  className="  items-center  text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  aria-label="Open mobile menu" >
                  <div className='flex mt-10 justify-around  ml-96 md:space-x-80 md:ml-80 sm:ml-96 sm:space-x-36'>
                    <p className='flex sm:hidden'> </p>
                  <svg className=" h-6 w-6 sm:hidden  " stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  </div>
                </button>
              </div>
        </div>
        </nav>
        
 {/* //------------------------------------------------------------------------------------------------------------------------------         */}
        <div className=' '>
          {isMobileMenuOpen && (
            <span className='sm:hidden divide-y divide-solid divide-transparent'>
                {navheader.map((items,index)=>(
                  <div key={index} href={items?.link}  className={`flex justify-center  ${location.pathname === items.link ? 'font-bold ' : ''}`}
                  >
                    <Link to={items.link} className={`py-1 bg-emerald-300 w-11/12 pl-10 rounded-md ring-1 ${location.pathname=== items.link ? 'bg-gradient-to-r from-emerald-300 via-[#000000] to-emerald-300' : ' '} `}>{items.name}</Link>
                  </div>
                ))}
            </span>
          )}
        </div>
      </>
    );
}

export default Headerrr;
