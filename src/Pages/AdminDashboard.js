import React, { useEffect, useState } from 'react'
import "../Styles/Sdash.css"
import logo from "../Assets/Images/logo.jpg"
import offc from "../Assets/Images/iconmonstr-menu-left-lined.svg"
import offc2 from "../Assets/Images/iconmonstr-menu-right-lined.svg"
import test1 from "../Assets/Images/testimonial-img-2.jpg"
import home from "../Assets/Images/home-17-svgrepo-com.svg"
import dollar from "../Assets/Images/payment-method-bank-svgrepo-com.svg"
import set from "../Assets/Images/setting-svgrepo-com.svg"
import result from "../Assets/Images/a-best-test-result-svgrepo-com.svg"
import teachers from '../Assets/Images/iconmonstr-school-30 (1).svg'
import students from "../Assets/Images/iconmonstr-school-24.svg"
import paren from "../Assets/Images/parent-and-child-svgrepo-com.svg"
import news from '../Assets/Images/iconmonstr-newspaper-9.svg'
import gallery from '../Assets/Images/iconmonstr-carousel-lined.svg'
import cal from '../Assets/Images/calendar-svgrepo-com (1).svg'
import "../Styles/Ahome.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { admin_logout } from '../Redux/Actions/AdminAction'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from '../Components/Preloader2'

