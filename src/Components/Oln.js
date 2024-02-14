import React, { useEffect } from 'react'
import "../Styles/Oln.css"
import logo from "../Assets/Images/logo.jpg"
import news1 from "../Assets/Images/Cape_Town_Stadium_Aerial_View-271x243.jpg"
import news2 from "../Assets/Images/shutterstock_287328122-271x243.jpeg"
import news3 from "../Assets/Images/shutterstock_367274759-271x243.jpeg"
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { useDispatch, useSelector } from 'react-redux'
import { get_all_news } from '../Redux/Actions/NewsAction'
import Preloader from './Preloader'

const Oln = () => {

    const getAllNews = useSelector((state) => state.getAllNews)
    const { loading, news } = getAllNews
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_news(1))
    }, [dispatch])

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dqnptsuxt'
        }
    })

    const Archive = (e) => {
        const inputDate = new Date(`${e}`);
        const options = { month: "short", day: "numeric" };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(inputDate);
        return formattedDate
    };

  return (
    <>
        {
        loading
        ?
        <Preloader/>
        :
        <span>
        {news && news.paginatedNews2 &&
        <div className='container py-5'>
            <p className='olnoln mt-5'>OUR LATEST NEWS</p>
            <div className='row olnrh' style={{marginTop:"80px"}}>
                {news.paginatedNews2.length > 0 && <div className='col-xl-3 col-md-6 olnspt'>
                    <div className="card olnspt2" style={{width:"100%"}}>
                        <div className='olnaad d-flex border-bottom justify-content-between p-2'>
                            <div className='d-flex olniat'>
                                <img style={{width:"40px"}} src={logo}/>
                                <p className='olnaut m-0'>admin</p>
                            </div>
                            <p className='m-0' style={{paddingRight:"10px"}}>{Archive(news.paginatedNews2[0].createdAt)}</p>
                        </div>
                        <AdvancedImage style={{width:"100%",borderRadius:"0px",height:"230px", objectFit:"cover"}} className="card-img-top" cldImg={
                            (function () {
                                const myImage = cld.image(news.paginatedNews2[0].image);
                                myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        <div className="card-body px-4 pt-5 olncardb">
                            <p className='olnjcp'>{news.paginatedNews2[0].title}</p>
                            <p className='olnjcp1'>{news.paginatedNews2[0].body}</p>
                        </div>
                        <div className="card-body px-4 pb-5">
                            <a href='/news' className='olnjcp2'>Read More</a>
                        </div>
                    </div>
                </div>}
                {news.paginatedNews2.length > 1 && <div className='col-xl-3 col-md-6 olnspt'>
                    <div className="card olnspt2" style={{width:"100%"}}>
                        <div className='olnaad d-flex border-bottom justify-content-between p-2'>
                            <div className='d-flex olniat'>
                                <img style={{width:"40px"}} src={logo}/>
                                <p className='olnaut m-0'>admin</p>
                            </div>
                            <p className='m-0' style={{paddingRight:"10px"}}>{Archive(news.paginatedNews2[1].createdAt)}</p>
                        </div>
                        <AdvancedImage style={{width:"100%",borderRadius:"0px",height:"230px", objectFit:"cover"}} className="card-img-top" cldImg={
                            (function () {
                                const myImage = cld.image(news.paginatedNews2[1].image);
                                myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        <div className="card-body px-4 pt-5 olncardb">
                            <p className='olnjcp'>{news.paginatedNews2[1].title}</p>
                            <p className='olnjcp1'>{news.paginatedNews2[1].body}</p>
                        </div>
                        <div className="card-body px-4 pb-5">
                            <a href='/news' className='olnjcp2'>Read More</a>
                        </div>
                    </div>
                </div>}
                {news.paginatedNews2.length > 2 && <div className='col-xl-3 col-md-6 olnspt'>
                    <div className="card olnspt2" style={{width:"100%"}}>
                        <div className='olnaad d-flex border-bottom justify-content-between p-2'>
                            <div className='d-flex olniat'>
                                <img style={{width:"40px"}} src={logo}/>
                                <p className='olnaut m-0'>admin</p>
                            </div>
                            <p className='m-0' style={{paddingRight:"10px"}}>{Archive(news.paginatedNews2[2].createdAt)}</p>
                        </div>
                        <AdvancedImage style={{width:"100%",borderRadius:"0px",height:"230px", objectFit:"cover"}} className="card-img-top" cldImg={
                            (function () {
                                const myImage = cld.image(news.paginatedNews2[2].image);
                                myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        <div className="card-body px-4 pt-5 olncardb">
                            <p className='olnjcp'>{news.paginatedNews2[2].title}</p>
                            <p className='olnjcp1'>{news.paginatedNews2[2].body}</p>
                        </div>
                        <div className="card-body px-4 pb-5">
                            <a href='/news' className='olnjcp2'>Read More</a>
                        </div>
                    </div>
                </div>}
                {news.paginatedNews2.length > 3 && 
                <div className='col-xl-3 col-md-6 olnspt'>
                    <div className="card olnspt2" style={{width:"100%"}}>
                        <div className='olnaad d-flex border-bottom justify-content-between p-2'>
                            <div className='d-flex olniat'>
                                <img style={{width:"40px"}} src={logo}/>
                                <p className='olnaut m-0'>admin</p>
                            </div>
                            <p className='m-0' style={{paddingRight:"10px"}}>{Archive(news.paginatedNews2[3].createdAt)}</p>
                        </div>
                        <AdvancedImage style={{width:"100%",borderRadius:"0px",height:"230px", objectFit:"cover"}} className="card-img-top" cldImg={
                            (function () {
                                const myImage = cld.image(news.paginatedNews2[3].image);
                                myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        <div className="card-body px-4 pt-5 olncardb">
                            <p className='olnjcp'>{news.paginatedNews2[3].title}</p>
                            <p className='olnjcp1'>{news.paginatedNews2[3].body}</p>
                        </div>
                        <div className="card-body px-4 pb-5">
                            <a href='/news' className='olnjcp2'>Read More</a>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
        }
        </span>
        }
    </>
  )
}

export default Oln