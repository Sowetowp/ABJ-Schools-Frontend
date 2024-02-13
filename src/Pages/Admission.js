import React, { useEffect, useState } from 'react'
import "../Styles/Admission.css"
import NavBar from '../Components/NavBar'
import bg1 from "../Assets/Images/Depositphotos_100911654_original.jpg"
import bg2 from "../Assets/Images/6.jpg"
import teach from "../Assets/Images/iconmonstr-school-30.svg"
import book from "../Assets/Images/iconmonstr-book-17.svg"
import classr from "../Assets/Images/iconmonstr-school-4.svg"
import cert from "../Assets/Images/iconmonstr-certificate-12.svg"
import tro from "../Assets/Images/iconmonstr-trophy-10.svg"
import online from "../Assets/Images/blackboard-class-svgrepo-com.svg"
import like from "../Assets/Images/like-svgrepo-com.svg"
import smile from "../Assets/Images/smile-svgrepo-com.svg"
import people from "../Assets/Images/people-svgrepo-com.svg"
import calendar from "../Assets/Images/calendar-svgrepo-com.svg"
import badge from "../Assets/Images/badge-svgrepo-com.svg"
import apply from "../Assets/Images/1-3.jpg"
import visit from "../Assets/Images/2-2.jpg"
import test from "../Assets/Images/3-3.jpg"
import app from "../Assets/Images/4-2.jpg"
import dp1 from "../Assets/Images/photodune-6860206-ginger-woman-s-1.jpg"
import dp2 from "../Assets/Images/photodune-10624211-businesswoman-networking-s-1.jpg"
import dp3 from "../Assets/Images/photodune-8386876-employee-at-work-s-1.jpg"
import dp4 from "../Assets/Images/photodune-8386893-successful-businessman-s.jpg"
import da from "../Assets/Images/arrow-down-svgrepo-com.svg"
import Foot from '../Components/Foot'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { contact_us } from '../Redux/Actions/MailAction'
import { CONTACT_US_RESET } from '../Redux/Types'
import Preloader2 from '../Components/Preloader2'

