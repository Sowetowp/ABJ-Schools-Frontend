import React, { useEffect } from 'react'
import "../Styles/Passignment.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_session } from '../Redux/Actions/CalendarAction';
import { parent_get_attendance } from '../Redux/Actions/ParentAction';
import Preloader2 from './Preloader2'

const PAttendance = () => {
    const { param } = useParams();
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const parentGetAttendance = useSelector((state) => state.parentGetAttendance)
	const { attendance, loading } = parentGetAttendance
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    useEffect(() => {
        if(param && allsession){
            const tea = {
                term: allsession.term[allsession.term.length - 1]._id,
                student: param
            }
            dispatch(parent_get_attendance(tea))
        }
    }, [dispatch])
  return (
    <>
        {
        loading
        ?
        <Preloader2/>
        :
        <main className='container-fluid'>
            <h1 className='passh1'>Attendance</h1>
            <p className='passp1'>{attendance && attendance.length > 0 && attendance[0].student.firstName} / {attendance && attendance.length > 0 && attendance[0].term.tname} Term Attendance</p>
            {attendance && attendance.length > 0 && [...attendance].reverse().map((att)=>
                <div class={`alert alert-${att.presence === true ? "success" : "danger"} d-flex justify-content-between`} style={{alignItems:"center"}}>
                    <p className='m-0' style={{fontSize:"12px", fontWeight:"bolder"}}>{new Date(att.day).toDateString()}</p>
                    <p className='m-0'>
                        {
                            att.presence === true
                            ? 
                            <span class="badges green">Present</span>
                            :
                            <span class="badges red">Absent</span>
                        }
                    </p>
                </div>
            )}
        </main>}
    </>
  )
}

export default PAttendance