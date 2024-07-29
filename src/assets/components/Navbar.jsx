import React from 'react'
// import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex justify-between h-20 items-center px-10'>
          <div className='w-10'>
               <a href="/"><img src="../src/assets/IMAGES/logo.png" alt="" /></a>
          </div>
          <div className=''>
               <ul className='text-[#F5CB5C] flex space-x-5 fogie tracking-widest'>
                    <li><a href="/" className='opacity-45 hover:opacity-100 transition-all'>about me</a></li>
                    <li><a href="/" className='opacity-45 hover:opacity-100 transition-all'>projects</a></li>
                    <li><a href="/" className='opacity-45 hover:opacity-100 transition-all'>resume</a></li>
                    <li><a href="/" className='opacity-45 hover:opacity-100 transition-all'>contact me</a></li>
               </ul>
          </div>
    </nav>
  )
}

export default Navbar
