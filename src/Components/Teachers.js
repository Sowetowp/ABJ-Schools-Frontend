import React, { useEffect } from 'react'
import "../Styles/Teachers.css"
import "../Styles/News.css"
import ti from "../Assets/Images/teacher-photo_03-350x240.jpg"
import arr from "../Assets/Images/iconmonstr-arrow-65.svg"
import { useSelector , useDispatch } from 'react-redux'
import { get_all_teachers } from '../Redux/Actions/TeacherAction'
import { Link } from 'react-router-dom'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import Preloader2 from './Preloader2'

const Teachers = () => {
    
    const getAllTeachers = useSelector((state) => state.getAllTeachers)
	const { loading, teachers } = getAllTeachers
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_teachers(1))
    }, [dispatch])
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dqnptsuxt'
        }
    })

    const handleItemClick = (item) => {
        dispatch(get_all_teachers(item))
    }

    const handlePrev = () => {
        if (teachers.currentPage > 1) {
          dispatch(get_all_teachers(teachers.currentPage - 1));
        }
    };

    const handleNext = () => {
        if (teachers.currentPage !== teachers.totalPages) {
          dispatch(get_all_teachers(teachers.currentPage + 1));
        }
    };

  return (
    <>
        {
        loading
        ?
        <Preloader2/>
        :
        <div className='container teacon'>
            <div className='row'>
                {teachers && teachers.teachers && teachers.teachers.map(teacher => <div className='col-xl-3 col-md-6 mt-5'>
                    <AdvancedImage className='teaimg' cldImg={
                        (function () {
                            const myImage = cld.image(teacher.image);
                            myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                            return myImage;
                          })()
                    } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
                    <div className='px-4'>
                        <Link style={{textDecoration:"none" , color:"initial"}} to={`/teacher/${teacher._id}`}>
                            <div className='p-4 teandi'>
                                <p className='m-0 teaname'>{teacher.firstName} {teacher.lastName}</p>
                                <p className='m-0' style={{wordWrap:"break-word"}}>{teacher.subject && teacher.subject.map((e)=>e.name).join(",")}</p>
                            </div>
                        </Link>
                    </div>
                </div>)}
            </div>
            {teachers && teachers.totalPages &&
            <div className='pt-5'>
                <ul className="pagination justify-content-center pagination-sm newpage py-5">
                    <li className={`page-item ${teachers.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                    {Array.from({ length: teachers && teachers.totalPages }, (_, index) => index + 1).map((item) => (
                        <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                    ))}
                    <li className={`page-item ${teachers.currentPage === teachers.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
                </ul>
            </div>}
        </div>
        }
    </>
  )
}

export default Teachers