import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-script-4.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'
import { post_result, teacher_get_students } from '../Redux/Actions/TeacherAction'
import { TEACHER_GET_STUDENTS_RESET } from '../Redux/Types'

const UploadResult = () => {
    const dispatch = useDispatch()
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const teacherAuth = useSelector((state) => state.teacherAuth)
    const {teacherDetail} = teacherAuth
    const teacherGetStudents = useSelector((state) => state.teacherGetStudents)
    const {students} = teacherGetStudents
    const postResult = useSelector((state) => state.postResult)
    const {resultDetail} = postResult
    
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    useEffect(() => {
        dispatch({type: TEACHER_GET_STUDENTS_RESET})
    }, [])
    useEffect(() => {
        if(subject && _class){
            const id = {
                id: _class,
                term: termId,
                subject: subject
            }
            dispatch(teacher_get_students(id))
        }
    }, [resultDetail])
    const [subject, setSubject] = useState('');
    const [_class, set_class] = useState('');
    const [message, setMessage] = useState('');
    const [sname, setSname] = useState('');
    const [tname, setTname] = useState(null);
    const [cname, setCname] = useState(null);
    const [termId, setTermId] = useState(null)
    const handleSelectChange = (e) => {
        setSubject(e.target.value);
    };
    useEffect(() => {
        if (subject) {
          const foundUser = teacherDetail.subject.find(user => user._id === subject);
          if (foundUser) {
            setSname(foundUser.name);
          } else {
            setSname('User Not Found');
          }
        }
    }, [subject, teacherDetail]);
    useEffect(() => {
        if (_class) {
          const foundUser = teacherDetail.access.find(user => user._id === _class);
          if (foundUser) {
            setCname(foundUser.name);
          } else {
            setCname('');
          }
        }
    }, [_class, teacherDetail]);
    const handleSelectChangec = (e) => {
        set_class(e.target.value);
    };

    useEffect(() => {
        if (allsession) {
          const filteredTerm = allsession.term.filter(term => term.session === allsession.calendar[allsession.calendar.length - 1]._id);
          const newTname = filteredTerm[filteredTerm.length - 1]?.tname || null;
          const newTid = filteredTerm[filteredTerm.length - 1]?._id || null;
          setTermId(newTid)
          setTname(newTname);
        }
    }, [allsession]);

    const getClassHandler = (e) => {
        e.preventDefault()
        const id = {
            id: _class,
            term: termId,
            subject: subject
        }
        dispatch(teacher_get_students(id))
    }
    const [resultData, setResultData] = useState([])
    const isNumeric = (value) => !isNaN(value) && !isNaN(parseFloat(value));
    const handleResultChange = (studentId, propertyName, value) => {
        setMessage("")
        const teacherId = teacherDetail.id
        const numericValue = isNumeric(value) ? parseInt(value, 10) : null;
        const updatedResultData = resultData.map((result) =>
            result.student === studentId
            ? { ...result, [propertyName]: numericValue, term: termId, _class: _class, subject: subject, created_by: teacherId, student: studentId }
            : result
        );
        if (!resultData.some(result => result.student === studentId)) {
            updatedResultData.push({ [propertyName]: value, term: termId, _class: _class, subject: subject, created_by: teacherId, student: studentId })
        }
        setResultData(updatedResultData);
    };
    const submitResultHandler = (e) => {
        e.preventDefault()
        const filteredResultData = resultData.filter(item =>
            Object.values(item).every(value => value !== null && value !== "") && Object.values(item).length === 8
        );
          
        const id = {
            id: _class,
            term: termId,
            subject: subject
        }
        if (filteredResultData.length > 0){
            dispatch(post_result(filteredResultData))
            dispatch(teacher_get_students(id))
            setResultData([])
        }else{
            setMessage("input complete details for at least one student")
        }
    }
  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Results Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Results Management / Upload Results</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Upload {allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].from}/{allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].to} {tname} Term Results</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <p className='swalfunp2'>Results</p>
                                <div className='row'>
                                    <div className='col-md-4 my-2'>
                                        <select onChange={handleSelectChangec} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Class</option>
                                            {teacherDetail.access && teacherDetail.access.map((e)=>
                                            <option value={e._id}>{e.name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-4 my-2'>
                                        <select onChange={handleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Subject</option>
                                            {teacherDetail.subject && teacherDetail.subject.map((e)=>
                                            <option value={e._id}>{e.name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-4 my-2'>
                                        <button onClick={getClassHandler} className='subbtn2'>Proceed</button>
                                    </div>
                                </div>
                                <div className='swalfunbs my-4'>
                                    <div className='d-flex swalfunaic'>
                                        <div className='swalfunsbbs'></div>
                                        <p className='mb-0 ms-2 swalfunp1'>{cname} {sname} result for {allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].from}/{ allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].to} {tname} Term</p>
                                    </div>
                                    <i className='px-3' style={{color:"red",fontSize:"10px"}}>{message}</i>
                                    {students &&
                                    <div className='shoiwtrsb22 p-3'>
                                        <div className="table-responsive shoiwtrsb">
                                            <table className="table table-hover table-striped border table-bordered">
                                            <thead>
                                                <tr>
                                                <th>SN</th>
                                                <th>NAME</th>
                                                <th>CA1</th>
                                                <th>CA2</th>
                                                <th>EXAM</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {students && students.map((student, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{student.lastName} {student.firstName} {student.middlename}</td>
                                                    <td><input className='upreforminput border' type='number' onChange={(e) => handleResultChange(student._id, 'ca1', e.target.value)}/></td>
                                                    <td><input className='upreforminput border' type='number' onChange={(e) => handleResultChange(student._id, 'ca2', e.target.value)}/></td>
                                                    <td><input className='upreforminput border' onChange={(e) => handleResultChange(student._id, 'exam', e.target.value)}/></td>
                                                </tr>)}
                                            </tbody>
                                            </table>
                                        </div>
                                        <a style={{cursor:"pointer"}} onClick={submitResultHandler}><div className='shoviewall shogtfpajk px-2 py-1 mt-3'>Submit</div></a>
                                    </div>}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default UploadResult