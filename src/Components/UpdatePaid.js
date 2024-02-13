import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-script-4.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'
import { get_all_classes, get_by_class, update_paid } from '../Redux/Actions/AdminAction'

const UpdatePaid = () => {
    const dispatch = useDispatch()
    const getAllSession = useSelector((state) => state.getAllSession)
    const { allsession } = getAllSession
    const teacherAuth = useSelector((state) => state.teacherAuth)
    const { teacherDetail } = teacherAuth
    const getAllClasses = useSelector((state) => state.getAllClasses)
    const { classes } = getAllClasses
    const getByClass = useSelector((state) => state.getByClass)
    const { students, loading } = getByClass
    const updatePaid = useSelector((state) => state.updatePaid)
    const { loadingm } = updatePaid

    useEffect(() => {
        dispatch(get_all_classes())
        dispatch(get_all_session())
    }, [dispatch])

    const [message, setMessage] = useState('');
    const [_class, set_class] = useState('');
    const getStudents = () => {
        dispatch(get_by_class({ _class: _class }))
    }
    const handleSelectChange = (e) => {
        set_class(e.target.value);
    };

    const [amountArray, setAmountArray] = useState([]);

    const amounter = (id, amount) => {
        if (typeof amount !== 'number' || isNaN(amount)) {
            amount = parseFloat(amount) || 0;
            setMessage("")
            const amo = amountArray.find((e) => e.id === id)
            if (amo) {
                amo.amount = amount
            } else {
                setAmountArray((prev) => [...prev, { id: id, amount: amount }])
            }
        }
    }

    const submitHandler = (id) => {
        const amo = amountArray.find((e) => e.id === id)
        if (amo) {
            dispatch(update_paid(amo))
        } else {
            setMessage("Input amount")
        }
    }
    return (
        <>
            {
                loading || loadingm
                    ?
                    <Preloader2 />
                    :
                    <main className='container-fluid shomain'>
                        <p className='shopsash2 mb-0'>Fees Management</p>
                        <p className='swafundpayacc mt-2 mb-0'>Fees Management / Register Payment</p>
                        <div className='row'>
                            <div className='col-md-12 mt-3'>
                                <div className='swalfunbs'>
                                    <div className='d-flex swalfunaic'>
                                        <div className='swalfunsbbs'></div>
                                        <p className='mb-0 ms-2 swalfunp1'>Register Payment</p>
                                    </div>
                                    <div className='p-3'>
                                        <fieldset className='border swalfunfs px-3 pb-3'>
                                            <legend className='border swalfunlegend ms-4'><img src={bank} /></legend>
                                            <p className='swalfunp2'>Class</p>
                                            <div className='row'>
                                                <div className='col-md-6 my-2'>
                                                    <select onChange={handleSelectChange} className='swalfunselact form-select form-control form-select-sm'>
                                                        <option>Select  Class</option>
                                                        {classes && classes.map((e) =>
                                                            <option value={e._id}>{e.name}</option>)}
                                                    </select>
                                                </div>
                                                <div className='col-md-6 my-2'>
                                                    <button className='subbtn2' onClick={(e) => getStudents()}>Proceed</button>
                                                </div>
                                            </div>
                                            <div className='swalfunbs my-4'>
                                                <div className='d-flex swalfunaic'>
                                                    <div className='swalfunsbbs'></div>
                                                    <p className='mb-0 ms-2 swalfunp1'>New Payment</p>
                                                </div>
                                                <i className='px-3' style={{ color: "red", fontSize: "10px" }}>{message}</i>
                                                {students &&
                                                    <div className='shoiwtrsb22 p-3'>
                                                        <div className="table-responsive shoiwtrsb">
                                                            <table className="table table-hover table-striped border table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th>SN</th>
                                                                        <th>NAME</th>
                                                                        <th>Amount</th>
                                                                        <th>SUBMIT</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {students.map((student, index) =>
                                                                        <tr>
                                                                            <td>{index + 1}</td>
                                                                            <td>{student.lastName} {student.firstName} {student.middlename}</td>
                                                                            <td><input onChange={(e) => amounter(student._id, e.target.value)} className='upreforminput border' type='number' /></td>
                                                                            <td><a onClick={(e) => submitHandler(student._id)} style={{ cursor: "pointer" }}><div style={{ margin: "auto", fontSize: "12px" }} className='shoviewall shogtfpajk px-2 '>Submit</div></a></td>
                                                                        </tr>)}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        {/* <a style={{cursor:"pointer"}} onClick={submitResultHandler}><div className='shoviewall shogtfpajk px-2 py-1 mt-3'>Submit</div></a> */}
                                                    </div>}
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
            }
        </>
    )
}

export default UpdatePaid