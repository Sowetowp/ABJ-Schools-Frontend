import React, { useEffect, useState } from 'react'
import bank from "../Assets/Images/iconmonstr-school-30 (1).svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_classes, get_all_departments, get_all_posts, get_all_subjects } from '../Redux/Actions/AdminAction'
import { TEACHER_SIGN_UP_RESET } from '../Redux/Types'
import { teacher_register } from '../Redux/Actions/TeacherAction'
import Preloader2 from './Preloader2'

const AddTeacher = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordx2, setPasswordx2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');
    const [dob, setDob] = useState('');
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState([]);
    const [qualification, setQualification] = useState('');
    const [biography, setBiography] = useState('');
    const [post, setPost] = useState([]);
    const [department, setDepartment] = useState([]);
    const [access, setAccess] = useState([]);
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const getAllSubjects = useSelector((state) => state.getAllSubjects)
    const { subjects } = getAllSubjects
    const getAllPosts = useSelector((state) => state.getAllPosts)
    const { posts } = getAllPosts
    const getAllClasses = useSelector((state) => state.getAllClasses)
    const { classes } = getAllClasses
    const getAllDepartments = useSelector((state) => state.getAllDepartments)
    const { departments } = getAllDepartments
    const teacherRegister = useSelector((state) => state.teacherRegister)
    const { loading } = teacherRegister

    useEffect(() => {
        dispatch(get_all_subjects())
        dispatch(get_all_posts())
        dispatch(get_all_departments())
        dispatch(get_all_classes())
    }, [])
    function previewFiles(file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImage(reader.result)
        }
    }
    const handleChange = (e) => {
        const file = e.target.files[0]
        setFile(file)
        previewFiles(file)
    }
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSelectChangec = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            const sub = access.find((ee)=> ee === value)
            if(!sub){
                setAccess((prevSelectedValues) => [...prevSelectedValues, value]);
            }
        } else {
            setAccess((prevSelectedValues) =>
                prevSelectedValues.filter((item) => item !== value)
            );
        }
    };
    const handleSelectChanged = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            const sub = department.find((ee)=> ee === value)
            if(!sub){
                setDepartment((prevSelectedValues) => [...prevSelectedValues, value]);
            }
        } else {
            setDepartment((prevSelectedValues) =>
                prevSelectedValues.filter((item) => item !== value)
            );
        }
    };
    const handleSelectChangep = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            const sub = post.find((ee)=> ee === value)
            if(!sub){
                setPost((prevSelectedValues) => [...prevSelectedValues, value]);
            }
        } else {
            setPost((prevSelectedValues) =>
                prevSelectedValues.filter((item) => item !== value)
            );
        }
    };
    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            const sub = subject.find((ee)=> ee === value)
            if(!sub){
                setSubject((prevSelectedValues) => [...prevSelectedValues, value]);
            }
        } else {
            setSubject((prevSelectedValues) =>
                prevSelectedValues.filter((item) => item !== value)
            );
        }
    };

    const submitHandler = (e) => {
        e.preventDefault()

        const tea = {
            firstName,
            lastName,
            middlename,
            email,
            password,
            phoneNumber,
            status,
            dob,
            title,
            subject,
            qualification,
            biography,
            post,
            department,
            image,
            access,
            gender,
            address
        }
        if (password === passwordx2) {
            dispatch(teacher_register(tea))
            setMessage("")
        } else {
            setMessage('Passwords do not match')
        }
    }

    useEffect(() => {
        return () => {
            dispatch({ type: TEACHER_SIGN_UP_RESET })
        }
    }, [dispatch])

    return (
        <>
            {loading
                ?
                <Preloader2 />
                :
                <main className='container-fluid shomain'>
                    <p className='shopsash2 mb-0'>Teachers Management</p>
                    <p className='swafundpayacc mt-2 mb-0'>Teachers / Add Teacher</p>
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <div className='swalfunbs'>
                                <div className='d-flex swalfunaic'>
                                    <div className='swalfunsbbs'></div>
                                    <p className='mb-0 ms-2 swalfunp1'>Register Teachers</p>
                                </div>
                                <div className='p-3'>
                                    <fieldset className='border swalfunfs px-3 pb-3'>
                                        <legend className='border swalfunlegend ms-4'><img src={bank} /></legend>
                                        <form onSubmit={submitHandler} className='ateafo2'>
                                            <h3 className='mt-5 '>Basic Details</h3>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>First Name:</p>
                                                    <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Last Name:</p>
                                                    <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Middle Name:</p>
                                                    <input type='text' value={middlename} onChange={(e) => setMiddlename(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Title:</p>
                                                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Qualification:</p>
                                                    <input type='text' value={qualification} onChange={(e) => setQualification(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>D.O.B:</p>
                                                    <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Status:</p>
                                                    <select
                                                        className='swalfunselact form-control form-select-sm'
                                                        value={status}
                                                        onChange={handleStatusChange}
                                                    >
                                                        <option value="">--Status--</option>
                                                        <option value="active">Active</option>
                                                        <option value="retired">Retired</option>
                                                        <option value="sacked">Sacked</option>
                                                    </select>
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
                                                    <p className='swalfunp2 mt-3'>Department:</p>
                                                    <span className='swalfunselact form-control form-select-sm' data-bs-toggle="collapse" data-bs-target="#demo2d">
                                                        Select Department(s):
                                                    </span>
                                                    <div id="demo2d" className="collapse">
                                                        {departments && departments.map(sub =>
                                                            <div className='px-2'>
                                                                <label className='' style={{ fontWeight: "lighter", fontSize: "12px" }}>
                                                                    <input onChange={handleSelectChanged} value={sub._id} className='my-1' type='checkbox' /> {sub.name}
                                                                </label>
                                                                <br />
                                                            </div>)}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Subject:</p>
                                                    <span className='swalfunselact form-control form-select-sm' data-bs-toggle="collapse" data-bs-target="#demo2s">
                                                        Select subject(s):
                                                    </span>
                                                    <div id="demo2s" className="collapse">
                                                        {subjects && subjects.map(sub =>
                                                            <div className='px-2'>
                                                                <label className='' style={{ fontWeight: "lighter", fontSize: "12px" }}>
                                                                    <input onChange={handleSelectChange} value={sub._id} className='my-1' type='checkbox' /> {sub.name}
                                                                </label>
                                                                <br />
                                                            </div>)}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Post:</p>
                                                    <span className='swalfunselact form-control form-select-sm' data-bs-toggle="collapse" data-bs-target="#demo2p">
                                                        Select Post(s):
                                                    </span>
                                                    <div id="demo2p" className="collapse">
                                                        {posts && posts.teachers.map(sub =>
                                                            <div className='px-2'>
                                                                <label className='' style={{ fontWeight: "lighter", fontSize: "12px" }}>
                                                                    <input onChange={handleSelectChangep} value={sub._id} className='my-1' type='checkbox' /> {sub.name}
                                                                </label>
                                                                <br />
                                                            </div>)}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Access:</p>
                                                    <span className='swalfunselact form-control form-select-sm' data-bs-toggle="collapse" data-bs-target="#demo2c">
                                                        Select Accessible Classes:
                                                    </span>
                                                    <div id="demo2c" className="collapse">
                                                        {classes && classes.map(sub =>
                                                            <div className='px-2'>
                                                                <label className='' style={{ fontWeight: "lighter", fontSize: "12px" }}>
                                                                    <input onChange={handleSelectChangec} value={sub._id} className='my-1' type='checkbox' /> {sub.name}
                                                                </label>
                                                                <br />
                                                            </div>)}
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Image:</p>
                                                    <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='swalfunselact form-control form-select-sm' onChange={e => handleChange(e)} />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Biography:</p>
                                                    <textarea type='text' value={biography} onChange={(e) => setBiography(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                {image &&
                                                    <div className='col-md-6'>
                                                        <img className='mt-5' style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={image} />
                                                    </div>}
                                            </div>
                                            <h3 className='mt-5'>Login Details</h3>
                                            <i style={{ color: "red", fontSize: "10px" }}>{message}</i>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Email:</p>
                                                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Password:</p>
                                                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Re-type Password:</p>
                                                    <input type='password' value={passwordx2} onChange={(e) => setPasswordx2(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                            </div>
                                            <h3 className='mt-5'>Contact</h3>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Address:</p>
                                                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Phone Number:</p>
                                                    <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                            </div>
                                            <button type='submit' className='subbtn3 mt-5 px-3'>Submit</button>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default AddTeacher