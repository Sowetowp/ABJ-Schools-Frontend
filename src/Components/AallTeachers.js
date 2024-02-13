import React, { useCallback, useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import "../Styles/Thead.css"
import bank from "../Assets/Images/iconmonstr-school-30 (1).svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { admin_get_all_teachers, admin_search_teachers, delete_single_teacher } from '../Redux/Actions/AdminAction'
import del from "../Assets/Images/delete-svgrepo-com.svg"
import edit from "../Assets/Images/edit-pencil-write-editor-format-text-svgrepo-com.svg"
import { Link } from 'react-router-dom'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

const AallTeachers = () => {
    const [input, setInput] = useState("")
    const adminSearchTeachers = useSelector((state) => state.adminSearchTeachers)
	const { searched } = adminSearchTeachers
    const [results, setResults] = useState([])
    
    const handleChange = (value) => {
        setInput(value);
        dispatch(admin_search_teachers()).then(() => {
            if(searched){
                const result = searched.filter((teach) => {
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
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const adminGetAllTeachers = useSelector((state) => state.adminGetAllTeachers)
	const { loading, teachers } = adminGetAllTeachers
    const teacherDelete = useSelector((state) => state.teacherDelete)
	const { success } = teacherDelete
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(admin_get_all_teachers(1))
    }, [])
    const handleItemClick = (item) => {
        dispatch(admin_get_all_teachers(item))
    }

    const handlePrev = () => {
        if (teachers.currentPage > 1) {
          dispatch(admin_get_all_teachers(teachers.currentPage - 1));
        }
    };

    const handleNext = () => {
        if (teachers.currentPage !== teachers.totalPages) {
          dispatch(admin_get_all_teachers(teachers.currentPage + 1));
        }
    };
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dwgwcghfh'
        }
    })
    const deleteUserHandler = (e, id) => {
		e.preventDefault()
		dispatch(delete_single_teacher(id)) 
    }
    useEffect(() => {
        if(success){
            dispatch(admin_get_all_teachers(teachers && teachers.currentPage));
        }
    }, [success])
    

  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Teachers Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Teachers / All Teachers</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Teachers List</p>
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
                                    <h5>All Teachers</h5>
                                    <div className="table-responsive shoiwtrsb">
                                        <table className="table table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>middlename</th>
                                                <th>email</th>
                                                <th>phoneNumber</th>
                                                <th>status</th>
                                                <th>dob</th>
                                                <th>subject</th>
                                                <th>qualification</th>
                                                <th>biography</th>
                                                <th>post</th>
                                                <th>department</th>
                                                <th>image</th>
                                                <th>access</th>
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
                                                    <td>{teacher.phoneNumber}</td>
                                                    <td>{teacher.status}</td>
                                                    <td>{new Date(teacher.dob).toISOString().split('T')[0].replace(/-/g, ',')}</td>
                                                    <td>{teacher.subject ? teacher.subject.map((e)=>e.name).join(","):null}</td>
                                                    <td>{teacher.qualification}</td>
                                                    <td data-bs-toggle="tooltip" data-bs-placement="top" title={teacher.biography}>{teacher.biography?.length > 10 ? teacher.biography.slice(0, 10) : teacher.biography}</td>
                                                    <td>{teacher.post ? teacher.post.map((e)=>e.name).join(","):null}</td>
                                                    <td>{teacher.department ? teacher.department.map((e)=>e.name).join(","):null}</td>
                                                    <td>
                                                        {teacher.image && <AdvancedImage className='llll' cldImg={
                                                            (function () {
                                                                const myImage = cld.image(teacher.image);
                                                                myImage.resize(fill().gravity(focusOn(FocusOn.face())));
                                                                return myImage;
                                                            })()
                                                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                                    </td>
                                                    <td>{teacher.access ? teacher.access.map((e)=>e.name).join(",").replace(/ /g, ''):null}</td>
                                                    <td>{teacher.gender}</td>
                                                    <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                    <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                        <div className="modal" id="myModal">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Delete Teacher Details</h4>
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
                                            teachers && teachers.teachers.map((teacher, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{teacher.firstName}</td>
                                                <td>{teacher.lastName}</td>
                                                <td>{teacher.middlename}</td>
                                                <td>{teacher.email}</td>
                                                <td>{teacher.phoneNumber}</td>
                                                <td>{teacher.status}</td>
                                                <td>{new Date(teacher.dob).toISOString().split('T')[0].replace(/-/g, ',')}</td>
                                                <td>{teacher.subject ? teacher.subject.map((e)=>e.name).join(","):null}</td>
                                                <td>{teacher.qualification}</td>
                                                <td data-bs-toggle="tooltip" data-bs-placement="top" title={teacher.biography}>{teacher.biography?.length > 10 ? teacher.biography.slice(0, 10) : teacher.biography}</td>
                                                <td>{teacher.post ? teacher.post.map((e)=>e.name).join(","):null}</td>
                                                <td>{teacher.department ? teacher.department.map((e)=>e.name).join(","):null}</td>
                                                <td>
                                                    {teacher.image && <AdvancedImage style={{width:"18px",height:"18px"}} cldImg={
                                                        (function () {
                                                            const myImage = cld.image(teacher.image);
                                                            myImage.resize(fill().width(18).height(18).gravity(focusOn(FocusOn.face())));
                                                            return myImage;
                                                        })()
                                                    } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                                </td>
                                                <td>{teacher.access ? teacher.access.map((e)=>e.name).join(",").replace(/ /g, ''):null}</td>
                                                <td>{teacher.gender}</td>
                                                <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Delete Teacher Details</h4>
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
                                    {teachers && teachers.length > 0 && results.length < 1 && teachers.totalPages &&
                                    <div className=''>
                                        <ul className="pagination justify-content-center pagination-sm newpage py-5">
                                            <li className={`page-item ${teachers.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                                            {Array.from({ length: teachers && teachers.totalPages }, (_, index) => index + 1).map((item) => (
                                                <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                                            ))}
                                            <li className={`page-item ${teachers.currentPage === teachers.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
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

export default AallTeachers