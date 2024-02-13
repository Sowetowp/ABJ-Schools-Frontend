import React from 'react'
import "../Styles/Future.css"
import whf1 from "../Assets/Images/we-have-faith-img-1.png"
import whf2 from "../Assets/Images/we-have-faith-img-2.png"
import whf3 from "../Assets/Images/we-have-faith-img-3.png"
import whf4 from "../Assets/Images/we-have-faith-img-4.png"

const Future = () => {
  return (
    <>
        <div className='container py-5 text-center'>
            <p className='fwhf mt-4'>WE HAVE FAITH IN OUR STUDENT FUTURE</p>
            <p className='fuosat'>Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about.</p>
            <div className='row py-5'>
                <div className='col-xl-3 col-md-6 pt-4'>
                    <img style={{height:"60px"}} src={whf1}/>
                    <p className='fuem my-4'>Empower</p>
                    <div className='felo'>
                        <p className='felo1 m-0'>We instill unwavering faith in our students, nurturing a bright future of endless possibilities</p>
                    </div>
                </div>
                <div className='col-xl-3 col-md-6 pt-4'>
                    <img style={{height:"60px"}} src={whf2}/>
                    <p className='fuem my-4'>Engage</p>
                    <div className='felo'>
                        <p className='felo1 m-0'>Empowering students with knowledge, we foster an environment where active learning ignites boundless opportunities.</p>
                    </div>
                </div>
                <div className='col-xl-3 col-md-6 pt-4'>
                    <img style={{height:"60px"}} src={whf3}/>
                    <p className='fuem my-4'>Graduation</p>
                    <div className='felo'>
                        <p className='felo1 m-0'>Celebrating achievement, as our students embark on new horizons, equipped with wisdom and resilience for a brighter future.</p>
                    </div>
                </div>
                <div className='col-xl-3 col-md-6 pt-4'>
                    <img style={{height:"60px"}} src={whf4}/>
                    <p className='fuem my-4'>Awarding</p>
                    <div className='felo'>
                        <p className='felo1 m-0'>Recognizing excellence and effort, we honor our students' dedication, fostering a culture of achievement and inspiring future accomplishments.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Future