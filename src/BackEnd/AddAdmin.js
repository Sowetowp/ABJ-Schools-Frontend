import React, { useEffect, useState } from 'react'
import "../Styles/Contact.css"
import NavBar from '../Components/NavBar'
import loc from "../Assets/Images/iconmonstr-location-1.svg"
import mail from "../Assets/Images/iconmonstr-email-4 (1).svg"
import phone1 from "../Assets/Images/iconmonstr-phone-1.svg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ADMIN_SIGN_UP_RESET } from '../Redux/Types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { teacher_register } from '../Redux/Actions/TeacherAction'
import { admin_register } from '../Redux/Actions/AdminAction'
import Preloader2 from '../Components/Preloader2'

const AddAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [dob, setDob] = useState(Date)
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleDateChange = (date) => {
        setDob(date);
    };
    const adminRegister = useSelector((state) => state.adminRegister)
    const {loading, adminDetail} = adminRegister

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
        const dada = {
            firstName,
            lastName,
            middlename: middleName,
            email,
            password,
            phoneNumber,
            dob,
            image,
            gender,
            address
        }
        dispatch(admin_register(dada))
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: ADMIN_SIGN_UP_RESET})
        }
     }, [dispatch])

  return (
    <>
        {
        loading
        ?
        <Preloader2/>
        :
        <main className='container-fluid px-0'>
            <div className='conbgi'>
                <div className='conjk'>
                    <NavBar/>
                    <div className='conche'>
                        <p className='congit'>Create your administartor</p>
                        <p className='conlid'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod</p>
                    </div>
                </div>
            </div>
            <div className='container confd'>
                <p className='consmtu'>Send us a Message</p>
                <form className='row' onSubmit={submitHandler}>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>firstName</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Email Address</label>
                        <br/>
                        <input className='py-3 coninput' type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>lastName</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>MiddleName</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={middleName}  onChange={(e) => setMiddleName(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>password</label>
                        <br/>
                        <input className='py-3 coninput' type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>phoneNumber</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>address</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={address}  onChange={(e) => setAddress(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>dob</label>
                        <br/>
                        <input className='py-3 coninput' type="date" value={dob}  onChange={(e) => setDob(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>gender</label>
                        <br/>
                        <select
                            className='py-3 coninput'
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <option value="">pick your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>image</label>
                        <br/>
                        <div className='d-flex justify-content-between border-bottom'>
                            <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='py-3 coninput2' onChange={e=>handleChange(e)}/>
                            <img className='' style={{width:"50px",height:"50px",borderRadius:"50%"}} src={image}/>
                        </div>
                    </div>
                    <div className='col-12 text-center'>
                        <button className='confobut pt-3 pb-2 mt-5' type='submit' >SEND</button>
                    </div>
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
        }
    </>
  )
}

export default AddAdmin