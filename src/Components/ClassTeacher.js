import React, { useEffect, useState } from 'react'
import bank from "../Assets/Images/iconmonstr-school-30 (1).svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_classes, get_all_departments, get_all_posts, get_all_subjects, update_class } from '../Redux/Actions/AdminAction'
import { TEACHER_SIGN_UP_RESET } from '../Redux/Types'
import { teacher_register } from '../Redux/Actions/TeacherAction'
import Preloader2 from './Preloader2'

const ClassTeacher = () => {
    const dispatch = useDispatch()

    const [_class, set_class] = useState("");
    const [_classn, set_classn] = useState("");
    const [teacher, setTeacher] = useState('');
    const getAllClasses = useSelector((state) => state.getAllClasses)
    const { classes, loading, teachers } = getAllClasses

    useEffect(() => {
        dispatch(get_all_classes())
    }, [])
    const handleSelectChangec = (e) => {
        const value = e.target.value;
        const valueToObject = JSON.parse(value)
        set_class(valueToObject.id);
        set_classn(valueToObject.name)
    };
    const handleSelectChanget = (e) => {
        setTeacher(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault()

        const tea = {
            _class,
            classTeacher: teacher
        }
        console.log(tea)
        dispatch(update_class(tea))
    }

    return (
        <>
            {loading
                ?
                <Preloader2 />
                :
                <main className='container-fluid shomain'>
                    <p className='shopsash2 mb-0'>Teachers Management</p>
                    <p className='swafundpayacc mt-2 mb-0'>Teachers / Set Classteacher</p>
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <div className='swalfunbs'>
                                <div className='d-flex swalfunaic'>
                                    <div className='swalfunsbbs'></div>
                                    <p className='mb-0 ms-2 swalfunp1'>Class Teacher</p>
                                </div>
                                <div className='p-3'>
                                    <fieldset className='border swalfunfs px-3 pb-3'>
                                        <legend className='border swalfunlegend ms-4'><img src={bank} /></legend>
                                        <form onSubmit={submitHandler} className='ateafo2'>
                                            <h3 className='mt-5'>{_classn}</h3>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Class:</p>
                                                    <select onChange={(e)=> handleSelectChangec(e)} className='swalfunselact form-select form-control form-select-sm'>
                                                        <option>Select  Class</option>
                                                        {classes && classes.map((e) =>
                                                            <option value={JSON.stringify({id: e._id, name: e.name})}>{e.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <p className='swalfunp2 mt-3'>Teacher:</p>
                                                    <select onChange={handleSelectChanget} className='swalfunselact form-select form-control form-select-sm'>
                                                        <option>Select  Teacher</option>
                                                        {teachers && teachers.map((e) =>
                                                            <option value={e._id}>{e.firstName}</option>)
                                                        }
                                                    </select>
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

export default ClassTeacher