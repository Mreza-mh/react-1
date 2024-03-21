import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Headerrr from './maincomponents/Headerrr'
import Mainbody from './maincomponents/Mainbody'
import About from './subcomponent/About'
import Posts from './subcomponent/Posts'

function Handler({ pitems }) {

      return (
          <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Mainbody pitems={pitems}  />} /> 
                    <Route path='post' element={<Posts pitems={pitems} />} />
                    <Route path='about' element={<About />} />
                  </Route>
              </Routes>
          </BrowserRouter> 
          </div>
      )
}

function Layout() {
  return (
    <>
      <Headerrr />
      <Outlet />
    </>
  )
}

export default Handler

