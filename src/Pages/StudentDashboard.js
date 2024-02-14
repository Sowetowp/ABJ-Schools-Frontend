import React, { useEffect, useState } from 'react'
import "../Styles/Sdash.css"
import logo from "../Assets/Images/logo.jpg"
import assignment from "../Assets/Images/assignment-svgrepo-com.svg"
import offc from "../Assets/Images/iconmonstr-menu-left-lined.svg"
import offc2 from "../Assets/Images/iconmonstr-menu-right-lined.svg"
import test1 from "../Assets/Images/testimonial-img-2.jpg"
import home from "../Assets/Images/home-17-svgrepo-com.svg"
import dollar from "../Assets/Images/payment-method-bank-svgrepo-com.svg"
import set from "../Assets/Images/setting-svgrepo-com.svg"
import result from "../Assets/Images/a-best-test-result-svgrepo-com.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import { student_logout } from '../Redux/Actions/StudentAction'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import exam from "../Assets/Images/exam-svgrepo-com.svg"
import ca from "../Assets/Images/exam-test-checklist-online-learning-education-online-document-svgrepo-com.svg"

const StudentDashboard = () => {
    const [show, setShow] = useState(false);
    const [tname, setTname] = useState(null);
    
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
    const studentAuth = useSelector((state) => state.studentAuth)
    const {studentDetail} = studentAuth
    useEffect(() => {
        if(!studentDetail){
            dispatch(student_logout())
            navigate("/slogin")
        }
    }, [studentDetail])
    const logoutHandler = () => {
        dispatch(student_logout())
    }
    useEffect(() => {
        if(window.innerWidth >= 1200){
            setShow(true)
        }
    }, []);
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dqnptsuxt'
        }
    })
    useEffect(() => {
        if (allsession) {
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
                        <div className='d-flex border-end py-3 px-3 col-xl-3' style={{alignItems:"center",justifyContent:"space-between"}}>
                            <a className="navbar-brand d-flex" href='/'>
                                <img className='nbnbl2' src={logo}/>
                                <div className='nbsnt2'>
                                    <p className='p-0 m-0 nbaf2'>ABJ</p>
                                    <p className='p-0 m-0 nbcs2'>SCHOOLS</p>
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
                                    <a onClick={logoutHandler} className="nav-link" href="#"><button className='sdashsignoutb px-3 py-2'><i style={{color:"rgba(15, 79, 163, 0.914)"}} className="fas fa-sign-out-alt me-2"></i>Sign out</button></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={`container-fluid`} style={{height:"78%"}}>
                    <div className='row sdashscrooloiframe' style={{height:"100%"}}>
                        <div className={`px-0 border-end pt-3 col-xl-3 ${show ? "d-block": "d-none"}`} style={{height:"100%"}}>
                            <div className='text-center' style={{height:""}}>
                                {studentDetail && <AdvancedImage className='sdashavatar' cldImg={
                                    (function () {
                                        const myImage = cld.image(studentDetail.image);
                                        myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                        return myImage;
                                    })()
                                } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                <h6 className='mt-3 mb-0' style={{color:"rgb(15, 79, 163)"}}>{studentDetail && studentDetail.lastName.toUpperCase()}, {studentDetail && studentDetail.firstName.toUpperCase()}</h6>
                                <p className='mb-2' style={{fontSize:"15px",color:"grey"}}>{studentDetail && studentDetail._class}</p>
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
                                <a href='/shome' target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle } className='textdeco'>
                                    <div className='d-flex  sdashselect py-2 mt-2'>
                                        <img src={home} className='ps-1' style={{width:"26px"}}/>
                                        <p className='mb-0 sdashhome ms-2'>Home</p>
                                    </div>
                                </a>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={dollar} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Payment Accounts</p>
                                </button>
                                <div id="demo" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark text-dark py-1" href="/wfund" onClick={ window.innerWidth >= 1200 ? null : toggle } target='frame'><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Wallet Funding</a></li>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/fpay" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Fees Payment</a></li>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/phistory" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Payments History</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo2" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={result} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Results Management</p>
                                </button>
                                <div id="demo2" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/result" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i> Check My Results</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo22" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={assignment} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Assignments</p>
                                </button>
                                <div id="demo22" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/passign" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i> Pending Assignments</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo22ca" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={ca} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Continuous Assessment</p>
                                </button>
                                <div id="demo22ca" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/attca" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i> Attempt CA</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo22ex" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={exam} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Examination</p>
                                </button>
                                <div id="demo22ex" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/attexam" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i> Attempt Exam</a></li>
                                    </ul>
                                </div>
                                <button className='d-flex sdashselect px-0 py-2 border-0' data-bs-toggle="collapse" data-bs-target="#demo3" style={{width:"100%",backgroundColor:"transparent"}}>
                                    <img src={set} className='ps-2' style={{width:"25px"}}/>
                                    <p className='mb-0 ms-2 sdashhome'>Profile Management</p>
                                </button>
                                <div id="demo3" className="collapse" style={{backgroundColor:"rgb(237, 237, 237)",borderRadius:"10px"}}>
                                    <ul className="ms-3" style={{listStyle:"none"}}>
                                        <li><a style={{fontSize:"12px"}} className="dropdown-item navddi text-dark py-1" href="/spass" target='frame' onClick={ window.innerWidth >= 1200 ? null : toggle }><i className="fas me-2 sdashhic2 fa-arrow-right"></i>Change Password</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <iframe src='/shome' name='frame' title='myiframe' className={`sdashiframe px-0 ${show ? "col-xl-9": "col-xl-12"} ${window.innerWidth <= 1200 && show? "d-none":""}`}></iframe>
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

export default StudentDashboard