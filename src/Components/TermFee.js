import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import bank from "../Assets/Images/iconmonstr-script-4.svg"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'
import { post_result, teacher_get_students } from '../Redux/Actions/TeacherAction'
import { TEACHER_GET_STUDENTS_RESET } from '../Redux/Types'
import { get_all_classes, update_fee } from '../Redux/Actions/AdminAction'

const TermFee = () => {
    const dispatch = useDispatch()
    const getAllSession = useSelector((state) => state.getAllSession)
    const { allsession } = getAllSession
    const getAllClasses = useSelector((state) => state.getAllClasses)
    const { classes } = getAllClasses
    const updateFee = useSelector((state) => state.updateFee)
    const { loadingm } = updateFee


    useEffect(() => {
        dispatch(get_all_classes())
        dispatch(get_all_session())
    }, [dispatch])

    const [tname, setTname] = useState(null);
    const [amountArray, setAmountArray] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        if (allsession) {
            const filteredTerm = allsession.term.filter(term => term.session === allsession.calendar[allsession.calendar.length - 1]._id);
            const newTname = filteredTerm[filteredTerm.length - 1]?.tname || null;
            const newTid = filteredTerm[filteredTerm.length - 1]?._id || null;
            setTname(newTname);
        }
    }, [allsession]);

    const amounter = (id, amount) => {
        if (typeof amount !== 'number' || isNaN(amount)) {
            amount = parseFloat(amount) || 0;
            setMessage("")
            const amo = amountArray.find((e) => e._class === id)
            if (amo) {
                amo.amount = amount
            } else {
                setAmountArray((prev) => [...prev, { _class: id, amount: amount }])
            }
        }
    }

    const submitHandler = (id) => {
        const amo = amountArray.find((e) => e._class === id)
        if (amo) {
            dispatch(update_fee(amo))
        } else {
            setMessage("Input fee")
        }
    }

    return (
        <>
            {loadingm
                ?
                <Preloader2 />
                :
                <main className='container-fluid shomain'>
                    <p className='shopsash2 mb-0'>Fees Management</p>
                    <p className='swafundpayacc mt-2 mb-0'>Fees Management / Upload Fees</p>
                    <div className='row'>
                        <div className='col-md-12 mt-3'>
                            <div className='swalfunbs'>
                                <div className='d-flex swalfunaic'>
                                    <div className='swalfunsbbs'></div>
                                    <p className='mb-0 ms-2 swalfunp1'>Upload {allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].from}/{allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].to} {tname} Term Fee</p>
                                </div>
                                <div className='p-3'>
                                    <fieldset className='border swalfunfs px-3 pb-3'>
                                        <legend className='border swalfunlegend ms-4'><img src={bank} /></legend>
                                        <p className='swalfunp2'>Classes</p>
                                        <div className='swalfunbs my-4'>
                                            <div className='d-flex swalfunaic'>
                                                <div className='swalfunsbbs'></div>
                                                <p className='mb-0 ms-2 swalfunp1'>{allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].from}/{allsession && allsession.calendar.length > 0 && allsession.calendar[allsession.calendar.length - 1].to} {tname} Term fees</p>
                                            </div>
                                            <i className='px-3' style={{ color: "red", fontSize: "10px" }}>{message}</i>
                                            {classes &&
                                                <div className='shoiwtrsb22 p-3'>
                                                    <div className="table-responsive shoiwtrsb">
                                                        <table className="table table-hover table-striped border table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>SN</th>
                                                                    <th>CLASS</th>
                                                                    <th>FEE</th>
                                                                    <th>SUBMIT</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {classes.map((student, index) =>
                                                                    <tr>
                                                                        <td>{index + 1}</td>
                                                                        <td>{student.name}</td>
                                                                        <td><input onChange={(e) => amounter(student._id, e.target.value)} className='upreforminput border' type='number' /></td>
                                                                        <td><a onClick={(e) => submitHandler(student._id)} style={{ cursor: "pointer" }}><div style={{ margin: "auto", fontSize: "12px" }} className='shoviewall shogtfpajk px-2 '>Submit</div></a></td>
                                                                    </tr>)}
                                                            </tbody>
                                                        </table>
                                                    </div>
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

export default TermFee