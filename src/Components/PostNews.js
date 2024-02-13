import React, { useEffect, useState } from 'react'
import bank from "../Assets/Images/iconmonstr-newspaper-9.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { POST_NEWS_RESET } from '../Redux/Types'
import { create_news } from '../Redux/Actions/NewsAction'
import Preloader2 from './Preloader2'

const PostNews = () => {
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const postNews = useSelector((state) => state.postNews)
	const { loading } = postNews
    
    const dispatch = useDispatch()
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
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const tea = {
            image,
            title,
            body,
        }
        dispatch(create_news(tea))
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: POST_NEWS_RESET})
        }
     }, [dispatch])

    
  return (
    <>
        {
        loading
        ?
        <Preloader2/>
        :
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Blog Management</p>
            <p className='swafundpayacc mt-2 mb-0'>News / Post News</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Post News</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <form onSubmit={submitHandler} className='ateafo2'>
                                    <h3 className='mt-5 '>News Details</h3>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Title:</p>
                                            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Body:</p>
                                            <textarea type='text' value={body} onChange={(e) => setBody(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Image:</p>
                                            <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='swalfunselact form-control form-select-sm' onChange={e=>handleChange(e)}/>
                                        </div>
                                        {image &&
                                        <div className='col-md-6'>
                                            <img className='mt-5' style={{width:"100px",height:"100px",borderRadius:"5px"}} src={image}/>
                                        </div>}
                                    </div>
                                    <button type='submit' className='subbtn3 mt-5 px-3'>Submit</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </main>}
    </>
  )
}

export default PostNews