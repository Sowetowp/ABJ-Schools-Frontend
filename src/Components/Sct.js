import React from 'react'
import "../Styles/Sct.css"
import guitar from "../Assets/Images/how-to-choose-a-guitar-playing-style-388x370.jpg"
const Sct = () => {
  return (
    <>
        <div className='container scthm'>
            <div className='row'>
                <div className='col-md-4 sctcol'>
                    <div className='sctdjk'>
                        <p className='sctp1 m-0'>STUDENT</p>
                        <p className='sctp2'>EVENTS</p>
                    </div>
                </div>
                <div className='col-md-4 sctcol1'>
                    <div className='sctdjk1'>
                        <p className='sctp11 m-0'>CLASSROOM</p>
                        <p className='sctp21'>STORIES</p>
                    </div>
                </div>
                <div className='col-md-4 sctcol2'>
                    <a href='/teachers' style={{textDecoration:"none"}}>
                        <div className='sctdjk2'>
                            <p className='sctp12 m-0'>TEACHERS</p>
                            <p className='sctp22'>PROFILE</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sct