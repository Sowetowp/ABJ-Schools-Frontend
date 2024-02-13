import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-script-4.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'
import { post_result, teacher_get_results, teacher_get_students } from '../Redux/Actions/TeacherAction'
import { TEACHER_GET_RESULTS_RESET } from '../Redux/Types'

const TviewResults = () => {
    const dispatch = useDispatch()
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const teacherAuth = useSelector((state) => state.teacherAuth)
    const { teacherDetail } = teacherAuth
    const teacherGetResults = useSelector((state) => state.teacherGetResults)
    const { results } = teacherGetResults
    
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    
    const [subject, setSubject] = useState('');
    const [_class, set_class] = useState('');
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
            _class: _class,
            term: termId,
            subject: subject,
            created_by: teacherDetail.id
        }
        dispatch(teacher_get_results(id))
    }
    useEffect(() => {
        dispatch({type: TEACHER_GET_RESULTS_RESET})
    }, [])
  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Results Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Results Management / View Results</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>View {allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].from}/{allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].to} {tname} Term Results</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <p className='swalfunp2'>Results</p>
                                <div className='row'>
                                    <div className='col-md-4 my-2'>
                                        <select onChange={handleSelectChangec} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Class</option>
                                            {teacherDetail && teacherDetail.access && teacherDetail.access.map((e)=>
                                            <option value={e._id}>{e.name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-4 my-2'>
                                        <select onChange={handleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Subject</option>
                                            {teacherDetail && teacherDetail.subject && teacherDetail.subject.map((e)=>
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
                                    {results &&
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
                                                {results && results.map((student, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{student.student.lastName} {student.student.firstName} {student.student.middlename}</td>
                                                    <td>{student.ca1}</td>
                                                    <td>{student.ca2}</td>
                                                    <td>{student.exam}</td>
                                                </tr>)}
                                            </tbody>
                                            </table>
                                        </div>
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

export default TviewResults