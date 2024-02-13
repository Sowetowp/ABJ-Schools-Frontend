import React, { useEffect, useState } from 'react'
import "../Styles/Sub.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { post_sub } from '../Redux/Actions/MailAction'
import { POST_SUB_RESET } from '../Redux/Types'
import Preloader2 from './Preloader2'

const Sub = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("")


    const postSub = useSelector((state) => state.postSub)
    const {loading, subDetail} = postSub


    const submitHandler = (e) => {
        e.preventDefault()
        const dada = {
            email,
        }
        dispatch(post_sub(dada))
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: POST_SUB_RESET})
        }
     }, [dispatch])

  return (
    <>
        {
        loading
        ?
        <Preloader2/>
        :
        <main className='container py-5 px-0'>
            <div className='container-fluid subbgi'>
                <div className='row subjk p-5'>
                    <div className='col-xl-6 subic'>
                        <p className='m-0 subp1'>Get The Latest News From ABJ School!</p>
                        <p className='m-0 subp2'>Join our newsletter now</p>
                    </div>
                    <div className='col-xl-6'>
                        <form onSubmit={submitHandler}>
                            <input className='subinp px-4 py-4' placeholder='Enter your email address here' type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                            <button className='subbtn py-3 px-5' type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        }
    </>
  )
}

export default Sub