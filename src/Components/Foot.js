import React from 'react'
import "../Styles/Foot.css"
import logo from "../Assets/Images/logo.jpg"
import fb from "../Assets/Images/iconmonstr-facebook-1 (1).svg"
import lin from "../Assets/Images/iconmonstr-linkedin-1 (1).svg"
import cl from "../Assets/Images/iconmonstr-cloud-1.svg"

const Foot = () => {
  return (
    <>
        <main className='container-fluid footmain p-0'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 footdeep'>
                        <span className='d-flex'>
                            <img className='footimg' src={logo}/>
                            <div>
                                <p className='footafp m-0'>AIR FORCE</p>
                                <p className='m-0 footcs'>COMPREHENSIVE SCHOOL</p>
                            </div>
                        </span>
                    </div>
                    <div className='col-xl-9'>
                        <div className='row'>
                            <div className='col-xl-8'>
                                <div className='row'>
                                    <div className='col-6 row py-4 m-auto'>
                                        <ul className='col-6'>
                                            <li className='foothead py-2'><a href='/about' className='foottdacc'>ABOUT</a></li>
                                            <li className='footli py-2'><a href='/teachers' className='foottdacc'>TEACHERS</a></li>
                                            <li className='footli py-2'><a href='/contact' className='foottdacc'>CONTACT</a></li>
                                        </ul>
                                        <ul className='col-6'>
                                            <li className='foothead py-2'><a href='/academics' className='foottdacc'>ACADEMICS</a></li>
                                            <li className='footli py-2'><a href='/' className='foottdacc'>TIMETABLE</a></li>
                                            <li className='footli py-2'><a href='/news' className='foottdacc'>NEWS</a></li>
                                        </ul>
                                    </div>
                                    <div className='col-6 row py-4 m-auto'>
                                        <ul className='col-6'>
                                        <li className='foothead py-2'><a href='/' className='foottdacc'>EVENTS</a></li>
                                            <li className='footli py-2'><a href='/' className='foottdacc'>EXCURSIONS</a></li>
                                            <li className='footli py-2'><a href='/gallery' className='foottdacc'>GALLERY</a></li>
                                        </ul>
                                        <ul className='col-6'>
                                            <li className='foothead py-2'><a href='/' className='foottdacc'>SCHOOL</a></li>
                                            <li className='footli py-2'><a href='/' className='foottdacc'>LOGIN</a></li>
                                            <li className='footli py-2'><a href='/' className='foottdacc'>REGISTER</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 footsos'>
                                <div className='footfbk'>
                                    <img src={fb}/>
                                </div>
                                <div className='footfbk mx-3'>
                                    <img src={lin}/>
                                </div>
                                <div className='footfbk'>
                                    <img src={cl}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footdeeper'>
                <p>Copyright 2020-2021 | ALL RIGHTS RESERVED ©</p>
            </div>
        </main>
    </>
  )
}

export default Foot