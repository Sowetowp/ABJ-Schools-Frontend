import React, { useEffect } from 'react'
import "../Styles/Steacher.css"
import NavBar from '../Components/NavBar'
import tea from "../Assets/Images/teacher-photo_03-350x240.jpg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import { get_single_teacher } from '../Redux/Actions/TeacherAction'
import { useParams } from 'react-router-dom'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import Preloader from '../Components/Preloader'

const SingleTeacher = () => {
  const { id } = useParams();
  const getSingleTeacher = useSelector(state => state.getSingleTeacher)
  const { loading,teacher } = getSingleTeacher
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_single_teacher(id))
  }, [dispatch, id])
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dwgwcghfh'
    }
})
  return (
    <>
      {
      loading
      ?
      <Preloader/>
      :
      <div className='container-fliud'>
        <div className='sthbg'>
          <div className='stjk'>
            <NavBar/>
            <div className='stheadc'>
              <p>Profile</p>
            </div>
          </div>
        </div>
        {teacher && <div className='container py-5'>
          <div className='row py-3'>
            <div className='col-md-4'>
              <AdvancedImage className='stmim' cldImg={
                  (function () {
                      const myImage = cld.image(teacher.image);
                      myImage.resize(fill().width(280).height(280).gravity(focusOn(FocusOn.face())));
                      return myImage;
                    })()
              } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>
            </div>
            <div className='col-md-8 mt-4'>
              <p className='stp1'>{teacher.firstName} {teacher.lastName}</p>
              <p className='stp2'>{teacher.subject && teacher.subject.map((e)=>e.name).join(",")}</p>
              <p className='stp3'>About Me</p>
              <p className='stp4'>{teacher.biography}</p>
            </div>
          </div>
        </div>}
        <Foot/>
      </div>
      }
    </>
  )
}

export default SingleTeacher