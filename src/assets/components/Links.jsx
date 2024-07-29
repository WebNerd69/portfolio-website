import React from 'react'
import 'remixicon/fonts/remixicon.css'


function Links() {
  return (
    <div className='mx-10'>
      <ul className='space-y-1 text-gray-500 font-bold text-lg'>
          <li><a href="/"><i className="ri-twitter-x-fill hover:text-white transition-all"></i></a></li>
          <li><a href="/"><i className="ri-linkedin-fill hover:text-white transition-all"></i></a></li>
          <li><a href="/"><i className="ri-instagram-line hover:text-white transition-all"></i></a></li>
          <li><a href="/"><i className="ri-whatsapp-line hover:text-white transition-all"></i></a></li>
      </ul>
    </div>
  )
}

export default Links
