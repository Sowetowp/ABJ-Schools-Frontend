import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import "../Styles/Thead.css"
import bank from "../Assets/Images/iconmonstr-school-24.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { admin_get_all_students, admin_get_all_teachers, admin_search_students, admin_search_teachers, delete_single_student } from '../Redux/Actions/AdminAction'
import del from "../Assets/Images/delete-svgrepo-com.svg"
import edit from "../Assets/Images/edit-pencil-write-editor-format-text-svgrepo-com.svg"
import { Link } from 'react-router-dom'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const StudentsList = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    const adminSearchStudents = useSelector((state) => state.adminSearchStudents)
	const { searched } = adminSearchStudents
    const [results, setResults] = useState([])
    const studentDelete = useSelector((state) => state.studentDelete)
	const { success } = studentDelete
    
    const handleChange = (value) => {
        setInput(value);
        dispatch(admin_search_students()).then(() => {
            if(searched){
                const result = searched.filter((teach) => {
                    return (
                        value &&
                        teach &&
                        (
                            (typeof teach.firstName === 'string' && teach.firstName.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.lastName === 'string' && teach.lastName.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.middlename === 'string' && teach.middlename.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.email === 'string' && teach.email.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.parentEmail === 'string' && teach.parentEmail.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.status === 'string' && teach.status.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.house === 'string' && teach.house.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach._class.name === 'string' && teach._class.name.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.stateOfOrigin === 'string' && teach.stateOfOrigin.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.gender === 'string' && teach.gender.toLowerCase().includes(value.toLowerCase()))
                        )
                    );
                });
                setResults(result);
            }
        });
    }
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const adminGetAllStudents = useSelector((state) => state.adminGetAllStudents)
	const { loading, students } = adminGetAllStudents
    useEffect(() => {
        dispatch(admin_get_all_students(1))
    }, [])
    const handleItemClick = (item) => {
        dispatch(admin_get_all_students(item))
    }

    const handlePrev = () => {
        if (students.currentPage > 1) {
          dispatch(admin_get_all_students(students.currentPage - 1));
        }
    };

    const handleNext = () => {
        if (students.currentPage !== students.totalPages) {
          dispatch(admin_get_all_students(students.currentPage + 1));
        }
    };
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dwgwcghfh'
        }
    })
    const deleteUserHandler = (e, id) => {
		e.preventDefault()
		dispatch(delete_single_student(id)) 
    }
    useEffect(() => {
        if(success){
            dispatch(admin_get_all_students(students && students.currentPage));
        }
    }, [success])

  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Students Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Students / All Students</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Students List</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank}/></legend>
                                <form className=''>
                                    <input type='search' className='swalfunselact form-control form-select-sm' placeholder='Type any keyword and enter to search' value={input} onChange={(e)=> handleChange(e.target.value)}/>
                                    {/* <button className='subbtn3 mt-3 px-3'>Search</button> */}
                                </form>
                                {/* <div className='container px-0 pt-3 thsic'>
                                    {results.map((res, id)=>
                                        <Link style={{textDecoration:"none" , color:"initial"}} >
                                            <div className='py-2 px-3 thsearchdis' key={id}>{res.firstName} {res.lastName}</div>
                                        </Link>
                                    )}
                                </div> */}
                                <div className='shoiwtrsb2 p-3 my-5'>
                                    <h5>All Students</h5>
                                    <div className="table-responsive shoiwtrsb">
                                        <table className="table table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>middlename</th>
                                                <th>email</th>
                                                <th>parentEmail</th>
                                                <th>status</th>
                                                <th>dob</th>
                                                <th>parentPhoneNumber</th>
                                                <th>class</th>
                                                <th>house</th>
                                                <th>stateOfOrigin</th>
                                                <th>post</th>
                                                <th>image</th>
                                                <th>gender</th>
                                                <th>edit</th>
                                                <th>delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            results.length > 0
                                            ?
                                            results && results.map((teacher, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{teacher.firstName}</td>
                                                    <td>{teacher.lastName}</td>
                                                    <td>{teacher.middlename}</td>
                                                    <td>{teacher.email}</td>
                                                    <td>{teacher.parentEmail}</td>
                                                    <td>{teacher.status}</td>
                                                    <td>{new Date(teacher.dob).toISOString().split('T')[0].replace(/-/g, ',')}</td>
                                                    <td>{teacher.parentPhoneNumber}</td>
                                                    <td>{teacher._class.name}</td>
                                                    <td>{teacher.house}</td>
                                                    <td>{teacher.stateOfOrigin}</td>
                                                    <td>{teacher.post.name}</td>
                                                    <td>
                                                        {teacher.image && <AdvancedImage cldImg={
                                                            (function () {
                                                                const myImage = cld.image(teacher.image);
                                                                myImage.resize(fill().width(18).height(18).gravity(focusOn(FocusOn.face())));
                                                                return myImage;
                                                            })()
                                                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                                    </td>
                                                    <td>{teacher.gender}</td>
                                                    <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                    <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                        <div className="modal" id="myModal">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Delete Student Details</h4>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>
                                                                    <div className="modal-body me-auto">
                                                                        Do you want to delete {teacher.lastName}'s Details?
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                                                        <button type="button" className="btn btn-danger" onClick={(e) => deleteUserHandler(e, teacher._id)} data-bs-dismiss="modal">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></td>
                                                </tr>)
                                            :
                                            students && students.students.map((teacher, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{teacher.firstName}</td>
                                                <td>{teacher.lastName}</td>
                                                <td>{teacher.middlename}</td>
                                                <td>{teacher.email}</td>
                                                <td>{teacher.parentEmail}</td>
                                                <td>{teacher.status}</td>
                                                <td>{new Date(teacher.dob).toISOString().split('T')[0].replace(/-/g, ',')}</td>
                                                <td>{teacher.parentPhoneNumber}</td>
                                                <td>{teacher._class.name}</td>
                                                <td>{teacher.house}</td>
                                                <td>{teacher.stateOfOrigin}</td>
                                                <td>{teacher.post.name}</td>
                                                <td>
                                                    {teacher.image && <AdvancedImage cldImg={
                                                        (function () {
                                                            const myImage = cld.image(teacher.image);
                                                            myImage.resize(fill().width(18).height(18).gravity(focusOn(FocusOn.face())));
                                                            return myImage;
                                                        })()
                                                    } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                                </td>
                                                <td>{teacher.gender}</td>
                                                <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Delete Student Details</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body me-auto">
                                                                    Do you want to delete {teacher.lastName}'s Details?
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                                                    <button type="button" className="btn btn-danger" onClick={(e) => deleteUserHandler(e, teacher._id)} data-bs-dismiss="modal">Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></td>
                                            </tr>)}
                                        </tbody>
                                        </table>
                                    </div>
                                    {students && results.length < 1 && students.totalPages &&
                                    <div className=''>
                                        <ul className="pagination justify-content-center pagination-sm newpage py-5">
                                            <li className={`page-item ${students.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                                            {Array.from({ length: students && students.totalPages }, (_, index) => index + 1).map((item) => (
                                                <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                                            ))}
                                            <li className={`page-item ${students.currentPage === students.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
                                        </ul>
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

export default StudentsList