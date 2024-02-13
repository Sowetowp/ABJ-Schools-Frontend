import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-script-4.svg"
import del from "../Assets/Images/delete-svgrepo-com.svg"
import edit from "../Assets/Images/edit-pencil-write-editor-format-text-svgrepo-com.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'
import { post_result, teacher_get_results, teacher_get_students } from '../Redux/Actions/TeacherAction'
import { ADMIN_GET_RESULTS_RESET, GET_BROADSHEET_RESET, TEACHER_GET_RESULTS_RESET } from '../Redux/Types'
import { admin_get_results, delete_single_result, get_all_classes, get_all_subjects, get_broadsheet } from '../Redux/Actions/AdminAction'

const Broadsheet = () => {
    const dispatch = useDispatch()
    const getAllClasses = useSelector((state) => state.getAllClasses)
	const { classes } = getAllClasses
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const getBroadsheet = useSelector((state) => state.getBroadsheet)
    const { broadsheet } = getBroadsheet
    
    useEffect(() => {
        dispatch(get_all_session())
        dispatch(get_all_classes())
    }, [dispatch])
    const [eSession, setESession] = useState("")
    const [term, setTerm] = useState("")
    const [sesname, setSesname] = useState("")
    const [myArray, setMyArray] = useState([])
    const [_class, set_class] = useState('');
    const [sname, setSname] = useState('');
    const [tname, setTname] = useState(null);
    const [cname, setCname] = useState(null);
    
    useEffect(() => {
        if (_class) {
          const foundUser = classes.find(user => user._id === _class);
          if (foundUser) {
            setCname(foundUser.name);
          } else {
            setCname('');
          }
        }
    }, [_class, classes]);
    const handleSelectChangec = (e) => {
        set_class(e.target.value);
    };
    useEffect(() => {
        if (allsession && term) {
            const mt = allsession.term.filter(f=>f._id == term)
            setTname(mt[0].tname)
        }
    }, [allsession, term]);
    const filt = (e)=>{
        setMyArray(allsession.term.filter( f => f.session == e))
    }
    const filt2 = (e)=>{
        const sessionName = allsession.calendar.filter( f => f._id == e)
        setSesname(`${sessionName[0].from}/${sessionName[0].to}`)
    }
    const eshandleSelectChange = (e) => {
        setESession(e.target.value)
        filt(e.target.value)
        filt2(e.target.value)
    };
    const enhandleSelectChange = (e) => {
        setTerm(e.target.value);
    };
    const getClassHandler = (e) => {
        e.preventDefault()
        const id = {
            _class: _class,
            term: term
        }
        dispatch(get_broadsheet(id))
    }
    useEffect(() => {
        dispatch({type: GET_BROADSHEET_RESET})
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
                            <p className='mb-0 ms-2 swalfunp1'>View Results</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <p className='swalfunp2'>Results</p>
                                <div className='row'>
                                    <div className='col-md-6 my-2'>
                                        <select onChange={eshandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select Session</option>
                                            {allsession && allsession.calendar.map((as) =>
                                            <option value={as._id}>{as.from}/{as.to}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='col-md-6 my-2'>
                                        <select onChange={enhandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select Term</option>
                                            {myArray && myArray.length > 0 ? myArray.map((t)=><option value={t._id}>{t.tname}</option>) : <option>no registered term</option>}
                                        </select>
                                    </div>
                                    <div className='col-md-6 my-2'>
                                        <select onChange={handleSelectChangec} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Class</option>
                                            {classes && classes.map((e)=>
                                            <option value={e._id}>{e.name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-4 my-2 ms-auto'>
                                        <button onClick={getClassHandler} className='subbtn2'>Proceed</button>
                                    </div>
                                </div>
                                <div className='swalfunbs my-4'>
                                    <div className='d-flex swalfunaic'>
                                        <div className='swalfunsbbs'></div>
                                        <p className='mb-0 ms-2 swalfunp1'>{cname} {sname} Result for {sesname} {tname} Term</p>
                                    </div>
                                    {broadsheet &&
                                    <div className='shoiwtrsb22 p-3'>
                                        <div className="table-responsive shoiwtrsb">
                                            <table className="table table-hover table-striped border table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>NAME</th>
                                                    {broadsheet.subjects && broadsheet.subjects.map((gg)=><th>{gg.name}</th>)}
                                                    <th>SCORE</th>
                                                    <th>EXAM</th>
                                                    <th>TEACHER</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {broadsheet && broadsheet.students && broadsheet.students.map((student, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{student} {student} {student}</td>
                                                    <td>{student.subject.name}</td>
                                                    <td>{student.ca2}</td>
                                                    <td>{student.exam}</td>
                                                    <td>{student.created_by && student.created_by.firstName} {student.created_by && student.created_by.lastName}</td>
                                                    
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

export default Broadsheet