import React, { useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-lock-26 (1).svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch } from 'react-redux'
import { student_update_password } from '../Redux/Actions/StudentAction'

const Spassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPassword2, setNewPassword2] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault()
        const tea = {
            newPassword,
            currentPassword
        }
        if (newPassword === newPassword2) {
            dispatch(student_update_password(tea))
            setMessage("")
		} else {
			setMessage('Passwords do not match')
		}
    }

  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Profile Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Profile Management / Change Password</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Student Account Update</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                {/* <p className='swalfunp2'>Change Password</p> */}
                                <form className='' onSubmit={submitHandler}>
                                    <i style={{color:"red",fontSize:"10px"}}>{message}</i>
                                    <p className='swalfunp2'>Current Password:</p>
                                    <input type='password' onChange={(e) => setCurrentPassword(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                    <p className='swalfunp2 mt-3'>New Password:</p>
                                    <input type='password' onChange={(e) => setNewPassword(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                    <p className='swalfunp2 mt-3'>Re-Type Password:</p>
                                    <input type='password' onChange={(e) => setNewPassword2(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                    <button className='subbtn3 mt-3 px-3'>ok</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Spassword