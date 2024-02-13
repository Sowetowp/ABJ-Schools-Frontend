import React, { useEffect } from 'react'
import "../Styles/Wov.css"
import img from "../Assets/Images/excursions-bg-767x481 (1).jpg"
import img1 from "../Assets/Images/events-bg-767x500 (1).jpg"
import img2 from "../Assets/Images/hero-2-bg-767x500 (2).jpg"
import img3 from "../Assets/Images/shutterstock_63981496-767x500.jpeg"
import img4 from "../Assets/Images/events-single-bg-767x500 (1).jpg"
import vid from "../Assets/Images/iconmonstr-video-15.svg"
import { Slide } from 'react-awesome-reveal';
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../Components/Preloader'
import { get_all_images } from '../Redux/Actions/GalleryAction'

const Wov = () => {
    const getAllImages = useSelector((state) => state.getAllImages)
	const { loading, images } = getAllImages
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(get_all_images(1))
    // }, [dispatch])
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dwgwcghfh'
        }
    })
    
  return (
    <>
        <main className='container-fluid' style={{overflow:"hidden"}}>
            {images && images.paginatedGallery &&
                <div className='row wovimg' >
                    <div className='col-md-6 p-0' style={{height:"100%"}}>
                        <Slide direction="left" style={{height:"100%"}}>
                            <AdvancedImage style={{height:"300px"}} cldImg={
                                (function () {
                                    const myImage = cld.image(images.paginatedGallery.length > 0 && images.paginatedGallery[0].image);
                                    myImage.resize(fill().width(550).height(300).gravity(focusOn(FocusOn.face())));
                                    return myImage;
                                })()
                            } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        </Slide>
                    </div>
                    <div className='col-md-3 p-0' style={{height:"100%"}}>
                        <AdvancedImage style={{height:"50%"}} cldImg={
                            (function () {
                                const myImage = cld.image(images.paginatedGallery.length > 1 && images.paginatedGallery[1].image);
                                myImage.resize(fill().width(230).height(115).gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        <AdvancedImage style={{height:"50%"}} cldImg={
                            (function () {
                                const myImage = cld.image(images.paginatedGallery.length > 2 && images.paginatedGallery[2].image);
                                myImage.resize(fill().width(230).height(115).gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                    </div>
                    <div className='col-md-3 p-0 wovdn' style={{height:"100%"}}>
                        <Slide direction="right" style={{height:"50%"}} >
                            <AdvancedImage style={{height:"100%"}} cldImg={
                                (function () {
                                    const myImage = cld.image(images.paginatedGallery.length > 3 && images.paginatedGallery[3].image);
                                    myImage.resize(fill().width(230).height(115).gravity(focusOn(FocusOn.face())));
                                    return myImage;
                                })()
                            } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                            <AdvancedImage style={{height:"100%"}} cldImg={
                                (function () {
                                    const myImage = cld.image(images.paginatedGallery.length > 4 && images.paginatedGallery[4].image);
                                    myImage.resize(fill().width(230).height(115).gravity(focusOn(FocusOn.face())));
                                    return myImage;
                                })()
                            } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        </Slide>
                    </div>
                </div>
            }
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Slide direction="left">
                        <p className='wovp1'>WATCH OUR VIDEO</p>
                        <p className='wovp2'>In our school, a warm and familial atmosphere permeates through every corner, uniting teachers, assistants, and students in a shared sense of community. This close-knit environment provides the perfect backdrop for fostering academic prowess. Together, as a family, we prioritize the nurturing of every student's abilities, creating an educational experience that is enriching, supportive, and comprehensive.</p>
                        <a href='/about'><button className='mt-5 wovbtn px-5 py-3'>Learn More</button></a>
                        </Slide>
                    </div>
                    <Slide direction="right" className='col-md-6 wovvid'>
                        <img className='wovpimg' src={vid}/>
                    </Slide>
                </div>
            </div>
        </main>
    </>
  )
}

export default Wov