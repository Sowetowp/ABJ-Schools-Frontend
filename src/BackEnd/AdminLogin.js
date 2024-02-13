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
import { teacher_login } from '../Redux/Actions/TeacherAction'
import { admin_login } from '../Redux/Actions/AdminAction'
import Preloader2 from '../Components/Preloader2'

const AdminLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const adminAuth = useSelector((state) => state.adminAuth)
    const { loading, adminDetail, error } = adminAuth
    const submitHandler = (e) => {
        e.preventDefault()
        
        dispatch(admin_login(email, password))
    }
    const ViewHandler = () => {
		let pass = document.getElementById('password')
		let view = document.getElementById('view')
		const type = pass.getAttribute('type') === 'password' ? 'text' : 'password'
		pass.setAttribute('type', type)

		view.classList.toggle('fa-eye-slash')
	}
    useEffect(() => {
        if(adminDetail){
            navigate("/adash")
        }
    }, [adminDetail])

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
                        <p className='congit2'>Login</p>
                        {/* <p className='conlid'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod</p> */}
                    </div>
                </div>
            </div>
            <div className='container confd mb-5'>
                <p className='consmtu'>Welcome</p>
                <form className='row' onSubmit={submitHandler}>
                    {/* <div className='col-md-6'>
                        <label className='pt-5 conln'>Full Name</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={fullName}  onChange={(e) => setFullName(e.target.value)}/>
                    </div> */}
                    <div className='col-12'>
                        <label className='pt-5 conln'>Email Address</label>
                        <br/>
                        <input className='py-3 coninput' type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='col-12'>
                        <label className='pt-5 conln'>Password</label>
                        <br/>
                        <div className='d-flex border-bottom coninputd'>
                            <input className='py-3 bg-white' placeholder='Password' type='password' id='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
                            <i
                                className='fa fa-eye logeyei form-icon'
                                id='view'
                                onClick={ViewHandler}
                            ></i>
                        </div>
                    </div>
                    {/* <div className='col-md-6'>
                        <label className='pt-5 conln'>Subject</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={subject}  onChange={(e) => setSubject(e.target.value)}/>
                    </div>
                    <div className='col-md-12'>
                        <label className='pt-5 conln'>Message</label>
                        <br/>
                        <textarea className='py-3 coninput' type="text" value={message}  onChange={(e) => setMessage(e.target.value)}/>
                    </div> */}
                    <button className='confobut pt-3 pb-2 mt-5' type='submit'>SEND</button>
                </form>
            </div>
            {/* <div className='container conbglf mb-5'>
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
            </div> */}
            <Foot/>
        </main>}
    </>
  )
}

export default AdminLogin