import React, { useEffect, useState } from 'react'
import "../Styles/News.css"
import NavBar from '../Components/NavBar'
import user from "../Assets/Images/iconmonstr-user-5.svg"
import calendar from "../Assets/Images/iconmonstr-calendar-4.svg"
import search from "../Assets/Images/iconmonstr-search-thin (1).svg"
import Foot from '../Components/Foot'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { useDispatch, useSelector } from 'react-redux'
import { get_all_news } from '../Redux/Actions/NewsAction'
import Preloader from '../Components/Preloader'
import Preloader2 from '../Components/Preloader2'

const News = () => {

    const getAllNews = useSelector((state) => state.getAllNews)
	const { loading, news } = getAllNews
    
    const dispatch = useDispatch()
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dwgwcghfh'
        }
    })

    useEffect(() => {
        dispatch(get_all_news(1))
    }, [dispatch])

    const handleItemClick = (item) => {
        dispatch(get_all_news(item))
    }

    const handlePrev = () => {
        if (news.currentPage > 1) {
          dispatch(get_all_news(news.currentPage - 1));
        }
    };

    const handleNext = () => {
        if (news.currentPage !== news.totalPages) {
          dispatch(get_all_news(news.currentPage + 1));
        }
    };
    
    const Archive = (e) => {
        const inputDate = new Date(`${e}`);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(inputDate);
        return formattedDate
    };
    
  return (
    <>
        {loading
        ?
        <Preloader/>
        :
        <div className='container-fluid px-0'>
            <div className='newhbg'>
                <div className='newjk'>
                    <NavBar/>
                    <div className='newnewd'>
                        <p className='news '>News</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-xl-7'>
                    {loading?
                    <Preloader2/>
                    :
                    <span>
                    {news && news.paginatedNews && news.paginatedNews.map(newss =>
                    <div >
                        <AdvancedImage className='newnsi' cldImg={
                            (function () {
                                const myImage = cld.image(newss.image);
                                myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                return myImage;
                            })()
                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                        <p className='newjcpt'>{newss.title}</p>
                        <div className='d-flex neewdaa mt-2'>
                            <img src={calendar}/>
                            <p className='mb-0 mt-2 px-3'>{Archive(newss.createdAt)}</p>
                            <img src={user}/>
                            <p className='mb-0 mt-2 px-3'>admin</p>
                        </div>
                        <p className='newwtwp mt-5'>{newss.body}</p>
                    </div>
                    )}</span>
                    }
                    </div>
                    <div className='col-xl-5 newsaaarn'>
                        <div className='newdfiai border'>
                            <input placeholder='New search'/>
                            <img src={search}/>
                        </div>
                        <p className='mt-5 newrepo'>RECENT POSTS</p>
                        <hr/>
                        {news && news.paginatedNews && news.paginatedNews2.map(newsss =>
                        <div className='p-3 pb-0'>
                            <a className='newrpjco'>{newsss.title}</a>
                            <hr/>
                        </div>
                        )}
                        {/* <p className='mt-5 newrepo'>ARCHIVES</p>
                        <hr/>
                        <div className='p-3 pb-0'>
                            <a className='newrpjco'>March 2020</a>
                            <hr/>
                        </div> */}
                    </div>
                </div>
            </div>
            {news && news.totalPages &&
            <div>
                <ul className="pagination justify-content-center pagination-sm newpage">
                    <li className={`page-item ${news.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                    {Array.from({ length: news && news.totalPages }, (_, index) => index + 1).map((item) => (
                        <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                    ))}
                    <li className={`page-item ${news.currentPage === news.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
                </ul>
            </div>}
            <Foot/>
        </div>
        }
    </>
  )
}

export default News