import React, { useEffect, useState } from 'react'
import "../Styles/Calendar.css"
import NavBar from '../Components/NavBar'
import cal from "../Assets/Images/iconmonstr-calendar-4 (1).svg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../Components/Preloader'
import { get_all_session, get_main_calendar, get_ste } from '../Redux/Actions/CalendarAction'

const Calendar = () => {
    const dispatch = useDispatch()
    const [session, setSession] = useState('');
    const [sname, setSname] = useState("")
    const [fterm, setFterm] = useState([])
    const [sterm, setSterms] = useState([])
    const [tterms, setTterms] = useState([])
    const getMainCalendar = useSelector((state) => state.getMainCalendar)
	const { calendar } = getMainCalendar
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    useEffect(() => {
        dispatch(get_main_calendar())
        dispatch(get_all_session())
    }, [])
    useEffect(() => {
        if(allsession){
            setSession(allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1]._id)
        }
    }, [])
    useEffect(() => {
        if (calendar && session) {
            const filterSession = calendar.sessions.filter(e=> e.esession._id === session)
            if(filterSession.length > 0){
                setSname(`${filterSession[0].esession.from}/${filterSession[0].esession.to}`)
            }else{
                setSname("")
            }
            if(filterSession.length > 0){
                const filterSession1 = filterSession[0].terms.filter(e=> e.id.tname === "First")
                if(filterSession1.length > 0){
                    setFterm(filterSession1)
                }else{
                    setFterm([])
                }
            }else{
                setFterm([])
                setSterms([])
                setTterms([])
            }
            if(filterSession.length > 0){
                const filterSession2 = filterSession[0].terms.filter(e=> e.id.tname === "Second")
                if(filterSession2.length > 0){
                    setSterms(filterSession2)
                }else{
                    setSterms([])
                }
            }else{
                setFterm([])
                setSterms([])
                setTterms([])
            }
            if(filterSession.length > 0){
                const filterSession3 = filterSession[0].terms.filter(e=> e.id.tname === "Third")
                if(filterSession3.length > 0){
                    setTterms(filterSession3)
                }else{
                    setTterms([])
                }
            }else{
                setFterm([])
                setSterms([])
                setTterms([])
            }
        }
    }, [session, calendar, allsession]);
    const handleSelectChange = (e) => {
        setSession(e.target.value);
    };
    const monthsOrder = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
    const sortObjectsByMonth = (a, b) => {
        return monthsOrder.indexOf(a.month) - monthsOrder.indexOf(b.month);
    };
    
  return (
    <>
        {/* {loading
        ? 
        <Preloader/>
        : */}
        <div className='container-fluid px-0'>
            <div className='calehbg'>
                <div className='calehjk'>
                    <NavBar/>
                    <div className='text-center pb-5'>
                        <p className='calacal'>Academic Calendar</p>
                        <p className='cal2020'>{sname}</p>
                        <select className='form-control form-select select-white calselect' value={session} onChange={handleSelectChange}>
                            {/* {calendar && calendar.sessions.map(cal => 
                                <option className='text-dark' key={cal.esession._id} value={cal.esession._id}>{cal.esession.from} - {cal.esession.to}</option>
                            )} */}
                            {allsession && allsession.calendar.map(cal => 
                                <option className='text-dark' key={cal._id} value={cal._id}>{cal.from} - {cal.to}</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
                <p className='cale2018'>{sname}</p>
                <div className='caleshr my-3'></div>
                {tterms.length > 0 &&
                <div className='row'>
                    <p className='caledec'>{tterms[0].id.tname} Term</p>
                    {tterms[0].months.sort(sortObjectsByMonth).map(e=>
                    <div className='col-xl-3 col-6'>
                        <p className='mb-0' style={{fontWeight:"600"}}>{e.month}</p>
                        <div className='caleimgap py-2'>
                            {e.details.map(d=>
                            <div className='d-flex py-2'>
                            <img src={cal}/>
                            <p className='m-0 ps-2 calefdow'>{d.day}, {d.event}</p>
                            </div>)}
                        </div>
                    </div>)}
                </div>}
                {sterm.length > 0 &&
                <div className='row'>
                    <p className='caledec'>{sterm[0].id.tname} Term</p>
                    {sterm[0].months.sort(sortObjectsByMonth).map(e=>
                    <div className='col-xl-3 col-6'>
                        <p className='mb-0' style={{fontWeight:"600"}}>{e.month}</p>
                        <div className='caleimgap py-2'>
                            {e.details.map(d=>
                            <div className='d-flex py-2'>
                            <img src={cal}/>
                            <p className='m-0 ps-2 calefdow'>{d.day}, {d.event}</p>
                            </div>)}
                        </div>
                    </div>)}
                </div>}
                {fterm.length > 0 &&
                <div className='row'>
                    <p className='caledec'>{fterm[0].id.tname} Term</p>
                    {fterm[0].months.sort(sortObjectsByMonth).map(e=>
                    <div className='col-xl-3 col-6'>
                        <p className='mb-0' style={{fontWeight:"600"}}>{e.month}</p>
                        <div className='caleimgap py-2'>
                            {e.details.map(d=>
                            <div className='d-flex py-2'>
                            <img src={cal}/>
                            <p className='m-0 ps-2 calefdow'>{d.day}, {d.event}</p>
                            </div>)}
                        </div>
                    </div>)}
                </div>}
            </div>
            <Foot/>
        </div>
        {/* } */}
    </>
  )
}

export default Calendar