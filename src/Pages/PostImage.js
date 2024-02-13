import React, { useEffect, useState } from 'react'
import "../Styles/Contact.css"
import NavBar from '../Components/NavBar'
import loc from "../Assets/Images/iconmonstr-location-1.svg"
import mail from "../Assets/Images/iconmonstr-email-4 (1).svg"
import phone1 from "../Assets/Images/iconmonstr-phone-1.svg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { create_image } from '../Redux/Actions/GalleryAction'
import { POST_IMAGE_RESET } from '../Redux/Types'

const PostImage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    
    function previewFiles(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
            setImage(reader.result)
        }
    }
    const handleChange = (e) => {
        const file = e.target.files[0]
        setFile(file)
        previewFiles(file)
        // setFile(e.target.files)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const tea = {
            image,
            title,
        }
        dispatch(create_image(tea))
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: POST_IMAGE_RESET})
        }
     }, [dispatch])

  return (
    <>
        <main className='container-fluid px-0'>
            <div className='conbgi'>
                <div className='conjk'>
                    <NavBar/>
                    <div className='conche'>
                        <p className='congit'>Get in Touch with Us</p>
                        <p className='conlid'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod</p>
                    </div>
                </div>
            </div>
            <div className='container confd'>
                <p className='consmtu'>Send us a Message</p>
                <form className='row' onSubmit={submitHandler}>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Title</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={title}  onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>image</label>
                        <br/>
                        <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='py-3 coninput' onChange={e=>handleChange(e)}/>
                        <img style={{width:"100px",height:"100px"}} src={image}/>
                    </div>
                    <button className='confobut pt-3 pb-2 mt-5' type='submit'>SEND</button>
                </form>
            </div>
            <div className='container conbglf mb-5'>
                <p className='conconi'>Contact Information</p>
                <div className='d-flex mt3'>
                    <img src={loc} className='conloimgg'/>
                    <p className='conloa m-0'>Riga, Latvias capital, is set on the Baltic Sea at the mouth of the River Daugava</p>
                </div>
                <div className='d-flex mt-3'>
                    <img src={phone1} className='conloimgg'/>
                    <p className='conloa m-0'>07010549096</p>
                </div>
                <div className='d-flex mt-3'>
                    <img src={mail} className='conloimgg'/>
                    <p className='conloa m-0'>info@kenzap.com</p>
                </div>
            </div>
            <Foot/>
        </main>
    </>
  )
}

export default PostImage