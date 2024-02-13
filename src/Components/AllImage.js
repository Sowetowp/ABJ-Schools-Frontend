import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import "../Styles/Thead.css"
import bank from "../Assets/Images/iconmonstr-newspaper-9.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import "../Styles/Teachers.css"
import "../Styles/News.css"
import { useDispatch, useSelector } from 'react-redux'
import { admin_search_images, admin_search_news, delete_single_image } from '../Redux/Actions/AdminAction'
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

const AllImages = () => {
    const getAllImages = useSelector((state) => state.getAllImages)
	const { images } = getAllImages
    
    const [input, setInput] = useState("")
    const adminSearchImages = useSelector((state) => state.adminSearchImages)
	const { searched } = adminSearchImages
    const [results, setResults] = useState([])
    
    const handleChange = (value) => {
        setInput(value);
        dispatch(admin_search_images()).then(() => {
            if(searched){
                const result = searched.filter((teach) => {
                    return (
                        value &&
                        teach &&
                        (
                            (typeof teach.title === 'string' && teach.title.toLowerCase().includes(value.toLowerCase()))
                        )
                    );
                });
                setResults(result);
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
        dispatch(get_all_images(1))
    }, [dispatch])

    const handleItemClick = (item) => {
        dispatch(get_all_images(item))
    }

    const handlePrev = () => {
        if (images.currentPage > 1) {
          dispatch(get_all_images(images.currentPage - 1));
        }
    };

    const handleNext = () => {
        if (images.currentPage !== images.totalPages) {
          dispatch(get_all_images(images.currentPage + 1));
        }
    };
    const Archive = (e) => {
        const inputDate = new Date(`${e}`);
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(inputDate);
        return formattedDate
    };
    const imageDelete = useSelector((state) => state.imageDelete)
	const { success } = imageDelete
    
    const deleteUserHandler = (e, id) => {
		e.preventDefault()
		dispatch(delete_single_image(id)) 
    }
    useEffect(() => {
        if(success){
            dispatch(get_all_images(images && images.currentPage));
        }
    }, [success])

  return (
    <>
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Gallery Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Gallery / All Images</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>Images</p>
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
                                    <h5>All Images</h5>
                                    <div class="table-responsive shoiwtrsb">
                                        <table className="table table-hover table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>S/N</th>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Date</th>
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
                                                    <td>
                                                        {teacher.image && <AdvancedImage cldImg={
                                                            (function () {
                                                                const myImage = cld.image(teacher.image);
                                                                myImage.resize(fill().width(18).height(18).gravity(focusOn(FocusOn.face())));
                                                                return myImage;
                                                            })()
                                                        } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                                    </td>
                                                    <td>{teacher.title}</td>
                                                    <td>{Archive(teacher.createdAt)}</td>
                                                    <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                    <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                        <div className="modal" id="myModal">
                                                            <div className="modal-dialog">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h4 className="modal-title">Delete Image</h4>
                                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>
                                                                    <div className="modal-body me-auto">
                                                                        Do you want to delete {teacher.title}?
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
                                            images && images.paginatedGallery && images.paginatedGallery.map((teacher, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {teacher.image && <AdvancedImage cldImg={
                                                        (function () {
                                                            const myImage = cld.image(teacher.image);
                                                            myImage.resize(fill().width(18).height(18).gravity(focusOn(FocusOn.face())));
                                                            return myImage;
                                                        })()
                                                    } plugins={[lazyload(), placeholder({mode:"predominant-color"})]}/>}
                                                </td>
                                                <td>{teacher.title}</td>
                                                <td>{Archive(teacher.createdAt)}</td>
                                                <td><a><img style={{width:"12px"}} src={edit}/></a></td>
                                                <td><a data-bs-toggle="modal" data-bs-target="#myModal"><img style={{width:"15px"}} src={del}/>
                                                    <div className="modal" id="myModal">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Delete Image</h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>
                                                                <div className="modal-body me-auto">
                                                                    Do you want to delete {teacher.title}?
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
                                    {images && results.length < 1 && images.totalPages &&
                                    <div className=''>
                                        <ul className="pagination justify-content-center pagination-sm newpage py-5">
                                            <li className={`page-item ${images.currentPage <= 1? "disabled" : ""}`}><a className="page-link" onClick={handlePrev}>Previous</a></li>
                                            {Array.from({ length: images && images.totalPages }, (_, index) => index + 1).map((item) => (
                                                <li className="page-item" key={item}><a className="page-link" onClick={() => handleItemClick(item)}>{item}</a></li>
                                            ))}
                                            <li className={`page-item ${images.currentPage === images.totalPages? "disabled" : ""}`}><a className="page-link" onClick={handleNext}>Next</a></li>
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

export default AllImages