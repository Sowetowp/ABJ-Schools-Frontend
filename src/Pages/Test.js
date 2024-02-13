import React, { useState } from 'react'
import axios from 'axios'
import Img from './Img'
const Test = () => {
    const [file, setFile] = useState("")
    const [image, setImage] = useState("")
    const [uploadedimg, setUploadedimg] = useState("")
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
    const handleSubmit = async(e) => {
        e.preventDefault()
        const result = await axios.post("http://localhost:5000/api",{
            image: image
        })
        try {
            const uploadedImage = result.data.public_id
            setUploadedimg(uploadedImage)
        } catch (error) {
        }
        // setFile(e.target.files)
    }
  return (
    <>
        <form onSubmit={e=>handleSubmit(e)}>
            <input type='file' id='fileInput' onChange={e=>handleChange(e)} required accept='image/png, image/jpeg, image/jpg, image/jfif'/>
            <button className='btn btn-primary'>submit</button>
            <img src={image}/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
            <Img uploadedImage={uploadedimg}/><br/>
        </form>
    </>
  )
}

export default Test