import React, { useEffect, useState } from 'react'
import "../Styles/Passignment.css"
import { useDispatch, useSelector } from 'react-redux'
import { get_assignments, rec_assignment } from '../Redux/Actions/StudentAction'
import { get_all_session } from '../Redux/Actions/CalendarAction'
import Preloader2 from './Preloader2'

const Pendingassignment = () => {
    const dispatch = useDispatch()
    const getAllSession = useSelector((state) => state.getAllSession)
	const { allsession } = getAllSession
    const studentAuth = useSelector((state) => state.studentAuth)
    const {studentDetail} = studentAuth
    const getAssignment = useSelector((state) => state.getAssignment)
	const { assignments, loading } = getAssignment
    const recAssignment = useSelector((state) => state.recAssignment)
	const { assignment, loading2 } = recAssignment
    useEffect(() => {
        dispatch(get_all_session())
    }, [dispatch])
    
    useEffect(()=>{
        const tea = {
            _class: studentDetail.classid,
            term: allsession && allsession.term[allsession.term.length - 1]._id,
            student: studentDetail.id
        }
        dispatch(get_assignments(tea))
    },[])

    const [ansArray, setAnsArray] = useState([])
    const answer = (e, g, h)=>{
        const mapp = ansArray.filter((ee)=> ee._id === g)
        const ckeck = mapp.find((ee)=> ee.que === h)
        if(ckeck){
            ckeck.val = e
        }else{
            setAnsArray((prevs)=>[...prevs, {_id: g, val: e === "true" ? 1 : 0, que: h}])
        }
    }

    const submitHandler = (e)=>{
        const filt = ansArray.filter((ee)=> ee._id === e)
        const mapp = filt.map((er)=> er.val)
        const red = mapp.reduce((a, v)=> a + v)
        const tea = {
            term: allsession && allsession.term[allsession.term.length - 1]._id,
			score: red,
			student: studentDetail.id,
			assignment: e,
            _class: studentDetail.classid
        }
        dispatch(rec_assignment(tea))
    }
  return (
    <>
        {
        loading || loading2
        ?
        <Preloader2/>
        :
        <main className='container-fluid'>
            <h1 className='passh1'>Pending Assignments</h1>
            <p className='passp1'>Assignments / Pending Assignments</p>
            <div id="accordion" className='mt-5'>
                {assignments && assignments.length > 0 && assignments.map((assign, index)=>
                <div className="card">
                    <div className="card-header border-0" data-bs-toggle="collapse" href={"#d"+assign._id}>
                        <a className="passcollapsebtn" style={{fontSize:"12px", fontWeight:"700", color:"rgb(15, 79, 163)"}}>
                            {assign.subject.name}
                        </a>
                    </div>
                    <div id={"d"+assign._id}  className={index === 0 ? "show collapse border-top" : "collapse border-top"} data-bs-parent="#accordion">
                        <div className='row px-2'>
                            {assign.questions.map((que, index)=>
                            <div className="col-md-6 card-body">
                                <div className='passquestions'>
                                    <p>{index + 1 + "."}</p>
                                    <p>{que.questionText}</p>
                                </div>
                                {que.options.map((opp)=>
                                <div className="form-check passoptions">
                                    <input onChange={(e)=>answer(e.target.value, assign._id, que.id)} type="radio" className="form-check-input" id={opp.id} name={que.id+assign._id} value={opp.isCorrect}/>{opp.optionText}
                                    <label className="form-check-label" for={opp.id}></label>
                                </div>)}
                            </div>)}
                        </div>
                        <div className='mx-2 mb-2' style={{width:"90px"}}>
                            <button className='subbtn2' onClick={(e)=>submitHandler(assign._id)}>Submit</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </main>}
    </>
  )
}

export default Pendingassignment