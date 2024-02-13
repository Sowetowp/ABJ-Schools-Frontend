import React, { useEffect, useState } from 'react'
import "../Styles/Passignment.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_classteacher, post_attendance } from '../Redux/Actions/TeacherAction'
import "../Styles/Shome.css"
import attendance from '../Assets/Images/registration-counter-register-notes-registration-svgrepo-com.svg'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'

const Attendance = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    useEffect(() => {
        dispatch(get_classteacher(teacherDetail.id))
    }, [])
    const teacherAuth = useSelector((state) => state.teacherAuth)
    const {teacherDetail} = teacherAuth
    const getClassteacher = useSelector((state) => state.getClassteacher)
    const { myClasses , loading, day, classes } = getClassteacher
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    
    const [attendanceArray, setAttendanceArray] = useState([])
    const alerter = (e)=>{
        if(allsession && allsession.term.length > 0){
            const mapper = e.map((h)=>({
                class: h._class._id, 
                student: h._id, 
                day: new Date().toISOString(),
                term: allsession.term[allsession.term.length - 1]._id,
                presence: false
            }))
            const filterAttendance = attendanceArray.filter((k)=> k.class === e[0]._class._id)
            const mergedArray = [
                ...filterAttendance,
                ...mapper.filter(newObj => !filterAttendance.some(existingObj => existingObj.student === newObj.student))
            ];
            dispatch(post_attendance(mergedArray))
            dispatch(get_classteacher(teacherDetail.id))
        }
    }
    const handleSelectChanged = (e) => {
        const value = e.target.value;
        const valueToObject = JSON.parse(value)
        
        if (e.target.checked) {
            const updatedObject = {
                ...valueToObject,
                day: new Date().toISOString(),
                term: allsession.term[allsession.term.length - 1]._id,
                presence: true
            };
            setAttendanceArray((prevSelectedValues) => {
                const studentId = updatedObject.student;
                const index = prevSelectedValues.findIndex((obj) => obj.student === studentId);
              
                if (index !== -1) {
                  const newArray = [...prevSelectedValues];
                  newArray[index] = updatedObject;
                  return newArray;
                } else {
                  return [...prevSelectedValues, updatedObject];
                }
              });
        } else {
            const updatedObject = {
                ...valueToObject,
                day: new Date().toISOString(),
                term: allsession.term[allsession.term.length - 1]._id,
                presence: false
            };
            setAttendanceArray((prevSelectedValues) => {
                const studentId = updatedObject.student;
                const index = prevSelectedValues.findIndex((obj) => obj.student === studentId);
              
                if (index !== -1) {
                  const newArray = [...prevSelectedValues];
                  newArray[index] = updatedObject;
                  return newArray;
                } else {
                  return [...prevSelectedValues, updatedObject];
                }
            });
        }
    };
    
  return (
      <>
        {
        loading
        ?
        <Preloader2/>
        :
        <main className='container-fluid'>
            <h1 className='passh1'>Manage Class</h1>
            <img src={attendance} className='pt-2' style={{width:"30px"}}/>
            <p className='passp1'>Manage Class / Mark Attendance</p>
            <div id="accordion" className='mt-4'>
                {myClasses && day !== 0 && day !== 6 && myClasses.length > 0 && myClasses.map((clas, index)=>
                <div className="card mt-">
                    <div className="card-header border-0" data-bs-toggle="collapse" href={`#${clas.category}`}>
                        <a className="passcollapsebtn" style={{fontSize:"12px", fontWeight:"700", color:"rgb(15, 79, 163)"}}>
                            {clas.category}
                        </a>
                    </div>
                    <div id={clas.category} className={index === 0 ? "show collapse border-top" : "collapse border-top"} data-bs-parent="#accordion">
                    <div className="table-responsive shoiwtrsb">
                        <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Presence</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clas.data && clas.data.length > 0 && clas.data.map((dat, index)=>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{dat.lastName} {dat.firstName} {dat.middlename}</td>
                                <td>
                                    <div class="toggler">
                                        <input id={dat._id} name={dat._id} type="checkbox" value={JSON.stringify({class: dat._class._id,student: dat._id})} onChange={handleSelectChanged}/>
                                        <label for={dat._id}>
                                            <svg class="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                <polyline class="path check" points="100.2,40.2 51.5,88.8 29.8,67.5"></polyline>
                                            </svg>
                                            <svg class="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                <line class="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8"></line>
                                                <line class="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8"></line>
                                            </svg>
                                        </label>
                                    </div>
                                </td>
                            </tr>)}
                        </tbody>
                        </table>
                    <div className='m-2 ms-auto' style={{width:"100px"}}>
                        <button className='subbtn2' onClick={()=>alerter(clas.data)}>Submit</button>
                    </div>
                    </div>
                    </div>
                </div>)}
            </div>
        </main>
        }
    </>
  )
}

export default Attendance