const AdminDashboard = () => {
    const [show, setShow] = useState(false);
    const [tname, setTname] = useState("")
    const toggle = () => {
        setShow(!show);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    const adminAuth = useSelector((state) => state.adminAuth)
    const {adminDetail} = adminAuth
    useEffect(() => {
        if(!adminDetail){
            dispatch(admin_logout())
            navigate("/alogin")
        }
    }, [adminDetail, dispatch])
    const logoutHandler = () => {
        dispatch(admin_logout())
    }
    useEffect(() => {
        if(window.innerWidth >= 1200){
            setShow(true)
        }
    }, []);
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dwgwcghfh'
        }
    })

    useEffect(() => {
        if (allsession && allsession.calendar.length > 0) {
          const filteredTerm = allsession.term.filter(term => term.session === allsession.calendar[allsession.calendar.length - 1]._id);
          const newTname = filteredTerm[filteredTerm.length - 1]?.tname || null;
          setTname(newTname);
        }
    }, [allsession]);

  return (
    <>
        <main className='sdashmain container-fluid'>
            <div className='sdashd1'>
                <nav className="navbar navbar-expand-sm py-0" style={{height:"15%"}}>
                    <div className="container-fluid px-0 border-bottom">
                        <div className='d-flex border-end py-3 px-3 col-xl-3' style={{alignItems:"center"}}>
                            <a className="navbar-brand d-flex" href='/'>
                                <img className='nbnbl2' src={logo}/>
                                <div className='nbsnt2'>
                                    <p className='p-0 m-0 nbaf2'>AIR FORCE</p>
                                    <p className='p-0 m-0 nbcs2'>COMPREHENSIVE SCHOOL</p>
                                </div>
                            </a>
                            <a onClick={toggle}><img className='mx-2 sdashoffc' src={offc}/></a>
                        </div>
                        <button  className="p-0 m-0 navbar-toggler border-0 sdashtogbut m-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <img className='sdashoffc' src={offc2}/>
                        </button>
                        <div className="collapse navbar-collapse bg-white px-3" id="collapsibleNavbar">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item d-flex sdashnavitem">
                                    <a className="nav-link" href="#"><i style={{color:"rgba(15, 79, 163, 0.914)"}} className="fas fa-bell me-3"></i></a>
                                    <a className="nav-link" href="#"><i style={{color:"rgba(15, 79, 163, 0.914)"}} className="fas fa-comment me-3"></i></a>
                                    <a className="nav-link" onClick={logoutHandler}><button className='sdashsignoutb px-3 py-2'><i style={{color:"rgba(15, 79, 163, 0.914)"}} className="fas fa-sign-out-alt me-2"></i>Sign out</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={`container-fluid`} style={{height:"78%"}}>
                    <div className='row sdashscrooloiframe' style={{height:"100%"}}>
                        <div className={`px-0 border-end pt-3 col-xl-3 ${show ? "d-block": "d-none"}`} style={{height:"100%"}}>
                            <div className='text-center' style={{height:""}}>
                                {/* <img className='sdashavatar2' src={test1}/> */}
                                {adminDetail && <AdvancedImage className='sdashavatar2' cldImg={
                                    (function () {
                                        const myImage = cld.image(adminDetail.image);
                                        myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                        return myImage;
                                    })()
                                } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                <h6 className='mt-3 mb-0' style={{color:"rgb(15, 79, 163)"}}>{adminDetail && adminDetail.lastName.toUpperCase()}, {adminDetail && adminDetail.firstName.toUpperCase()}</h6>
                                <p className='mb-2' style={{fontSize:"15px",color:"grey"}}>Admin</p>
                                <div className='sdashcsd border-bottom'>
                                    <span className='border-end'>
                                        <p className='mb-0 sdashcss'>Current Session</p>
                                        {allsession && allsession.calendar.length > 0 &&
                                        <p className='mb-2 sdashcss2'>{allsession.calendar[allsession.calendar.length - 1].from}/{allsession.calendar[allsession.calendar.length - 1].to}</p>}
                                    </span>
                                    <span className=''>
                                        <p className='mb-0 sdashcss'>Current Term</p>
                                        {allsession &&
                                        <p className='mb-2 sdashcss2'>{tname}</p>}
                                    </span>
                                </div>
                            </div>
                            <div className='px-3 sdashscrool'>
                                <a href='/ahome' target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle } className='textdeco'>
                                    <div className='d-flex  sdashselect py-2 mt-2'>
                                        <img src={home} className='ps-1' style={{width:"26px"}}/>
                                        <p className='mb-0 sdashhome ms-2'>Home</p>
                                    </div>
                                </a>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={teachers} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Teachers</p>
                                </button>
                                <div id="demo" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark text-dark py-1" href="/aallteachers" onClick={ window.innerWidth >= 1200 ? null : toggle } target='frame'><i className="fas me-2 sdashhic2 fa-arrow-right"></i>All Teachers</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/addteacher" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Add Teacher</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo2" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={students} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Students</p>
                                </button>
                                <div id="demo2" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/studentslist" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>All Students</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/addstudent" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Add Student</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo2p" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={paren} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Parents</p>
                                </button>
                                <div id="demo2p" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/parentslist" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>All Parents</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/addparent" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Add Parent</a></li>
                                    </ul>
                                </div>
                                <a href='/payment' target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle } className='textdeco'>
                                    <div className='d-flex  sdashselect py-2'>
                                        <img src={dollar} className='ps-1' style={{width:"25px"}}/>
                                        <p className='mb-0 sdashhome ms-2'>Payment</p>
                                    </div>
                                </a>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo3f" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={dollar} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Fees</p>
                                </button>
                                <div id="demo3f" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/ufees" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Upload Fees</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/upaid" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Register Payment</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo3" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={news} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>News</p>
                                </button>
                                <div id="demo3" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/postnews" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Post News</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/allnews" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>All news</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo4" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={gallery} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Gallery</p>
                                </button>
                                <div id="demo4" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/postimage" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Post Image</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="allimages" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>All Images</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo5" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={cal} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Calendar</p>
                                </button>
                                <div id="demo5" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/createsession" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Create Session</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/veiwcalendar" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>View Calendar</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo6" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={result} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Results</p>
                                </button>
                                <div id="demo6" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/aresult" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i> View Results</a></li>
                                        <li><a className="dropdown-item navddi text-dark py-1" href="/broadsheet" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i> Broadsheet</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <iframe src='/ahome' name='frame' title='myiframe' className={`sdashiframe px-0 ${show ? "col-xl-9": "col-xl-12"} ${window.innerWidth <= 1200 && show? "d-none":""}`}></iframe>
                        {/* <div className={`px-0 bg-info ${show ? "col-xl-9": "col-xl-12"} ${window.innerWidth <= 1200 && show? "d-none":""}`} style={{height:"100%"}}> */}
                            {/* <iframe src='/shome' name='frame' title='myiframe' className={`px-0 sdashiframe ${show ? "col-xl-9": "col-xl-12"} ${window.innerWidth <= 1200 && show? "d-none":""}`}></iframe> */}
                        {/* </div> */}
                    </div>
                </div>
                <div className='sdashcori row px-3 border-top' style={{height:"7%",alignItems:"center"}}>
                    <div className='col-xl-6 sdashtomof'>
                        <p className='sdashpoweredb2 mb-0'>Copyright 2022 - 2023 - © <i className='sdashpoweredb'>ABJ School</i></p>
                    </div>
                    <span className='col-xl-6 text-end sdashtomof'>
                        <p className='sdashpoweredb mb-0'>Powered By inTheBayou Technologies</p>
                    </span>
                </div>
            </div>
        </main>
    </>
  )
}

export default AdminDashboard