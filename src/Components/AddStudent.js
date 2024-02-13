import React, { useEffect, useState } from 'react'
import bank from "../Assets/Images/iconmonstr-school-24.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_classes, get_all_departments, get_all_posts, get_all_subjects, student_register } from '../Redux/Actions/AdminAction'
import { STUDENT_SIGN_UP_RESET, TEACHER_SIGN_UP_RESET } from '../Redux/Types'
import { teacher_register } from '../Redux/Actions/TeacherAction'
import Preloader2 from './Preloader2'

const AddStudent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordx2, setPasswordx2] = useState('');
    const [status, setStatus] = useState('');
    const [dob, setDob] = useState('');
    const [post, setPost] = useState("");
    const [gender, setGender] = useState('');
    const [parentEmail, setParentEmail] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState("")
    const [file, setFile] = useState("")
    const [parentPhoneNumber, setParentPhoneNumber] = useState('');
    const [house, setHouse] = useState('');
    const [_class, set_class] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const nigerianStates = [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
    ];
    const getAllPosts = useSelector((state) => state.getAllPosts)
    const { posts } = getAllPosts
    const getAllClasses = useSelector((state) => state.getAllClasses)
    const { classes } = getAllClasses
    const studentRegister = useSelector((state) => state.studentRegister)
    const { loading } = studentRegister

    useEffect(() => {
        dispatch(get_all_posts())
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
    const handleHouseChange = (event) => {
        setHouse(event.target.value);
    };
    const handleClassChange = (event) => {
        set_class(event.target.value);
    };
    const handlePostChange = (event) => {
        setPost(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        const tea = {
            firstName,
            lastName,
            middlename,
            email,
            parentEmail,
            password,
            parentPhoneNumber,
            status,
            image,
            dob,
            house,
            _class,
            post,
            stateOfOrigin,
            gender,
            address
        }
        if (password === passwordx2) {
            dispatch(student_register(tea))
            setMessage("")
        } else {
            setMessage('Passwords do not match')
        }
    }

    useEffect(() => {
        return () => {
            dispatch({ type: STUDENT_SIGN_UP_RESET })
        }
    }, [dispatch])

    return (
        <>
            {loading
                ?
                <Preloader2 />
                :
                <main className='container-fluid shomain'>
                    <p className='shopsash2 mb-0'>Students Management</p>
                    <p className='swafundpayacc mt-2 mb-0'>Students / Add Student</p>
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <div className='swalfunbs'>
                                <div className='d-flex swalfunaic'>
                                    <div className='swalfunsbbs'></div>
                                    <p className='mb-0 ms-2 swalfunp1'>Register Students</p>
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
                                                    <p className='swalfunp2 mt-3'>D.O.B:</p>
                                                    <input type='date' value={dob} onChange={(e) => setDob(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>State Of Origin:</p>
                                                    <select onChange={(e) => setStateOfOrigin(e.target.value)} className='swalfunselact form-select form-control form-select-sm'>
                                                        <option>Select Month</option>
                                                        {nigerianStates.map((m) =>
                                                            <option value={m}>{m}</option>
                                                        )}
                                                    </select>
                                                    {/* <input type='text' value={stateOfOrigin} onChange={(e) => setStateOfOrigin(e.target.value)} className='swalfunselact form-control form-select-sm'/> */}
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
                                                        <option value="dismissed">Dismissed</option>
                                                        <option value="graduate">Graduate</option>
                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>House:</p>
                                                    <select
                                                        className='swalfunselact form-control form-select-sm'
                                                        value={house}
                                                        onChange={handleHouseChange}
                                                    >
                                                        <option value="">--House--</option>
                                                        <option value="dornier">Yellow</option>
                                                        <option value="alpha">Green</option>
                                                        <option value="jaguar">Blue</option>
                                                        <option value="hercules">Red</option>
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
                                                    <p className='swalfunp2 mt-3'>Post:</p>
                                                    <select
                                                        className='swalfunselact form-control form-select-sm'
                                                        value={post}
                                                        onChange={handlePostChange}
                                                    >
                                                        <option value="">--post--</option>
                                                        {posts && posts.students.map(sub =>
                                                            <option value={sub._id}>{sub.name}</option>)}
                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Class:</p>
                                                    <select
                                                        className='swalfunselact form-control form-select-sm'
                                                        value={_class}
                                                        onChange={handleClassChange}
                                                    >
                                                        <option value="">--class--</option>
                                                        {classes && classes.map(sub =>
                                                            <option value={sub._id}>{sub.name}</option>)}
                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Image:</p>
                                                    <input type="file" required accept='image/png, image/jpeg, image/jpg, image/jfif' className='swalfunselact form-control form-select-sm' onChange={e => handleChange(e)} />
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
                                                    <p className='swalfunp2 mt-3'>StudentID:</p>
                                                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='swalfunselact form-control form-select-sm' />
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
                                                    <p className='swalfunp2 mt-3'>Parent's Phone Number:</p>
                                                    <input type='text' value={parentPhoneNumber} onChange={(e) => setParentPhoneNumber(e.target.value)} className='swalfunselact form-control form-select-sm' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Parent's Email:</p>
                                                    <input type='email' value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} className='swalfunselact form-control form-select-sm' />
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

export default AddStudent