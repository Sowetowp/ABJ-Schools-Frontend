import React, { useEffect, useState } from 'react'
import "../Styles/Thead.css"
import NavBar from './NavBar'
import se from "../Assets/Images/iconmonstr-search-thin (1).svg"
import { useDispatch, useSelector } from 'react-redux'
import { search_teachers } from '../Redux/Actions/TeacherAction'
import { Link } from 'react-router-dom'
const TeacherHead = () => {
    const [input, setInput] = useState("")
    const searchTeachers = useSelector((state) => state.searchTeachers)
	const { loading, teachers } = searchTeachers
    const [results, setResults] = useState([])
    const dispatch = useDispatch()
    
    const handleChange = (value) => {
        setInput(value);
        dispatch(search_teachers()).then(() => {
            if(teachers){
                const result = teachers.filter((teach) => {
                    return (
                        value &&
                        teach &&
                        (
                            (typeof teach.firstName === 'string' && teach.firstName.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.lastName === 'string' && teach.lastName.toLowerCase().includes(value.toLowerCase())) ||
                            (Array.isArray(teach.department) && teach.department.some(dep => dep.toLowerCase().includes(value.toLowerCase()))) ||
                            (Array.isArray(teach.subject) && teach.subject.some(sub => sub.toLowerCase().includes(value.toLowerCase()))) ||
                            (Array.isArray(teach.post) && teach.post.some(p => p.toLowerCase().includes(value.toLowerCase())))
                        )
                    );
                });
                setResults(result);
            }
        });
    }
      
  return (
    <>
        <main className='container-fluid px-0'>
            <div className='theadbgi'>
                <div className='theadjk'>
                    <NavBar/>
                    <p className='theadopt'>Our Passionate Teachers</p>
                </div>
            </div>
            <div className='container-fluid px-5 thsai d-flex'>
                <img src={se} className='p-4'/>
                <input placeholder='Type any keyword and enter to search' className='thein' value={input} onChange={(e)=> handleChange(e.target.value)}/>
            </div>
            <div className='container px-0 pt-3 thsic'>
                {results.map((res, id)=>
                    <Link style={{textDecoration:"none" , color:"initial"}} to={`/teacher/${res._id}`}>
                        <div className='py-2 px-3 thsearchdis' key={id}>{res.firstName} {res.lastName}</div>
                    </Link>
                )}
            </div>
        </main>
    </>
  )
}

export default TeacherHead