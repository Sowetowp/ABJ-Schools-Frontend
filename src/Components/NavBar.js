import React, { useEffect, useState } from 'react'
import logo from "../Assets/Images/logo.jpg"
import "../Styles/Nav.css"
import search from "../Assets/Images/search.svg"

const NavBar = () => {
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        if(typeof window !== "undefined"){
            window.addEventListener("scroll", () => {
                setScrollHeader(window.pageYOffset > 200)
            })
        }
    }, [])
  return (
    <div className='nbconta'>
        <nav className={`navbar navbar-expand-sm navbar-dark  ${scrollHeader ? "fixed-top bgonly" : "bg-transparent" }`}>
            <div className="container-fluid">
                <a className="navbar-brand d-flex" href='/'>
                    <img className='nbnbl' src={logo}/>
                    <div className='nbsnt'>
                        <p className='p-0 m-0 nbaf'>ABJ</p>
                        <p className='p-0 m-0 nbcs'>SCHOOLS</p>
                        <p className='p-0 m-0 nbafr'>ABJ</p>
                    </div>
                </a>
                <div>
                    <button className="navbar-toggler border-0 nbsbr" type="button" data-bs-toggle="collapse">
                    <button className="btn" type="button"><img src={search}/></button>
                    </button>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse navscbc" id="mynavbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item text-center">
                    <a className="nav-link nbnl" href="/">HOME</a>
                    </li>
                    <li className="nav-item text-center">
                    <a className="nav-link nbnl" href="/about">ABOUT</a>
                    </li>
                    {/* <li className="nav-item text-center">
                    <a className="nav-link nbnl" href="">ACADEMICS</a>
                    </li> */}
                    <li className="nav-item dropdown text-center">
                        <a className="nav-link dropdown-toggle nbnl" href="#" role="button" data-bs-toggle="dropdown">ACADEMICS</a>
                        <ul className="dropdown-menu text-center navbjfbg">
                            <li><a className="dropdown-item navddi" href="/teachers">TEACHERS</a></li>
                            <li><a className="dropdown-item navddi" href="/calendar">CALENDAR</a></li>
                            <li><a className="dropdown-item navddi" href="/news">NEWS/BLOG</a></li>
                        </ul>
                    </li>
                    <li className="nav-item text-center">
                    <a className="nav-link nbnl" href="/admission">ADMISSION</a>
                    </li>
                    {/* <li className="nav-item text-center">
                    <a className="nav-link nbnl" href="">LOGIN</a>
                    </li> */}
                    <li className="nav-item dropdown text-center">
                        <a className="nav-link dropdown-toggle nbnl" href="#" role="button" data-bs-toggle="dropdown">LOGIN</a>
                        <ul className="dropdown-menu text-center navbjfbg">
                            <li><a className="dropdown-item navddi" href="/slogin">STUDENT</a></li>
                            <li><a className="dropdown-item navddi" href="/tlogin">TEACHER</a></li>
                            <li><a className="dropdown-item navddi" href="/plogin">PARENT</a></li>
                        </ul>
                    </li>
                    <li className="nav-item text-center">
                    <a className="nav-link nbnl" href="/gallery">GALLERY</a>
                    </li>
                </ul>
                <a data-bs-toggle="modal" data-bs-target="#myModal1" className="btn nbsb" type="button"><img src={search}/>
                </a>
                {/* <div className="modal" id="myModal1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Search Website</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body me-auto">
                                <input placeholder='Type in your keyword' className='navsearchinput'/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Search</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar