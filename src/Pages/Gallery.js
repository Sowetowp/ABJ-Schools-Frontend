import React, { useEffect } from 'react'
import "../Styles/Gallery.css"
import NavBar from '../Components/NavBar'
import img from "../Assets/Images/excursions-bg-388x370.jpg"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import arr from "../Assets/Images/iconmonstr-arrow-65.svg"
import Foot from '../Components/Foot'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../Components/Preloader'
import { get_all_images } from '../Redux/Actions/GalleryAction'

const Gallery = () => {
    const getAllImages = useSelector((state) => state.getAllImages)
	const { loading, images } = getAllImages
    const result = Array.from({ length: images && images.totalPages }, (_, index) => index + 1);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_images(1))
    }, [dispatch])
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dqnptsuxt'
        }
    })
    const handleItemClick = (item) => {
        dispatch(get_all_images(item))
    }
    const handlePrev = () => {
        if (images.currentPage > 1) {
          dispatch(get_all_images(images.currentPage - 1));
        }
    };
    const handleNext = () => {
        if (images.currentPage !== images.totalPages) {
          dispatch(get_all_images(images.currentPage + 1));
        }
    };
    // const Archive = (e) => {
    //     const inputDate = new Date(`${e}`);
    //     const options = { year: "numeric", month: "long", day: "numeric" };
    //     const formattedDate = new Intl.DateTimeFormat("en-US", options).format(inputDate);
    //     return formattedDate
    // };
  return (
    <>
        {loading
        ?
        <Preloader/>
        :
        <div className='container-fluid px-0'>
            <div className='galbgimg'>
                <div className='galjk'>
                    <NavBar/>
                    <div className='pt-5 text-center'>
                        <p className='galgals'>Gallery ABJ School</p>
                        <p className='gallorim'>Immerse in memorable moments and shared experiences through captivating images in our gallery. Relive achievements and the vibrant spirit of our dynamic school life.</p>
                    </div>
                </div>
            </div>
            <div className='container galconmtm'>
                <div className='row'>
                    {images && images.paginatedGallery && images.paginatedGallery.map(gal =>
                        <div className='px-0 col-xl-4 col-md-6'>
                            <AdvancedImage className='galimg' cldImg={
                                (function () {
                                    const myImage = cld.image(gal.image);
                                    myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                    return myImage;
                                })()
                            } />
                        </div>
                    )}
                </div>
            </div>
            {images &&
            <div className='pb-3 py-5'>
                <ul className="pagination justify-content-center pagination-sm newpage">
                    <li className={`page-item ${images.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                    {result.map((item) => (
                        <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                    ))}
                    <li className={`page-item ${images.currentPage === images.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
                </ul>
            </div>}
            <Foot/>
        </div>
        }
    </>
  )
}

export default Gallery