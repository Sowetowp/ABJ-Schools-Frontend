import React from 'react'
import "../Styles/Talented.css"
import cta from '../Assets/Images/call-to-action-img.png'

const Talented = () => {
  return (
    <>
      <div className='container tabg'>
        <div className='tajk row py-4 px-5'>
          <img src={cta} className='col-xl-2 m-auto taimg'/>
          <div className='taosat col-xl-8'>
            <p className='taosatp1 m-0'>OUR STUDENTS ARE TALENTED,</p>
            <p className='taosatp2 m-0'>passionate, hard-working and full of good ideas.</p>
          </div>
          <button className='py-3 talmb col-xl-2'><a href='/about' style={{textDecoration:"none", color:"white"}}>Learn More</a></button>
        </div>
      </div>
    </>
  )
}

export default Talented