import React, { useEffect, useState } from 'react'
import "../Styles/Contact.css"
import NavBar from '../Components/NavBar'
import loc from "../Assets/Images/iconmonstr-location-1.svg"
import mail from "../Assets/Images/iconmonstr-email-4 (1).svg"
import phone1 from "../Assets/Images/iconmonstr-phone-1.svg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { contact_us } from '../Redux/Actions/MailAction'
import { CONTACT_US_RESET } from '../Redux/Types'
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")


    const contactUs = useSelector((state) => state.contactUs)
    const {mailDetail} = contactUs


    const submitHandler = (e) => {
        e.preventDefault()
        const dada = {
            fullName,
            email,
            phone,
            subject,
            message
        }
        dispatch(contact_us(dada))
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: CONTACT_US_RESET})
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
                        <label className='pt-5 conln'>Full Name</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={fullName}  onChange={(e) => setFullName(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Email Address</label>
                        <br/>
                        <input className='py-3 coninput' type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Phone Number</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={phone}  onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Subject</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={subject}  onChange={(e) => setSubject(e.target.value)}/>
                    </div>
                    <div className='col-md-12'>
                        <label className='pt-5 conln'>Message</label>
                        <br/>
                        <textarea className='py-3 coninput' type="text" value={message}  onChange={(e) => setMessage(e.target.value)}/>
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

export default Contact