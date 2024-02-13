import React, { useEffect } from 'react'
import "../Styles/Ahome.css"
import home from "../Assets/Images/home-17-svgrepo-com.svg"
import student from "../Assets/Images/img1.png"
import "../Styles/Shome.css"
import teacher from "../Assets/Images/img3.png"
import subject from "../Assets/Images/img2.png"
import { useDispatch, useSelector } from 'react-redux'
import { get_all } from '../Redux/Actions/AdminAction'

const AdminHome = () => {
    const getAll = useSelector((state) => state.getAll)
	const { all } = getAll
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_all())
    },[])
    
  return (
    <>
        <main className='container-fluid shomain'>
        <p className='shopsash mb-0'>Dashboard</p>
        <img src={home} className='mt-2' style={{width:"30px"}}/>
        <div className='row'>
            <div className='col-md-4 my-3'>
                <div className='adhoatbox p-4'>
                    <img src={student}/>
                    <h5>Total Students</h5>
                    <h3>{all && all.students}</h3>
                    {/* <p className='mb-0'>10% Higher Than Last Month</p> */}
                </div>
            </div>
            <div className='col-md-4 my-3'>
                <div className='adhoatbox p-4'>
                    <img src={teacher}/>
                    <h5>Total Teachers</h5>
                    <h3>{all && all.teachers}</h3>
                    {/* <p className='mb-0'>10% Higher Than Last Month</p> */}
                </div>
            </div>
            <div className='col-md-4 my-3'>
                <div className='adhoatbox p-4'>
                    <img src={subject}/>
                    <h5>Total Subjects</h5>
                    <h3>{all && all.subjects}</h3>
                    {/* <p className='mb-0'>10% Higher Than Last Month</p> */}
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default AdminHome