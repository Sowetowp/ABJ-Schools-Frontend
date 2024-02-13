import React from 'react'
import img2 from "../Assets/Images/shutterstock_635351252.jpg"
import NavBar from './NavBar'
import "../Styles/Carousel.css"
import img1 from "../Assets/Images/shutterstock_726926179.jpg"
import img from "../Assets/Images/WhatsApp Image 2023-09-28 at 22.36.01.jpg"

const Carousel = () => {
  return (
    <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel" autoPlay={true} interval={3000}>
            <span className='' style={{position:"absolute",zIndex:"999", width:"100%"}}>
                <NavBar/>
            </span>
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <div className='cjk'></div>
                <img src={img} alt="Los Angeles" className="d-block jh" style={{width:"100%"}}/>
                <div className="carousel-caption cetafcs">
                    <h3 className='cwt m-0 p-0'>Welcome to</h3>
                    <p className='cacsi'>Air Force Comprehensive School Ibadan</p>
                    <button className='ctatb btn btn-sm btn-outline-info'>Take A Tour</button>
                </div>
            </div>
            <div className="carousel-item">
                <div className='cjk'></div>
                <img src={img1} alt="Chicago" className="d-block jh" style={{width:"100%"}}/>
                <div className="carousel-caption cetafcs">
                    <h3 className='cwt m-0 p-0'>Welcome to</h3>
                    <p className='cacsi'>Air Force Comprehensive School Ibadan</p>
                    <button className='ctatb btn btn-sm btn-outline-info'>Take A Tour</button>
                </div>
            </div>
            <div className="carousel-item">
                <div className='cjk'></div>
                <img src={img2} alt="New York" className="d-block jh" style={{width:"100%"}}/>
                <div className="carousel-caption cetafcs">
                    <h3 className='cwt m-0 p-0'>Welcome to</h3>
                    <p className='cacsi'>Air Force Comprehensive School Ibadan</p>
                    <button className='ctatb btn btn-sm btn-outline-info'>Take A Tour</button>
                </div>  
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon canbtn"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon canbtn"></span>
            </button>
        </div>
    </>
  )
}

export default Carousel