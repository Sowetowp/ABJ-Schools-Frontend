import React, { useEffect, useState } from 'react'
import "../Styles/Fpay.css"
import "../Styles/Shome.css"
import "../Styles/Wfund.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'
import { GET_PAYMENT_RESET } from '../Redux/Types'
import { delete_payment, get_all_classes, get_payment, make_payment } from '../Redux/Actions/AdminAction'
import dollar from "../Assets/Images/payment-method-bank-svgrepo-com.svg"

const Payment = () => {
    const dispatch = useDispatch()
    const getAllClasses = useSelector((state) => state.getAllClasses)
	const { classes } = getAllClasses
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const getPayment = useSelector((state) => state.getPayment)
	const { loading, payment } = getPayment
    const paymentDelete = useSelector((state) => state.paymentDelete)
	const { loadingd } = paymentDelete
    const makePayment = useSelector((state) => state.makePayment)
	const { loadingm } = makePayment
    useEffect(() => {
        dispatch(get_all_session())
        dispatch(get_all_classes())
        dispatch({type: GET_PAYMENT_RESET})
    }, [dispatch])
    
    const [_class, set_class] = useState('');
    
    const handleSelectChangec = (e) => {
        set_class(e.target.value);
    };
    
    const getClassHandler = (e) => {
        e.preventDefault()
        const id = {
            _class: _class
        }
        dispatch(get_payment(id))
    }
    
    const makePay = (e, sid)=>{
        e.preventDefault()
        const id = {
            student: sid,
            term: allsession && allsession.term[allsession.term.length - 1]._id,
            paid: true,
            _class: _class
        }
        dispatch(make_payment(id))
    }
    const deleteUserHandler = (e, sid) => {
		e.preventDefault()
        const id = {
            student: sid,
            _class: _class
        }
		dispatch(delete_payment(id)) 
    }
    

  return (
    <>
        {
        loading || loadingd || loadingm
        ?
        <Preloader2/>
        :
        <main className='container-fluid shomain'>
            <p className='shopsash2 mb-0'>Payments Management</p>
            <p className='swafundpayacc mt-2 mb-0'>Payments Management / School Fees</p>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='swalfunbs'>
                        <div className='d-flex swalfunaic'>
                            <div className='swalfunsbbs'></div>
                            <p className='mb-0 ms-2 swalfunp1'>School Fees</p>
                        </div>
                        <div className='p-3'>
                            <fieldset className='border swalfunfs px-3 pb-3'>
                                <legend className='border swalfunlegend ms-4'><img src={dollar} style={{width:"45px"}}/></legend>
                                <p className='swalfunp2'>Class</p>
                                <div className='row'>
                                    <div className='col-md-6 my-2'>
                                        <select onChange={handleSelectChangec} className='swalfunselact form-select form-control form-select-sm'>
                                            <option>Select  Class</option>
                                            {classes && classes.map((e)=>
                                            <option value={e._id}>{e.name}</option>)}
                                        </select>
                                    </div>
                                    <div className='col-md-6 my-2'>
                                        <button onClick={getClassHandler} className='subbtn2'>Proceed</button>
                                    </div>
                                </div>
                                <div className='swalfunbs my-4'>
                                    <div className='d-flex swalfunaic'>
                                        <div className='swalfunsbbs'></div>
                                        <p className='mb-0 ms-2 swalfunp1'>{allsession && allsession.term[allsession.term.length - 1].tname} Term</p>
                                    </div>
                                    {payment &&
                                    <div className='shoiwtrsb22 p-3'>
                                        <div className="table-responsive shoiwtrsb">
                                            <table className="table table-hover table-striped border table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>NAME</th>
                                                    <th>STATUS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {payment && payment.notPaid && payment.notPaid.length > 0 && payment.notPaid.map((student, index) =>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{student.lastName} {student.firstName} {student.middlename}</td>
                                                    <td className='d-flex justify-content-center'>
                                                        <div class="checkbox-wrapper-10">
                                                            <input onChange={(e) => makePay(e, student._id)}  type="checkbox" id={"d" + student._id} class="tgl tgl-flip"/>
                                                            <label for={"d" + student._id} data-tg-on="Paid!" data-tg-off="x" class="tgl-btn"></label>
                                                        </div>
                                                    </td>
                                                </tr>)}
                                                {payment && payment.paid && payment.paid.length > 0 && payment.paid.map((student, index) =>
                                                <tr>
                                                    <td>{index + 1 + payment.notPaid.length}</td>
                                                    <td>{student.lastName} {student.firstName} {student.middlename}</td>
                                                    <td className='d-flex justify-content-center'>
                                                        <div class="checkbox-wrapper-10">
                                                            <input onChange={(e) => deleteUserHandler(e, student._id)} checked   type="checkbox" id={"d" + student._id} class="tgl tgl-flip"/>
                                                            <label for={"d" + student._id} data-tg-on="Paid!" data-tg-off="x" class="tgl-btn"></label>
                                                        </div>
                                                    </td>
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
        </main>}
    </>
  )
}

export default Payment