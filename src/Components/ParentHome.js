import React from 'react'
import "../Styles/Shome.css"
import "../Styles/Steacher.css"
import wallet from "../Assets/Images/wallet-svgrepo-com.svg"
import home from "../Assets/Images/home-17-svgrepo-com.svg"
import { useSelector } from 'react-redux'

const ParentHome = () => {
    const parentAuth = useSelector((state) => state.parentAuth)
    const {parentDetail} = parentAuth
    
  return (
    <>
      <main className='container-fluid shomain'>
        <p className='shopsash mb-0'>Dashboard</p>
        <img src={home} className='' style={{width:"30px"}}/>
        <div className='row'>
            <div className='col-md-12 mt-2'>
                <div className=' showegif '>
                    <div style={{borderRadius:"5px"}} className='shojk1 px-3 py-4'>
                        <p className='showam'>Welcome, {parentDetail && parentDetail.title} {parentDetail && parentDetail.firstName}</p>
                        <p className='mb-0 showam2'>Welcome back to your portal account! You can start by using the menu dashboard to navigate the portal.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
          <div className='col-md-6 mt-4'>
            <div className='bg-white p-3 shoboxshfnoti'>
              <p className='shopendis'>Pending Issues</p>
              <div className='d-flex shopendisnoti p-3'>
                <span style={{color:"white"}}>&#10003;</span>
                <p className='mb-0 text-white shonoipeat'>Nothing is pending for you at the moment!</p>
                <span style={{color:"white"}}>&times;</span>
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-4'>
            <div className='bg-white shoboxshfnoti'>
                <p className='p-3 shopendis mb-0'>Recent Portal Updates</p>
              <div className='px-3 pb-2 shoheighonoti'>
                <div className='d-flex shopendisnoti2 p-3 mt-2'>
                  {/* <span style={{color:"white"}}>&#10003;</span> */}
                  <p className='mb-0 text-white shonoipeat'>No news update at this time, check back later</p>
                  <span style={{color:"white"}}>&times;</span>
                </div>
              </div>
              <div className='border-top p-3'>
                <a className='shoviewall px-2 py-1'>View All</a>
              </div>
            </div>
          </div>
        </div> 
      </main>
    </>
  )
}

export default ParentHome