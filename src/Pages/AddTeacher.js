import React, { useEffect, useState } from 'react'
import "../Styles/Contact.css"
import NavBar from '../Components/NavBar'
import loc from "../Assets/Images/iconmonstr-location-1.svg"
import mail from "../Assets/Images/iconmonstr-email-4 (1).svg"
import phone1 from "../Assets/Images/iconmonstr-phone-1.svg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { TEACHER_SIGN_UP_RESET } from '../Redux/Types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { teacher_register } from '../Redux/Actions/TeacherAction'

const AddTeacher = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [status, setStatus] = useState("active")
    const [dob, setDob] = useState(null)
    const [subject, setSubject] = useState([])
    const [qualification, setQualification] = useState("")
    const [biography, setBiography] = useState("")
    const [post, setPost] = useState([])
    const [department, setDepartment] = useState([])
    const [image, setImage] = useState("")
    const [access, setAccess] = useState([])
    const [file, setFile] = useState("")
    const [mathematics, setMathematics] = useState("")
    const [english, setEnglish] = useState("")
    const [science, setScience] = useState("")
    const [technology, setTechnology] = useState("")
    const [biology, setBiology] = useState("")
    const [chemistry, setChemistry] = useState("")
    const [physics, setPhysics] = useState("")
    const [economics, setEconomics] = useState("")
    const [jss1a, setjss1a] = useState("")
    const [jss1b, setjss1b] = useState("")
    const [jss1c, setjss1c] = useState("")
    const [jss1d, setjss1d] = useState("")
    const [hod, setHod] = useState("")
    

    const handleDateChange = (date) => {
        setDob(date);
    };
    const handleMaths = (e) => {
        if(e.target.checked){
            setMathematics(e.target.value);
        }else{
            setMathematics("")
        }
    };
    const handleScience = (e) => {
        if(e.target.checked){
            setScience(e.target.value);
        }else{
            setScience("")
        }
    };
    const handleTech = (e) => {
        if(e.target.checked){
            setTechnology(e.target.value);
        }else{
            setTechnology("")
        }
    };
    const handleEnglish = (e) => {
        if(e.target.checked){
            setEnglish(e.target.value);
        }else{
            setEnglish("")
        }
    };

    const handleDepts = ()=>{
        const valuesToAdd = [mathematics, english, science, technology];
        const newArray = valuesToAdd.filter((value) => value.trim() !== '');
        setDepartment(newArray);
    }

    const handleHod = (e) => {
        if(e.target.checked){
            setHod(e.target.value);
        }else{
            setHod("")
        }
    };

    const handlePost = ()=>{
        const valuesToAdd = [hod];
        const newArray = valuesToAdd.filter((value) => value.trim() !== '');
        setPost(newArray);
    }

    const handleJss1a = (e) => {
        if(e.target.checked){
            setjss1a(e.target.value);
        }else{
            setjss1a("")
        }
    };
    const handleJss1b = (e) => {
        if(e.target.checked){
            setjss1b(e.target.value);
        }else{
            setjss1b("")
        }
    };
    const handleJss1c = (e) => {
        if(e.target.checked){
            setjss1c(e.target.value);
        }else{
            setjss1c("")
        }
    };
    const handleJss1d = (e) => {
        if(e.target.checked){
            setjss1d(e.target.value);
        }else{
            setjss1d("")
        }
    };

    const handleAccess = ()=>{
        const valuesToAdd = [jss1a, jss1b, jss1c, jss1d];
        const newArray = valuesToAdd.filter((value) => value.trim() !== '');
        setAccess(newArray);
    }

    const handleBiology = (e) => {
        if(e.target.checked){
            setBiology(e.target.value);
        }else{
            setBiology("")
        }
    };
    const handleChemistry = (e) => {
        if(e.target.checked){
            setChemistry(e.target.value);
        }else{
            setChemistry("")
        }
    };
    const handleEconomis = (e) => {
        if(e.target.checked){
            setEconomics(e.target.value);
        }else{
            setEconomics("")
        }
    };
    const handlePhysics = (e) => {
        if(e.target.checked){
            setPhysics(e.target.value);
        }else{
            setPhysics("")
        }
    };

    const handleSubjects = ()=>{
        const valuesToAdd = [physics, biology, economics, chemistry];
        const newArray = valuesToAdd.filter((value) => value.trim() !== '');
        setSubject(newArray);
    }

    const teacherRegister = useSelector((state) => state.teacherRegister)
    const {teacherDetail} = teacherRegister

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
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
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            status,
            dob,
            subject,
            qualification,
            biography,
            post,
            department,
            image,
            access
        }
        dispatch(teacher_register(tea))
        // const result = await axios.post("http://localhost:5000",{
        //     image: image
        // })
        // try {
        //     const uploadedImage = result.data.public_id
        //     setUploadedimg(uploadedImage)
        // } catch (error) {
        // }
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: TEACHER_SIGN_UP_RESET})
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
                        <label className='pt-5 conln'>password</label>
                        <br/>
                        <input className='py-3 coninput' type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='col-md-12'>
                        <label className='pt-5 conln'>status</label>
                        <br/>
                        <select
                            value={status}
                            onChange={handleStatusChange}
                        >
                            <option value="active">Active</option>
                            <option value="retired">Retired</option>
                            <option value="sacked">Sacked</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>phoneNumber</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>dob</label>
                        <br/>
                        <DatePicker selected={dob} onChange={handleDateChange}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Physics</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="Physics" onChange={handlePhysics} onMouseLeave={handleSubjects}/>
                        <label className='pt-5 conln'>Biology</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="Biology" onChange={handleBiology} onMouseLeave={handleSubjects}/>
                        <label className='pt-5 conln'>Chemistry</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="Chemistry" onChange={handleChemistry} onMouseLeave={handleSubjects}/>
                        <label className='pt-5 conln'>Economics</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="Economics" onChange={handleEconomis} onMouseLeave={handleSubjects}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>jss1a</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="jss1a" onChange={handleJss1a} onMouseLeave={handleAccess}/>
                        <label className='pt-5 conln'>jss1b</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="jss1b" onChange={handleJss1b} onMouseLeave={handleAccess}/>
                        <label className='pt-5 conln'>jss1c</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="jss1c" onChange={handleJss1c} onMouseLeave={handleAccess}/>
                        <label className='pt-5 conln'>jss1d</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="jss1d" onChange={handleJss1d} onMouseLeave={handleAccess}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>H.O.D</label>
                        
                        <input className='py-3 coninput' type="checkbox" value="H.O.D" onChange={handleHod} onMouseLeave={handlePost}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>qualification</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={qualification}  onChange={(e) => setQualification(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>biography</label>
                        <br/>
                        <input className='py-3 coninput' type="text" value={biography}  onChange={(e) => setBiography(e.target.value)}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>Mathematics</label>
                        
                        <input className='py-3 coninput' type="checkbox" name="gender" value="Mathematics" onChange={handleMaths} onMouseLeave={handleDepts}/>
                        <label className='pt-5 conln'>Science</label>
                        
                        <input className='py-3 coninput' type="checkbox" name="gender" value="Science" onChange={handleScience} onMouseLeave={handleDepts}/>
                        <label className='pt-5 conln'>English</label>
                        
                        <input className='py-3 coninput' type="checkbox" name="gender" value="English" onChange={handleEnglish} onMouseLeave={handleDepts}/>
                        <label className='pt-5 conln'>Technology</label>
                        
                        <input className='py-3 coninput' type="checkbox" name="gender" value="Technology" onChange={handleTech} onMouseLeave={handleDepts}/>
                    </div>
                    <div className='col-md-6'>
                        <label className='pt-5 conln'>image</label>
                        <br/>
                        <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='py-3 coninput' onChange={e=>handleChange(e)}/>
                        <img style={{width:"100px",height:"100px"}} src={image}/>
                    </div>
                    <button className='confobut pt-3 pb-2 mt-5' type='submit' >SEND</button>
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

export default AddTeacher