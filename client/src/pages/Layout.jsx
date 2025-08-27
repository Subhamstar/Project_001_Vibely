import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'
import { useState } from 'react'
const Layout = () => {
  const user=dummyUserData 
  const [sidebarOpen,setsidebarOpen]=useState(false)
  return user ? (
    <div className='w-full flex h-screen'>
      <Sidebar/>
      <div className='flex-1 bg-slate-50'>
          <Outlet/>
      </div>
      {
        sidebarOpen ?<X className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=>setsidebarOpen(false)}/> 
        :<Menu className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=>setsidebarOpen(true)}/>
      }
    </div>
  ):(
    <Loading/>
  )
}

export default Layout