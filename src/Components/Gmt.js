import React from 'react'
import "../Styles/Gmt.css"
import sign from "../Assets/Images/signature.png"
import com from "../Assets/Images/welcome-img-1.jpg"
import { Slide } from 'react-awesome-reveal';

const Gmt = () => {
  return (
    <>
        <main className='gmtmain' style={{overflow:"hidden"}}>
            <div className='container py-5'>
                <div className='row'>
                    <Slide direction="bottom" className='col-md-7' style={{position:"relative"}}>
                    <div >
                        <p className='Gmtct mt-3'>Commandant Talk</p>
                        <p className='gmtepw'>EDUCATION IS THE MOST POWERFUL WEAPON</p>
                        <p className='gmtouat mt-3'>Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about. Our students are busy doing things that matter. Take a look at the opportunities you'll have at the University. The task of the modern educator is not to cut down jungles, but to irrigate deserts.</p>
                        <img className='py-4' src={sign}/>
                        <p className='m-0 gmtkg'>Katherine Gonzalez</p>
                        <p className='gmtaic'>A.F.C.S Ibadan Commandant</p>
                    </div>
                    </Slide>
                    <Slide direction="right" className='col-md-5 p-0'>
                    <div >
                        <img style={{width:"100%"}} src={com}/>
                    </div>
                    </Slide>
                </div>
            </div>
        </main>
    </>
  )
}

export default Gmt