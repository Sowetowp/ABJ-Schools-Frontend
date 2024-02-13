import React, { useEffect, useRef, useState } from 'react'
import "../Styles/About.css"
import NavBar from '../Components/NavBar'
import abt1 from "../Assets/Images/about-us-icon-1.png"
import abt2 from "../Assets/Images/about-us-icon-2.png"
import abt3 from "../Assets/Images/about-us-icon-3.png"
import abt4 from "../Assets/Images/about-us-icon-4.png"
import quote from "../Assets/Images/iconmonstr-quote-1.svg"
import test from "../Assets/Images/testimonial-img-1.jpg"
import test1 from "../Assets/Images/testimonial-img-2.jpg"
import test2 from "../Assets/Images/testimonial-img-3.jpg"
import Foot from '../Components/Foot'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [best, SetBest] = useState('Education is the passport to the future, for tomorrow belongs to those who prepare for it today.')
  const [bestname, SetBestname] = useState('Cynthia Nelson')
  const [bestsub, SetBestsub] = useState('Science')
  const best1 = ()=>{
    SetBest('Education is the passport to the future, for tomorrow belongs to those who prepare for it today.')
    SetBestname("Cynthia Nelson")
    SetBestsub("Science")
  }
  const best2 = ()=>{
    SetBest('Education is not the filling of a pail but the lighting of a fire.')
    SetBestname("Douglas Ortega")
    SetBestsub("Sociology")
  }
  const best3 = ()=>{
    SetBest('Learning is a treasure that will follow its owner everywhere.')
    SetBestname("Marie Nichols")
    SetBestsub("Mathematics")
  }
    const [count, setCount] = useState(1991)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          if (count < 1991) {
            setCount(count + 1);
          }
          if (count1 < 934) {
            setCount1(count1 + 1);
          }
          if (count2 < 65409) {
            setCount2(count2 + 25);
          }
          if (count3 < 289) {
            setCount3(count3 + 1);
          }
        }, 0.001);
    
        return () => {
          clearInterval(interval);
        };
    }, [count, count1, count2, count3]);

    const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
        <main className='container-fluid px-0'>
            <div className='abthbgi'>
                <div className='abtjk'>
                    <NavBar/>
                    <div className='abthps'>
                        <div>
                            <p className='abthp1'>We are determined to achieve the highest standards</p>
                            <p className='abthp2'>in everything that we do.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row abtachbox'>
                    <div className='col-md-3 text-center abtachmt'>
                        <p className='abtachp1'>{count}</p>
                        <p className='abtachp2'>YEAR FOUNDED</p>
                    </div>
                    <div className='col-md-3 text-center abtachmt'>
                        <p className='abtachp1'>{count1}</p>
                        <p className='abtachp2'>CERTIFIED TEACHERS</p>
                    </div>
                    <div className='col-md-3 text-center abtachmt'>
                        <p className='abtachp1'>{count2}</p>
                        <p className='abtachp2'>GRADUATED STUDENTS</p>
                    </div>
                    <div className='col-md-3 text-center abtachmt'>
                        <p className='abtachp1'>{count3}</p>
                        <p className='abtachp2'>AWARDS WINNER</p>
                    </div>
                </div>
            </div>
            <div className='container py-5'>
              <p className='abtwhf'>WE HAVE FAITH IN OUR STUDENT FUTURE</p>
              <p className='abtosat'>Within our esteemed institution, we boast a community of exceptional students—each displaying remarkable talents, unwavering dedication, and a wealth of innovative ideas. We are committed to empowering these bright minds, offering a nurturing environment where creativity thrives. Our educational philosophy revolves around hands-on experiences, providing unique opportunities that go beyond conventional learning. By fostering an atmosphere of encouragement and support, we aim to shape not just students' academic journeys, but also their future successes.</p>
            </div>
            <div className='container'>
              <div className='row abtiatsr'>
                <div className='col-xl-6 abtsstac mt-4'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <img src={abt1}/>
                    </div>
                    <div className='col-md-10'>
                      <p className='abtemp'>Empower</p>
                      <p className='abtemp2'>We instill unwavering faith in our students, nurturing a bright future of endless possibilities</p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 abtsstac mt-4'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <img src={abt2}/>
                    </div>
                    <div className='col-md-10'>
                      <p className='abtemp'>Engage</p>
                      <p className='abtemp2'>Empowering students with knowledge, we foster an environment where active learning ignites boundless opportunities.</p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 abtsstac mt-4'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <img src={abt3}/>
                    </div>
                    <div className='col-md-10'>
                      <p className='abtemp'>Graduation</p>
                      <p className='abtemp2'>Celebrating achievement, as our students embark on new horizons, equipped with wisdom and resilience for a brighter future.</p>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 abtsstac mt-4'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <img src={abt4}/>
                    </div>
                    <div className='col-md-10'>
                      <p className='abtemp'>Awarding</p>
                      <p className='abtemp2'>Recognizing excellence and effort, we honor our students' dedication, fostering a culture of achievement and inspiring future accomplishments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5 abtimgot'>
            </div>
            <div className='py-5 text-center'>
              <img style={{width:"40px"}} className='py-4' src={quote}/>
              <p className='abttestsp pb-5'>{best}</p>
              <hr style={{width:"15%",margin:"auto"}}/>
              <p className='abtcyne'>{bestname}</p>
              <p className='abtsos'>Student of {bestsub}</p>
            </div>
            <div className='abttest row'>
              <div className='col-md-4'><img onClick={best2} className='abttestimg' src={test} tabIndex="0"/></div>
              <div className='col-md-4'><img onClick={best1} src={test1} tabIndex="0" ref={inputRef}/></div>
              <div className='col-md-4'><img onClick={best3} src={test2} tabIndex="0"/></div>
            </div>
            <div className='text-center py-5'>
              <a href='/contact'><button className='abtcub pt-3 pb-2 px-5'>CONTACT US</button></a>
            </div>
            <Foot/>
        </main>
    </>
  )
}

export default About