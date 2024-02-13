import React, { useEffect, useState } from 'react'
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { POST_EVENT_RESET, POST_SESSION_RESET, POST_TERM_RESET } from '../Redux/Types'
import Preloader2 from './Preloader2'
import { create_event, create_session, create_term, get_all_session } from '../Redux/Actions/CalendarAction'

const CreateSession = () => {
    const [form, setForm] = useState(true)
    const [form1, setForm1] = useState(false)
    const [form2, setForm2] = useState(false)
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    const [from, setFrom] = useState(2023)
    const [to, setTo] = useState(2023)
    const [selectedValue, setSelectedValue] = useState('');
    const [tname, setName] = useState("")
    const [session, setSession] = useState("")
    const [esession, setESession] = useState("")
    const [term, setTerm] = useState("")
    const [myArray, setMyArray] = useState([])
    const [month, setMonth] = useState([])
    const [day, setDay] = useState(0)
    const [event, setEvent] = useState("")
    
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const mhandleSelectChange = (e) => {
        setMonth(e.target.value);
    };
    const filt = (e)=>{
        setMyArray(allsession.term.filter( f => f.session == e))
    }
    const shandleSelectChange = (e) => {
        setSession(e.target.value)
    };
    const eshandleSelectChange = (e) => {
        setESession(e.target.value)
        filt(e.target.value)
    };
    const nhandleSelectChange = (e) => {
        setName(e.target.value);
    };
    const enhandleSelectChange = (e) => {
        setTerm(e.target.value);
    };
    const postSession = useSelector((state) => state.postSession)
	const { loading } = postSession
    
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    
    const dispatch = useDispatch()
    
    const submitHandler = (e) => {
        e.preventDefault()
        const tea = {
            from,
            to
        }
        dispatch(create_session(tea))
    }
    const termSubmitHandler = (e) => {
        e.preventDefault()
        const tea = {
            session,
            tname
        }
        dispatch(create_term(tea))
    }
    const eventSubmitHandler = (e) => {
        e.preventDefault()
        const tea = {
            esession,
            term,
            month,
            day,
            event
        }
        dispatch(create_event(tea))
    }
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])

    useEffect (() => {
    return () => {
        dispatch({type: POST_SESSION_RESET})
        dispatch({type: POST_TERM_RESET})
        dispatch({type: POST_EVENT_RESET})
    }
    }, [dispatch])
    const hideForm = ()=>{
        dispatch(get_all_session())
        setForm(true)
        setForm1(false)
        setForm2(false)
    }
    const hideForm1 = ()=>{
        dispatch(get_all_session())
        setForm(false)
        setForm1(true)
        setForm2(false)
    }
    const hideForm2 = ()=>{
        dispatch(get_all_session())
        setForm(false)
        setForm1(false)
        setForm2(true)
    }
  return (
    <>
        {
        loading
        ?
        <Preloader2/>
        :
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Session Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Calendar / Session Management</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Post Session</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='swalfunlegend2 ms-4'>
                                    <div class="btn-group border btn-group-sm">
                                        <button type="button" class="btn btn-white border-end" onClick={hideForm}>Create Session</button>
                                        <button type="button" class="btn btn-white" onClick={hideForm1}>Create Term</button>
                                        <button type="button" class="btn btn-white border-start" onClick={hideForm2}>Create Event</button>
                                    </div>
                                </legend>
                                {form &&
                                <form onSubmit={submitHandler} className='ateafo2'>
                                    <h3 className='mt-5 '>Session Details</h3>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>From:</p>
                                            <input type='number' value={from} onChange={(e) => setFrom(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>To:</p>
                                            <input type='number' value={to} onChange={(e) => setTo(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                    </div>
                                    <button type='submit' className='subbtn3 mt-5 px-3'>Submit</button>
                                </form>
                                }
                                {form1 &&
                                <form onSubmit={termSubmitHandler} className='ateafo2'>
                                    <h3 className='mt-5 '>Term Details</h3>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Session</p>
                                            <select onChange={shandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                                <option>Select Session</option>
                                                {allsession && allsession.calendar.map((as) =>
                                                <option value={as._id}>{as.from}/{as.to}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Term</p>
                                            <select onChange={nhandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                                <option>Select Term</option>
                                                <option value={"First"}>First</option>
                                                <option value={"Second"}>Second</option>
                                                <option value={"Third"}>Third</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type='submit' className='subbtn3 mt-5 px-3'>Submit</button>
                                </form>
                                }
                                {form2 &&
                                <form onSubmit={eventSubmitHandler} className='ateafo2'>
                                    <h3 className='mt-5 '>Event Details</h3>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Session</p>
                                            <select onChange={eshandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                                <option>Select Session</option>
                                                {allsession && allsession.calendar.map((as) =>
                                                <option value={as._id}>{as.from}/{as.to}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Term</p>
                                            <select onChange={enhandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                                <option>Select Term</option>
                                                {myArray && myArray.length > 0 ? myArray.map((t)=><option value={t._id}>{t.tname}</option>) : <option>no registered term</option>}
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Month:</p>
                                            <select onChange={mhandleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                                <option>Select Month</option>
                                                {months.map((m)=>
                                                <option value={m}>{m}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Day:</p>
                                            <input type='number' value={day} onChange={(e) => setDay(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <p className='swalfunp2 mt-3'>Event:</p>
                                            <input type='text' value={event} onChange={(e) => setEvent(e.target.value)}  className='swalfunselact form-control form-select-sm'/>
                                        </div>
                                    </div>
                                    <button type='submit' className='subbtn3 mt-5 px-3'>Submit</button>
                                </form>
                                }
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </main>}
    </>
  )
}

export default CreateSession