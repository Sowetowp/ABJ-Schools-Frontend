import React, { useEffect, useState } from 'react'
import bank from "../Assets/Images/iconmonstr-school-30 (1).svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { PARENT_SIGN_UP_RESET } from '../Redux/Types'
import { parent_register } from '../Redux/Actions/ParentAction'
import Preloader2 from './Preloader2'

const Addparent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordx2, setPasswordx2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [title, setTitle] = useState('');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const parentRegister = useSelector((state) => state.parentRegister)
	const { loading } = parentRegister
    
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
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    
    const submitHandler = (e) => {
        e.preventDefault()
        
        const tea = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            title,
            image,
            gender,
        }
        if (password === passwordx2) {
            dispatch(parent_register(tea))
            setMessage("")
		} else {
			setMessage('Passwords do not match')
		}
    }
    
    useEffect (() => {
        return () => {
            dispatch({type: PARENT_SIGN_UP_RESET})
        }
    }, [dispatch])
    const passsetter = (e) => {
        setPasswordx2(e.target.value) 
        setMessage("")
    }
  return (
    <>
        {
            loading
            ?
            <Preloader2/>
            :
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Parents Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Parents / Add Parent</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Register Parent</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <form onSubmit={submitHandler} className='ateafo2'>
                                    <h3 className='mt-5 '>Basic Details</h3>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>First Name:</p>
                                            <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Last Name:</p>
                                            <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Title:</p>
                                            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Gender:</p>
                                            <select
                                                className='swalfunselact form-control form-select-sm'
                                                value={gender}
                                                onChange={handleGenderChange}
                                            >
                                                <option value="">--gender--</option>
                                                <option value="male">male</option>
                                                <option value="female">female</option>
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Image:</p>
                                            <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='swalfunselact form-control form-select-sm' onChange={e=>handleChange(e)}/>
                                        </div>
                                        {image &&
                                        <div className='col-md-6'>
                                            <img className='mt-5' style={{width:"100px",height:"100px",borderRadius:"50%"}} src={image}/>
                                        </div>}
                                    </div>
                                    <h3 className='mt-5'>Login Details</h3>
                                    <i style={{color:"red",fontSize:"10px"}}>{message}</i>
                                    <div className='row'>
                                    <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Email:</p>
                                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Password:</p>
                                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Re-type Password:</p>
                                            <input type='password' value={passwordx2} onChange={(e)=>passsetter(e)} className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                    </div>
                                    <h3 className='mt-5'>Contact</h3>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Phone Number:</p>
                                            <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='swalfunselact form-control form-select-sm'/>
                                        </div>
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

export default Addparent