import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import "../Styles/Thead.css"
import bank from "../Assets/Images/calendar-svgrepo-com (1).svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { admin_search_images, admin_search_news, delete_single_event, delete_single_session, delete_single_term } from '../Redux/Actions/AdminAction'
import del from "../Assets/Images/delete-svgrepo-com.svg"
import edit from "../Assets/Images/edit-pencil-write-editor-format-text-svgrepo-com.svg"
import { Link } from 'react-router-dom'
import { get_all_news } from '../Redux/Actions/NewsAction'
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import { get_all_images } from '../Redux/Actions/GalleryAction'
import { get_ste, search_calendar } from '../Redux/Actions/CalendarAction'
import { italic } from '@cloudinary/url-gen/qualifiers/fontStyle'

const ViewCalendar = () => {
    const getSTE = useSelector((state) => state.getSTE)
	const { ste } = getSTE
    
    const [input, setInput] = useState("")
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    
    const searchCalendar = useSelector((state) => state.searchCalendar)
	const { searched } = searchCalendar
    const [results, setResults] = useState([])
    const [results1, setResults1] = useState([])
    const [results2, setResults2] = useState([])
    
    const handleChange = (value) => {
        setInput(value);
        dispatch(search_calendar()).then(() => {
            if(searched){
                const result = searched.session.filter((teach) => {
                    return (
                        value &&
                        teach &&
                        (
                            (teach.from !== undefined && teach.from === +value)||
                            (teach.to !== undefined && teach.to === +value)
                        )
                    );
                });
                setResults(result);
            }
        });
    }

    const handleChange1 = (value) => {
        setInput1(value);
        dispatch(search_calendar()).then(() => {
            if(searched){
                const result = searched.term.filter((teach) => {
                    return (
                        value &&
                        teach &&
                        (
                            (teach.session.from !== undefined && teach.session.from === +value)||
                            (teach.session.to !== undefined && teach.session.to === +value)||
                            (typeof teach.tname === 'string' && teach.tname.toLowerCase().includes(value.toLowerCase()))
                        )
                    );
                });
                setResults1(result);
            }
        });
    }

    const handleChange2 = (value) => {
        setInput2(value);
        dispatch(search_calendar()).then(() => {
            if(searched){
                const result = searched.event.filter((teach) => {
                    return (
                        value &&
                        teach &&
                        (
                            (teach.esession.from !== undefined && teach.esession.from === +value)||
                            (teach.esession.to !== undefined && teach.esession.to === +value)||
                            (typeof teach.month === 'string' && teach.month.toLowerCase().includes(value.toLowerCase())) ||
                            (typeof teach.event === 'string' && teach.event.toLowerCase().includes(value.toLowerCase())) ||
                            (teach.day !== undefined && teach.day === +value)||
                            (typeof teach.term.tname === 'string' && teach.term.tname.toLowerCase().includes(value.toLowerCase()))
                        )
                    );
                });
                setResults2(result);
            }
        });
    }

    const dispatch = useDispatch()
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dwgwcghfh'
        }
    })

    useEffect(() => {
        const page = {
            page: "1",
            page1: "1",
            page2: "1",
        }
        dispatch(get_ste(page))
    }, [dispatch])

    const handleItemClick = (item) => {
        const page = {
            page: item,
            page1: "1",
            page2: "1",
        }
        dispatch(get_ste(page))
    }

    const handleItemClick1 = (item) => {
        const page = {
            page1: item,
            page: "1",
            page2: "1",
        }
        dispatch(get_ste(page))
    }

    const handleItemClick2 = (item) => {
        const page = {
            page2: item,
            page1: "1",
            page: "1",
        }
        dispatch(get_ste(page))
    }

    const handlePrev = () => {
        const page = {
            page1: "1",
            page: ste.currentPage - 1,
            page2: "1",
        }
        if (ste.currentPage > 1) {
          dispatch(get_ste(page));
        }
    };

    const handleNext = () => {
        const page = {
            page1: "1",
            page: ste.currentPage + 1,
            page2: "1",
        }
        if (ste.currentPage !== ste.totalPages) {
          dispatch(get_ste(page));
        }
    };

    const handlePrev1 = () => {
        const page = {
            page: "1",
            page1: ste.currentPage1 - 1,
            page2: "1",
        }
        if (ste.currentPage1 > 1) {
          dispatch(get_ste(page));
        }
    };

    const handleNext1 = () => {
        const page = {
            page: "1",
            page1: ste.currentPage1 + 1,
            page2: "1",
        }
        if (ste.currentPage1 !== ste.totalPages1) {
          dispatch(get_ste(page));
        }
    };

    const handlePrev2 = () => {
        const page = {
            page: "1",
            page1: ste.currentPage2 - 1,
            page2: "1",
        }
        if (ste.currentPage2 > 1) {
          dispatch(get_ste(page));
        }
    };

    const handleNext2 = () => {
        const page = {
            page: "1",
            page1: ste.currentPage2 + 1,
            page2: "1",
        }
        if (ste.currentPage2 !== ste.totalPages2) {
          dispatch(get_ste(page));
        }
    };

    const Archive = (e) => {
        const inputDate = new Date(`${e}`);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(inputDate);
        return formattedDate
    };
    const sessionDelete = useSelector((state) => state.sessionDelete)
	const { success } = sessionDelete
    
    const deleteUserHandler = (e, id) => {
		e.preventDefault()
		dispatch(delete_single_session(id)) 
    }
    useEffect(() => {
        if(success){
            const page = {
                page: "1",
                page2: ste.currentPage2,
                page1: "1",
            }
            dispatch(get_ste(page));
        }
    }, [success])

    const termDelete = useSelector((state) => state.termDelete)
	const { success2 } = termDelete
    
    const deleteUserHandler2 = (e, id) => {
		e.preventDefault()
		dispatch(delete_single_term(id)) 
    }
    useEffect(() => {
        if(success2){
            const page = {
                page: "1",
                page1: ste.currentPage1,
                page2: "1",
            }
            dispatch(get_ste(page));
        }
    }, [success2])

    const eventDelete = useSelector((state) => state.eventDelete)
	const { success1 } = eventDelete
    
    const deleteUserHandler1 = (e, id) => {
		e.preventDefault()
		dispatch(delete_single_event(id)) 
    }
    useEffect(() => {
        if(success1){
            const page = {
                page1: "1",
                page: ste.currentPage,
                page2: "1",
            }
            dispatch(get_ste(page));
        }
    }, [success1])

  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Calendar Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Calendar / View Calendar</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Calendar</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={bank} style={{width:"40px"}}/></legend>
                                <div className='shoiwtrsb2 p-3 my-5'>
                                    <form className='py-3'>
                                        <input type='search' className='swalfunselact form-control form-select-sm' placeholder='Type any keyword' value={input} onChange={(e)=> handleChange(e.target.value)}/>
                                    </form>
                                    <h5>Sessions</h5>
                                    <div class="table-responsive shoiwtrsb">
                                        <table className="table table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            results.length > 0
                                            ?
                                            results && results.map((teacher, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{teacher.from}</td>
                                                    <td>{teacher.to}</td>
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
                                            ste && ste.session && ste.session.map((teacher, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{teacher.from}</td>
                                                <td>{teacher.to}</td>
                                                <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Delete Session Details</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body me-auto">
                                                                    Do you want to delete {teacher.from}/{teacher.to}'s Details?
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
                                    {results.length < 1 && ste && ste.totalPages2 &&
                                    <div className=''>
                                        <ul className="pagination justify-content-center pagination-sm newpage py-5">
                                            <li className={`page-item ${ste.currentPage2 <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev2}>Previous</a></li>
                                            {Array.from({ length: ste && ste.totalPages2 }, (_, index) => index + 1).map((item) => (
                                                <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick2(item)}>{item}</a></li>
                                            ))}
                                            <li className={`page-item ${ste.currentPage2 === ste.totalPages2 ? "disabled" : ""}`}><a className="page-link" onClick={handleNext2}>Next</a></li>
                                        </ul>
                                    </div>}
                                </div>
                                <div className='shoiwtrsb2 p-3 my-5'>
                                    <form className='py-3'>
                                        <input type='search' className='swalfunselact form-control form-select-sm' placeholder='Type any keyword' value={input1} onChange={(e)=> handleChange1(e.target.value)}/>
                                    </form>
                                    <h5>Terms</h5>
                                    <div class="table-responsive shoiwtrsb">
                                        <table className="table table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>Session</th>
                                                <th>Term</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            results1.length > 0
                                            ?
                                            results1 && results1.map((teacher, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{teacher.session.from}/{teacher.session.to}</td>
                                                    <td>{teacher.tname}</td>
                                                    <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                    <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                        <div className="modal" id="myModal">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Delete Term</h4>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>
                                                                    <div className="modal-body me-auto">
                                                                        Do you want to delete {teacher.tname} term details
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                                                        <button type="button" className="btn btn-danger" onClick={(e) => deleteUserHandler2(e, teacher._id)} data-bs-dismiss="modal">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></td>
                                                </tr>)
                                            :
                                            ste && ste.term && ste.term.map((teacher, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{teacher.session.from}/{teacher.session.to}</td>
                                                <td>{teacher.tname}</td>
                                                <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#myModal2"><img style={{width:"15px"}} src={del}/>
                                                    <div className="modal" id="myModal2">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Delete Term</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body me-auto">
                                                                    Do you want to delete {teacher.tname} term details
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                                                    <button type="button" className="btn btn-danger" onClick={(e) => deleteUserHandler2(e, teacher._id)} data-bs-dismiss="modal">Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></td>
                                            </tr>)}
                                        </tbody>
                                        </table>
                                    </div>
                                    {results1.length < 1 && ste && ste.totalPages1 &&
                                    <div className=''>
                                        <ul className="pagination justify-content-center pagination-sm newpage py-5">
                                            <li className={`page-item ${ste.currentPage1 <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev1}>Previous</a></li>
                                            {Array.from({ length: ste && ste.totalPages1 }, (_, index) => index + 1).map((item) => (
                                                <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick1(item)}>{item}</a></li>
                                            ))}
                                            <li className={`page-item ${ste.currentPage1 === ste.totalPages1 ? "disabled" : ""}`}><a className="page-link" onClick={handleNext1}>Next</a></li>
                                        </ul>
                                    </div>}
                                </div>
                                <div className='shoiwtrsb2 p-3 my-5'>
                                    <form className='py-3'>
                                        <input type='search' className='swalfunselact form-control form-select-sm' placeholder='Type any keyword'  onChange={(e)=> handleChange2(e.target.value)}/>
                                    </form>
                                    <h5>Events</h5>
                                    <div class="table-responsive shoiwtrsb">
                                        <table className="table table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>Session</th>
                                                <th>Term</th>
                                                <th>Month</th>
                                                <th>Day</th>
                                                <th>Event</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            results2.length > 0
                                            ?
                                            results2 && results2.map((teacher, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{teacher.esession.from}/{teacher.esession.to}</td>
                                                    <td>{teacher.term.tname}</td>
                                                    <td>{teacher.month}</td>
                                                    <td>{teacher.day}</td>
                                                    <td>{teacher.event}</td>
                                                    <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                    <td><a data-bs-toggle="modal" data-bs-target="#myModal1"><img style={{width:"15px"}} src={del}/>
                                                        <div className="modal" id="myModal1">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Delete Event</h4>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>
                                                                    <div className="modal-body me-auto">
                                                                        Do you want to delete {teacher.event} event
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                                                        <button type="button" className="btn btn-danger" onClick={(e) => deleteUserHandler1(e, teacher._id)} data-bs-dismiss="modal">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></td>
                                                </tr>)
                                            :
                                            ste && ste.event && ste.event.map((teacher, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{teacher.esession.from}/{teacher.esession.to}</td>
                                                <td>{teacher.term.tname}</td>
                                                <td>{teacher.month}</td>
                                                <td>{teacher.day}</td>
                                                <td>{teacher.event}</td>
                                                <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#myModal1"><img style={{width:"15px"}} src={del}/>
                                                    <div className="modal" id="myModal1">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Delete Event</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body me-auto">
                                                                    Do you want to delete {teacher.event} event
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                                                                    <button type="button" className="btn btn-danger" onClick={(e) => deleteUserHandler1(e, teacher._id)} data-bs-dismiss="modal">Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></td>
                                            </tr>)}
                                        </tbody>
                                        </table>
                                    </div>
                                    {results2.length < 1 && ste && ste.totalPages &&
                                    <div className=''>
                                        <ul className="pagination justify-content-center pagination-sm newpage py-5">
                                            <li className={`page-item ${ste.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                                            {Array.from({ length: ste && ste.totalPages }, (_, index) => index + 1).map((item) => (
                                                <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                                            ))}
                                            <li className={`page-item ${ste.currentPage === ste.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
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

export default ViewCalendar