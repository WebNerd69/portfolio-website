import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Links from './assets/components/Links'
import Navbar from './assets/components/Navbar'
import LayerTag from './assets/components/LayerTag'

function App() {

  return (
    <>
      <div className='h-screen w-screen -z-20'>
        <Navbar />
        <div className="pictureBox w-screen h-96 flex justify-center my-20 ">
          <img src="../src/assets/IMAGES/img.png" alt="" className='' />
        </div>
        <div className="circle1 w-[700px] h-[700px] bg-[#520380] absolute blur-[250px] rounded-full opacity-70 z-0 -top-96 left-40 "></div>
        {/* <div className="circle2 w-[400px] h-[400px] bg-[#520380] absolute blur-[250px] rounded-full opacity-70 z-0 -bottom-20 -right-10"></div> */}
        <Links />
        <LayerTag title="- home"/>
      </div>
    </>
  )
}

export default App
