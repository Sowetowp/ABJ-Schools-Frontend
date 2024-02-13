import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-script-4.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import { student_get_results } from '../Redux/Actions/StudentAction'
import { STUDENT_GET_RESULTS_RESET } from '../Redux/Types'
import Preloader2 from './Preloader2'

const Result = () => {
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const studentAuth = useSelector((state) => state.studentAuth)
    const { studentDetail } = studentAuth
    const studentGetResults = useSelector((state) => state.studentGetResults)
    const { results, loading } = studentGetResults
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    useEffect(() => {
        dispatch({type: STUDENT_GET_RESULTS_RESET})
    }, [])
    const [term, setTerm] = useState('');
    const [tname2, setTname2] = useState('');
    const [session, setSession] = useState('');
    const [terms, setTerms] = useState([]);
    const [color, setColor] = useState("")
    const handleSelectChange = (e) => {
        setSession(e.target.value);
    };
    const handleSelectChanget = (e) => {
        setTerm(e.target.value);
    };
    useEffect(() => {
        if (allsession) {
            const filteredTerm = allsession.term.filter(item => item.session === session);
            setTerms(filteredTerm)
        }
    }, [session, allsession]);
    
    const getResultHandler = (e) => {
        e.preventDefault()
        if(studentDetail){
            const tea = {
                term,
                student: studentDetail.id
            }
            dispatch(student_get_results(tea))
        }
    }
  return (
    <>
    {loading
    ?
    <Preloader2/>
    :
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Results Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Results Management / Check Term Results</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Results</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <p className='swalfunp2'>Select Result to View:</p>
                                <div className='row'>
                                    <div className='col-md-4 my-2'>
                                        <select onChange={handleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Session</option>
                                            {allsession && allsession.calendar.map((e)=>
                                            <option value={e._id}>{e.from}/{e.to}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-4 my-2'>
                                        <select onChange={handleSelectChanget} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Term</option>
                                            {terms && terms.map((e)=>
                                            <option value={e._id}>{e.tname}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-4 my-2'>
                                        <button onClick={getResultHandler} className='subbtn2'>View Result</button>
                                    </div>
                                </div>
                                <div className='swalfunbs my-4'>
                                    <div className='d-flex swalfunaic'>
                                        <div className='swalfunsbbs'></div>
                                        <p className='mb-0 ms-2 swalfunp1'>{results && results.length > 0 && results[0].term.tname} Term</p>
                                    </div>
                                    <div className='shoiwtrsb22 p-3'>
                                        {results &&
                                        <div class="table-responsive shoiwtrsb">
                                            <table class="table table-hover table-striped border table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Subject</th>
                                                    <th>CA1</th>
                                                    <th>CA2</th>
                                                    <th>EXAM</th>
                                                    <th>TOTAL</th>
                                                    <th>GRADE</th>
                                                    <th>TEACHER</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {results.map((e, index)=>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{e.subject.name}</td>
                                                    <td>{e.ca1}</td>
                                                    <td>{e.ca2}</td>
                                                    <td>{e.exam}</td>
                                                    <td>{e.ca1 + e.ca2 + e.exam}</td>
                                                    <td style={{color:`${e.ca1 + e.ca2 + e.exam >= 70 ? "green" : e.ca1 + e.ca2 + e.exam >= 60 ? "orange" : e.ca1 + e.ca2 + e.exam >= 50 ? "black" : e.ca1 + e.ca2 + e.exam >= 45 ? "grey" : "red"}`}}>{e.ca1 + e.ca2 + e.exam >= 70 ? "A" : e.ca1 + e.ca2 + e.exam >= 60 ? "B" : e.ca1 + e.ca2 + e.exam >= 50 ? "C" : e.ca1 + e.ca2 + e.exam >= 45 ? "D" : "F"}</td>
                                                    <td>{e.created_by !== null && e.created_by.title} {e.created_by !== null && e.created_by.lastName}</td>
                                                </tr>)}
                                            </tbody>
                                            </table>
                                        </div>}
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </main>}
    </>
  )
}

export default Result