const Admission = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")


    const contactUs = useSelector((state) => state.contactUs)
    const {loading, mailDetail} = contactUs


    const submitHandler = (e) => {
        e.preventDefault()
        const dada = {
            fullName,
            email,
            phone,
            subject,
            message
        }
        dispatch(contact_us(dada))
    }
    
    useEffect(() => {
    return () => {
        dispatch({type: CONTACT_US_RESET})
    }
    }, [dispatch])

  return (
    <>
        {loading?<Preloader2/>:
        <main className='container-fluid px-0'>
            <div className='admhbg'>
                <div className='admjk'>
                    <NavBar/>
                    <p className='admpadm'>Admission</p>
                </div>
            </div>
            <div className='admwhs '>
                <div className='container pb-4'>
                    <p className='admp1whs mb-0'>Why High School?</p>
                    <p className='admp2whs'>About Share Our Strength</p>
                    <div className='row pb-5'>
                        <div className='col-xl-4 pt-5 col-md-6 text-center'>
                            <img className='admingtea' src={teach}/>
                            <p className='admpgt'>Great Teachers</p>
                            <p className='admp2gt'>Determined to achieve the highest standards, our dedicated teachers create a family atmosphere perfect for nurturing academic abilities.</p>
                        </div>
                        <div className='col-xl-4 pt-5 col-md-6 text-center'>
                            <img className='admingtea' src={book}/>
                            <p className='admpgt'>Books & Library</p>
                            <p className='admp2gt'>Explore the world of knowledge through our extensive library. From classic literature to contemporary works, our collection caters to diverse interests, fostering a love for reading and learning.</p>
                        </div>
                        <div className='col-xl-4 pt-5 col-md-6 text-center'>
                            <img className='admingtea' src={classr}/>
                            <p className='admpgt'>Class Schedule</p>
                            <p className='admp2gt'>Streamlined class schedules provide structure and balance, optimizing learning experiences for our students.</p>
                        </div>
                        <div className='col-xl-4 pt-5 col-md-6 text-center'>
                            <img className='admingtea' src={cert}/>
                            <p className='admpgt'>Certification</p>
                            <p className='admp2gt'>Gain recognized certifications as a testament to your academic achievements and skills development.</p>
                        </div>
                        <div className='col-xl-4 pt-5 col-md-6 text-center'>
                            <img className='admingtea' src={tro}/>
                            <p className='admpgt'>Athletic Programs</p>
                            <p className='admp2gt'>Participate in our dynamic athletic programs, fostering teamwork, discipline, and physical well-being.</p>
                        </div>
                        <div className='col-xl-4 pt-5 col-md-6 text-center'>
                            <img className='admingtea' src={online}/>
                            <p className='admpgt'>Online Courses</p>
                            <p className='admp2gt'>Discover the future of learning with our diverse range of online courses. Tailor your education to your pace and interests while engaging with a global community of learners.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallax">
                <div className='admpljk'>
                    <div className='container'>
                        <p className='admmt7y'>More than 70 Years of Experience</p>
                        <div className='row py-5'>
                            <div className='col-md text-center'>
                                <img className='admliimg' src={like}/>
                                <p className='admp100'>100%</p>
                                <p className='admppttu'>Passing to Universities</p>
                            </div>
                            <div className='col-md text-center'>
                                <img className='admliimg' src={people}/>
                                <p className='admp100'>126</p>
                                <p className='admppttu'>People working</p>
                            </div>
                            <div className='col-md text-center'>
                                <img className='admliimg' src={badge}/>
                                <p className='admp100'>2480</p>
                                <p className='admppttu'>Students Enrolled</p>
                            </div>
                            <div className='col-md text-center'>
                                <img className='admliimg' src={calendar}/>
                                <p className='admp100'>72</p>
                                <p className='admppttu'>Years of experience</p>
                            </div>
                            <div className='col-md text-center'>
                                <img className='admliimg' src={smile}/>
                                <p className='admp100'>7856</p>
                                <p className='admppttu'>Happy Smiles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 container-fluid admappbgc'>
                <div className='container'>
                    <h1 className='py-5 text-center'>How To Apply</h1>
                    <div className='row'>
                        <div className='col-md-4 '>
                            <img src={apply} className='admapimg'/>
                        </div>
                        <div className='col-md-8 bg-white p-5'>
                            <h2 className='admaph2'>1. Inquiry</h2>
                            <p className='mb-0 mt-4 admpbi'>Bacon ipsum dolor amet filet mignon pork belly hamburger pork tail shank pig andouille, pork loin cow sausage meatball capicola. Kielbasa porchetta meatball pig pork loin short ribs sirloin jowl landjaeger tail beef ribs rump short loin shank chuck. Jowl swine chicken ham, sausage kielbasa andouille turkey kevin short ribs doner frankfurter tмurducken. Meatloaf ball tip tail, strip picanha pork loin sausage shoulder. Ground round doner sirloin picanha, jowl pig porchetta boudin.</p>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-4 '>
                            <img src={visit} className='admapimg'/>
                        </div>
                        <div className='col-md-8 bg-white p-5'>
                            <h2 className='admaph21'>2. Interview & Visit</h2>
                            <p className='mb-0 mt-4 admpbi'>Bacon ipsum dolor amet filet mignon pork belly hamburger pork tail shank pig andouille, pork loin cow sausage meatball capicola. Kielbasa porchetta meatball pig pork loin short ribs sirloin jowl landjaeger tail beef ribs rump short loin shank chuck. Jowl swine chicken ham, sausage kielbasa andouille turkey kevin short ribs doner frankfurter tмurducken. Meatloaf ball tip tail, strip picanha pork loin sausage shoulder. Ground round doner sirloin picanha, jowl pig porchetta boudin.</p>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        <div className='col-md-4 '>
                            <img src={test} className='admapimg'/>
                        </div>
                        <div className='col-md-8 bg-white p-5'>
                            <h2 className='admaph22'>3. Testing</h2>
                            <p className='mb-0 mt-4 admpbi'>Bacon ipsum dolor amet filet mignon pork belly hamburger pork tail shank pig andouille, pork loin cow sausage meatball capicola. Kielbasa porchetta meatball pig pork loin short ribs sirloin jowl landjaeger tail beef ribs rump short loin shank chuck. Jowl swine chicken ham, sausage kielbasa andouille turkey kevin short ribs doner frankfurter tмurducken. Meatloaf ball tip tail, strip picanha pork loin sausage shoulder. Ground round doner sirloin picanha, jowl pig porchetta boudin.</p>
                        </div>
                    </div>
                    <div className='row py-5'>
                        <div className='col-md-4 '>
                            <img src={app} className='admapimg'/>
                        </div>
                        <div className='col-md-8 bg-white p-5'>
                            <h2 className='admaph23'>4. Apply</h2>
                            <p className='mb-0 mt-4 admpbi'>Bacon ipsum dolor amet filet mignon pork belly hamburger pork tail shank pig andouille, pork loin cow sausage meatball capicola. Kielbasa porchetta meatball pig pork loin short ribs sirloin jowl landjaeger tail beef ribs rump short loin shank chuck. Jowl swine chicken ham, sausage kielbasa andouille turkey kevin short ribs doner frankfurter tмurducken. Meatloaf ball tip tail, strip picanha pork loin sausage shoulder. Ground round doner sirloin picanha, jowl pig porchetta boudin.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="parallax2">
                <div className='admpljk py-5'>
                    <div className='container py-5'>
                        <h1 className='text-center'>Parents Say</h1>
                        <p className='text-center'>Students and Parents Club</p>
                        <div className='row'>
                            <div className='col-md-6 bg-white border-bottom border-end'>
                                <div className='admsbatt ms-5'></div>
                                <div className='p-5'>
                                    <p className='admsednec'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed, condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus.</p>
                                    <div className='d-flex admdffai pt-4'>
                                        <img src={dp1} className='admdpimg'/>
                                        <div className='ps-4'>
                                            <h5 className='admh3gh mb-0'>Grace Hall</h5>
                                            <p className='admh3gh2 mb-0'>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 bg-white border-bottom'>
                                <div className='admsbatt ms-5'></div>
                                <div className='p-5'>
                                    <p className='admsednec'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed, condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus.</p>
                                    <div className='d-flex admdffai pt-4'>
                                        <img src={dp4} className='admdpimg'/>
                                        <div className='ps-4'>
                                            <h5 className='admh3gh mb-0'>Connor Walker</h5>
                                            <p className='admh3gh2 mb-0'>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 bg-white border-end'>
                                <div className='admsbatt ms-5'></div>
                                <div className='p-5'>
                                    <p className='admsednec'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed, condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus.</p>
                                    <div className='d-flex admdffai pt-4'>
                                        <img src={dp3} className='admdpimg'/>
                                        <div className='ps-4'>
                                            <h5 className='admh3gh mb-0'>Daniel Sims</h5>
                                            <p className='admh3gh2 mb-0'>Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 bg-white'>
                                <div className='admsbatt ms-5'></div>
                                <div className='p-5'>
                                    <p className='admsednec'>Sed nec blandit nibh. Pellentesque commodo suscipit gravida. Sed sit amet ex sed mi dignissim elementum in ut quam. Vivamus laoreet non mauris eget mattis. Nam turpis orci, consectetur vel accumsan sed, condimentum at sapien. Nunc ut egestas neque, eu hendrerit lacus.</p>
                                    <div className='d-flex admdffai pt-4'>
                                        <img src={dp2} className='admdpimg'/>
                                        <div className='ps-4'>
                                            <h5 className='admh3gh mb-0'>Kira Wood</h5>
                                            <p className='admh3gh2 mb-0'>Design</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 container'>
                <h1 className='py-5 text-center'>FAQ</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='border'>
                            <button className='d-flex admtogbtn p-4' data-bs-toggle="collapse" data-bs-target="#demo">
                                <p className='mb-0 admwcai'>1. How do I get credit for a Total School course?</p>
                                <img src={da} className='admdownarrow'/>
                            </button>
                            <div id="demo" className="collapse p-4">
                            Cras nec imperdiet neque. Vestibulum sem libero, ultrices sit amet elit at, aliquet accumsan purus. Suspendisse interdum felis at odio molestie, at elementum nisi dictum. Donec ac ultricies nisl. Nam posuere accumsan diam, vel mattis nibh volutpat hendrerit. Curabitur ultrices auctor nisl, vel ultricies massa euismod sed. Etiam at imperdiet nulla.
                            </div>
                        </div>
                        <div className='border'>
                            <button className='d-flex admtogbtn p-4' data-bs-toggle="collapse" data-bs-target="#demo1">
                                <p className='mb-0 admwcai'>2. Can I enroll as an international student?</p>
                                <img src={da} className='admdownarrow'/>
                            </button>
                            <div id="demo1" className="collapse p-4">
                            Cras nec imperdiet neque. Vestibulum sem libero, ultrices sit amet elit at, aliquet accumsan purus. Suspendisse interdum felis at odio molestie, at elementum nisi dictum. Donec ac ultricies nisl. Nam posuere accumsan diam, vel mattis nibh volutpat hendrerit. Curabitur ultrices auctor nisl, vel ultricies massa euismod sed. Etiam at imperdiet nulla.
                            </div>
                        </div>
                        <div className='border'>
                            <button className='d-flex admtogbtn p-4' data-bs-toggle="collapse" data-bs-target="#demo2">
                                <p className='mb-0 admwcai'>3. How much time will the course take?</p>
                                <img src={da} className='admdownarrow'/>
                            </button>
                            <div id="demo2" className="collapse p-4">
                            Cras nec imperdiet neque. Vestibulum sem libero, ultrices sit amet elit at, aliquet accumsan purus. Suspendisse interdum felis at odio molestie, at elementum nisi dictum. Donec ac ultricies nisl. Nam posuere accumsan diam, vel mattis nibh volutpat hendrerit. Curabitur ultrices auctor nisl, vel ultricies massa euismod sed. Etiam at imperdiet nulla.
                            </div>
                        </div>
                        <div className='border'>
                            <button className='d-flex admtogbtn p-4' data-bs-toggle="collapse" data-bs-target="#demo3">
                                <p className='mb-0 admwcai'>4. How do I take tests?</p>
                                <img src={da} className='admdownarrow'/>
                            </button>
                            <div id="demo3" className="collapse p-4">
                            Cras nec imperdiet neque. Vestibulum sem libero, ultrices sit amet elit at, aliquet accumsan purus. Suspendisse interdum felis at odio molestie, at elementum nisi dictum. Donec ac ultricies nisl. Nam posuere accumsan diam, vel mattis nibh volutpat hendrerit. Curabitur ultrices auctor nisl, vel ultricies massa euismod sed. Etiam at imperdiet nulla.
                            </div>
                        </div>
                        <div className='border'>
                            <button className='d-flex admtogbtn p-4' data-bs-toggle="collapse" data-bs-target="#demo4">
                                <p className='mb-0 admwcai'>5. What costs are involved? Are there any discounts?</p>
                                <img src={da} className='admdownarrow'/>
                            </button>
                            <div id="demo4" className="collapse p-4">
                            Cras nec imperdiet neque. Vestibulum sem libero, ultrices sit amet elit at, aliquet accumsan purus. Suspendisse interdum felis at odio molestie, at elementum nisi dictum. Donec ac ultricies nisl. Nam posuere accumsan diam, vel mattis nibh volutpat hendrerit. Curabitur ultrices auctor nisl, vel ultricies massa euismod sed. Etiam at imperdiet nulla.
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <p className='admloimppf'>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit met condimentum estibulum issim posuere cubilia Curae Suspendisse at consectetur massa. Curabitur non ipsum nisinec dapibus elit. Donec nec magna id lacus conse posuere.</p>
                        <form onSubmit={submitHandler}>
                            <div className='d-flex justify-content-between' style={{width:"100%"}}>
                                <span style={{width:"48%"}}>
                                    <label className='py-3 admloimppf'>Name</label><br/>
                                    <input className='border' style={{width:"100%", borderRadius:"25px",outline:"none", padding:"10px"}} type="text" value={fullName}  onChange={(e) => setFullName(e.target.value)}/>
                                </span>
                                <span style={{width:"48%"}}>
                                    <label className='py-3 admloimppf'>Email</label><br/>
                                    <input className='border' style={{width:"100%", borderRadius:"25px",outline:"none", padding:"10px"}} type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                                </span>
                            </div>
                            <span style={{width:"100%"}}>
                                <label className='py-3 admloimppf'>Message</label><br/>
                                <textarea className='border' style={{width:"100%", borderRadius:"25px",outline:"none", padding:"10px", minHeight:"100px"}}  type="text" value={message}  onChange={(e) => setMessage(e.target.value)}/>
                            </span>
                            <button className='subbtn py-3 px-5 my-4' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Foot/>
        </main>}
    </>
  )
}

export default Admission